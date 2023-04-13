import { GET_SUPPLIER_CARDS, GET_SUPPLIER_CARDS_DETAILS, GET_SUPPLIER_CARDS_PHOTO } from './actionsTypes';
import { baseUrl, checkResponse } from '../../utils/constants';
import type { AppThunk, AppDispatch } from '../store';
import { TCardsDetail } from '../types';

interface IfetchSupplierCards {
	readonly type: typeof GET_SUPPLIER_CARDS;
	readonly payload: { data: number[] };
}

interface IfetchSupplierCardsDetail {
	readonly type: typeof GET_SUPPLIER_CARDS_DETAILS;
	readonly payload: { data: TCardsDetail[] };
}

interface IfetchSupplierCardsPhoto {
	readonly type: typeof GET_SUPPLIER_CARDS_PHOTO;
	readonly payload: { data: { [index: string]: string } };
}

export type TCommonActions = IfetchSupplierCards | IfetchSupplierCardsDetail | IfetchSupplierCardsPhoto;

export const fetchSupplierCards = (data: number[]): TCommonActions => ({
	type: GET_SUPPLIER_CARDS,
	payload: { data },
});

export const fetchSupplierCardsDetails = (data: TCardsDetail[]): TCommonActions => ({
	type: GET_SUPPLIER_CARDS_DETAILS,
	payload: { data },
});

export const fetchSupplierCardsPhoto = (data: { [index: string]: string }): TCommonActions => ({
	type: GET_SUPPLIER_CARDS_PHOTO,
	payload: { data },
});

export const getSupplierCards: AppThunk<Promise<TCommonActions>> =
	(payload: string) => (dispatch: AppDispatch) => {
		return fetch(`${baseUrl}/get_supplier_cards/?supplier_id=${payload}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(checkResponse)
			.then((data) => {
				dispatch(fetchSupplierCards(data));
				return data;
			})
			.catch((error) => console.log(error));
	};

export const getSupplierCardsDetail: AppThunk<Promise<TCommonActions>> =
	(payload: number[]) => (dispatch: AppDispatch) => {
		return fetch(`${baseUrl}/cards_detail`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ nm_ids: payload }),
		})
			.then(checkResponse)
			.then((data) => {
				dispatch(fetchSupplierCardsDetails(data));
				return data;
			})
			.catch((error) => console.log(error));
	};

	export const getSupplierCardsPhoto: AppThunk<Promise<TCommonActions>> =
	(payload: number[]) => (dispatch: AppDispatch) => {
		return fetch(`${baseUrl}/cards_photo`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ nm_ids: payload }),
		})
			.then(checkResponse)
			.then((data) => {
				dispatch(fetchSupplierCardsPhoto(data));
				return data;
			})
			.catch((error) => console.log(error));
	};
