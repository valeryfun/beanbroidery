import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAILED,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAILED,
	PRODUCT_DELETE_REQUEST,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_DELETE_FAILED,
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_CREATE_FAILED,
	PRODUCT_CREATE_REQUEST,
	PRODUCT_CREATE_RESET,
	PRODUCT_UPDATE_REQUEST,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_FAILED,
	PRODUCT_UPDATE_RESET,
	PRODUCT_CREATE_REVIEW_REQUEST,
	PRODUCT_CREATE_REVIEW_SUCCESS,
	PRODUCT_CREATE_REVIEW_FAILED,
	PRODUCT_CREATE_REVIEW_RESET,
	PRODUCT_TOP_REQUEST,
	PRODUCT_TOP_SUCCESS,
	PRODUCT_TOP_FAILED
} from '../constants/productConstants'

export const productListReducers = (state = { products: [] }, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			// true so the component knows its loading
			return { loading: true, products: [] }
		case PRODUCT_LIST_SUCCESS:
			// flase bcos finished loading
			return {
				loading: false,
				products: action.payload.products,
				pages: action.payload.pages,
				page: action.payload.page
			}
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
			return { ...state, loading: true }
		case PRODUCT_DETAILS_SUCCESS:
			// false bcos finished loading
			return { loading: false, product: action.payload }
		case PRODUCT_DETAILS_FAILED:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const productDeleteReducers = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_DELETE_REQUEST:
			// true so the component knows its loading
			return { loading: true }
		case PRODUCT_DELETE_SUCCESS:
			// false bcos finished loading
			return { loading: false, success: true }
		case PRODUCT_DELETE_FAILED:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const productCreateReducers = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_CREATE_REQUEST:
			// true so the component knows its loading
			return { loading: true }
		case PRODUCT_CREATE_SUCCESS:
			// false bcos finished loading
			return { loading: false, success: true, product: action.payload }
		case PRODUCT_CREATE_FAILED:
			return { loading: false, error: action.payload }
		case PRODUCT_CREATE_RESET:
			return {}
		default:
			return state
	}
}

export const productUpdateReducers = (state = { product: {} }, action) => {
	switch (action.type) {
		case PRODUCT_UPDATE_REQUEST:
			// true so the component knows its loading
			return { loading: true }
		case PRODUCT_UPDATE_SUCCESS:
			// false bcos finished loading
			return { loading: false, success: true, product: action.payload }
		case PRODUCT_UPDATE_FAILED:
			return { loading: false, error: action.payload }
		case PRODUCT_UPDATE_RESET:
			return { product: {} }
		default:
			return state
	}
}

export const productReviewCreateReducers = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_CREATE_REVIEW_REQUEST:
			// true so the component knows its loading
			return { loading: true }
		case PRODUCT_CREATE_REVIEW_SUCCESS:
			// false bcos finished loading
			return { loading: false, success: true }
		case PRODUCT_CREATE_REVIEW_FAILED:
			return { loading: false, error: action.payload }
		case PRODUCT_CREATE_REVIEW_RESET:
			return {}
		default:
			return state
	}
}

export const productTopRatedReducers = (state = { products: [] }, action) => {
	switch (action.type) {
		case PRODUCT_TOP_REQUEST:
			// true so the component knows its loading
			return { loading: true, products: [] }
		case PRODUCT_TOP_SUCCESS:
			// false bcos finished loading
			return { loading: false, products: action.payload }
		case PRODUCT_TOP_FAILED:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
