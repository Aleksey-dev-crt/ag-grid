import {
	GET_SUPPLIER_CARDS,
	GET_SUPPLIER_CARDS_DETAILS,
	GET_SUPPLIER_CARDS_PHOTO,
} from '../actions/actionsTypes';
import { TCommonActions } from '../actions/commonActions';
import { TCardsDetail } from '../types';

export type TCommonState = {
	supplierCards: number[];
	supplierCardsDetails: TCardsDetail[];
	supplierCardsPhoto: { [index: string]: string };
};

const initialState = {
	supplierCards: [],
	supplierCardsDetails: [],
	supplierCardsPhoto: {},
};

export const commonReducer = (
	state: TCommonState = initialState,
	action: TCommonActions
): TCommonState => {
	switch (action.type) {
		case GET_SUPPLIER_CARDS: {
			return {
				...state,
				supplierCards: action.payload.data,
			};
		}

		case GET_SUPPLIER_CARDS_DETAILS: {
			return {
				...state,
				supplierCardsDetails: action.payload.data,
			};
		}

		case GET_SUPPLIER_CARDS_PHOTO: {
			return {
				...state,
				supplierCardsPhoto: action.payload.data,
			};
		}

		default:
			return state;
	}
};
