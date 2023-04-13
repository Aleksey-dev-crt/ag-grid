import React, { ReactElement } from 'react';
import HistogramStyles from './Histogram.module.css';
import { THistogram } from '../../services/types';

function Histogram({ value }: { value: THistogram[] }): ReactElement {
	return (
		<div className={HistogramStyles.container}>
			{value.map(({ date, amount }) => (
				<div
					style={{
						backgroundColor: 'royalblue',
						width: '10px',
						height: `${amount}%`,
					}}
					key={date}
				/>
			))}
		</div>
	);
}

export default Histogram;
