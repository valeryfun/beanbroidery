import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAILED,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAILED
} from '../constants/productConstants'

export const productListReducers = (state = { products: [] }, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			// true so the component knows its loading
			return { loading: true, products: [] }
		case PRODUCT_LIST_SUCCESS:
			// flase bcos finished loading
			return { loading: false, products: action.payload }
		case PRODUCT_LIST_FAILED:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const productDetailsReducers = (
	state = { product: { reviews: [] } },
	action
) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			// true so the component knows its loading
			return { loading: true, ...state }
		case PRODUCT_DETAILS_SUCCESS:
			// flase bcos finished loading
			return { loading: false, product: action.payload }
		case PRODUCT_DETAILS_FAILED:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
