import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_REQUEST,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAIL,
	USER_UPDATE_REQUEST,
	USER_UPDATE_SUCCESS,
	USER_UPDATE_FAIL
} from '../constants/userConstants'

export const userLoginReducers = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			// true so the component knows its loading
			return { loading: true }
		case USER_LOGIN_SUCCESS:
			// flase bcos finished loading
			return { loading: false, userInfo: action.payload }
		case USER_LOGIN_FAIL:
			return { loading: false, error: action.payload }
		case USER_LOGOUT:
			return {}
		default:
			return state
	}
}

export const userRegisterReducers = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			// true so the component knows its loading
			return { loading: true }
		case USER_REGISTER_SUCCESS:
			// flase bcos finished loading
			return { loading: false, userInfo: action.payload }
		case USER_REGISTER_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const userDetailsReducers = (state = { user: {} }, action) => {
	switch (action.type) {
		case USER_DETAILS_REQUEST:
			// true so the component knows its loading
			return { ...state, loading: true }
		case USER_DETAILS_SUCCESS:
			// flase bcos finished loading
			return { loading: false, user: action.payload }
		case USER_DETAILS_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const userUpdateProfileReducers = (state = {}, action) => {
	switch (action.type) {
		case USER_UPDATE_REQUEST:
			// true so the component knows its loading
			return { oading: true }
		case USER_UPDATE_SUCCESS:
			// false bcos finished loading
			return { loading: false, success: true, userInfo: action.payload }
		case USER_UPDATE_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
