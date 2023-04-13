import { ReactElement, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from '../../utils/hooks';
import {
	getSupplierCards,
	getSupplierCardsDetail,
	getSupplierCardsPhoto,
} from '../../services/actions/commonActions';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Photo from '../Photo/Photo';
import 'ag-grid-enterprise';
import { createRandomData } from '../../utils/helpers';
import Histogram from '../Histogram/Histogram';

function App(): ReactElement {
	const { supplierCards, supplierCardsDetails, supplierCardsPhoto } =
		useSelector((state) => state);
	const dispatch = useDispatch();

	const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

	const onGridReady = useCallback(() => {
		dispatch(getSupplierCards('31460'));
	}, [dispatch]);

	useEffect(() => {
		dispatch(getSupplierCardsDetail(supplierCards));
		dispatch(getSupplierCardsPhoto(supplierCards));
	}, [dispatch, supplierCards]);

	const rowData = useMemo(() => {
		return supplierCardsDetails.map(({ id, brand, name, priceU }) => ({
			Фото: supplierCardsPhoto[id],
			Номенклатура: id,
			Бренд: brand,
			Название: name,
			Цена: priceU / 100,
			График: createRandomData(),
		}));
	}, [supplierCardsDetails, supplierCardsPhoto]);

	const columnDefs = useMemo(() => {
		return [
			{
				field: 'Фото',
				cellRenderer: Photo,
				cellStyle: { display: 'flex', alignItems: 'center' },
				filter: false,
				maxWidth: 100,
				checkboxSelection: true,
			},
			{ field: 'Номенклатура', maxWidth: 200 },
			{ field: 'Бренд' },
			{ field: 'Название' },
			{ field: 'Цена', maxWidth: 200 },
			{
				field: 'График',
				maxWidth: 300,
				filter: false,
				cellRenderer: Histogram,
			},
		];
	}, []);

	const defaultColDef = useMemo(
		() => ({
			flex: 1,
			resizable: true,
			sortable: true,
			filter: true,
		}),
		[]
	);

	const sideBar = useMemo(() => {
		return {
			toolPanels: [
				{
					id: 'columns',
					labelKey: 'columns',
					labelDefault: 'Столбцы',
					iconKey: 'columns',
					toolPanel: 'agColumnsToolPanel',
					toolPanelParams: {
						suppressRowGroups: true,
						suppressValues: true,
						suppressPivots: true,
						suppressPivotMode: true,
						suppressColumnExpandAll: true,
					},
				},
				{
					id: 'filters',
					labelKey: 'filters',
					labelDefault: 'Фильтры',
					iconKey: 'filter',
					toolPanel: 'agFiltersToolPanel',
				},
				{
					id: 'columns 2',
					labelKey: 'columns',
					labelDefault: 'Настройки',
					iconKey: 'menu',
					toolPanel: 'agColumnsToolPanel',
					toolPanelParams: {
						suppressColumnSelectAll: true,
						suppressColumnFilter: true,
						suppressColumnExpandAll: true,
						suppressSyncLayoutWithGrid: true,
						suppressColumnMove: true,
					},
				},
			],
		};
	}, []);

	return (
		<div className='ag-theme-alpine' style={gridStyle}>
			<AgGridReact
				rowData={rowData}
				columnDefs={columnDefs}
				rowSelection='multiple'
				animateRows={true}
				sideBar={sideBar}
				onGridReady={onGridReady}
				defaultColDef={defaultColDef}
				domLayout={'autoHeight'}
				rowHeight={40}
			/>
		</div>
	);
}

export default App;
