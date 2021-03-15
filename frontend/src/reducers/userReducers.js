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
	USER_UPDATE_FAIL,
	USER_DETAILS_RESET,
	USER_LIST_REQUEST,
	USER_LIST_SUCCESS,
	USER_LIST_FAIL,
	USER_LIST_RESET,
	USER_DELETE_REQUEST,
	USER_DELETE_SUCCESS,
	USER_DELETE_FAIL,
	USER_UPDATE_PROFILE_RESET,
	USER_UPDATE_PROFILE_REQUEST,
	USER_UPDATE_PROFILE_SUCCESS,
	USER_UPDATE_PROFILE_FAIL
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
		case USER_DETAILS_RESET:
			return {
				user: {}
			}
		default:
			return state
	}
}

export const userUpdateProfileReducers = (state = {}, action) => {
	switch (action.type) {
		case USER_UPDATE_REQUEST:
			// true so the component knows its loading
			return { loading: true }
		case USER_UPDATE_SUCCESS:
			// false bcos finished loading
			return { loading: false, success: true, userInfo: action.payload }
		case USER_UPDATE_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const userListReducers = (state = { users: [] }, action) => {
	switch (action.type) {
		case USER_LIST_REQUEST:
			// true so the component knows its loading
			return { loading: true }
		case USER_LIST_SUCCESS:
			// false bcos finished loading
			return { loading: false, users: action.payload }
		case USER_LIST_FAIL:
			return { loading: false, error: action.payload }
		case USER_LIST_RESET:
			return { users: [] }
		default:
			return state
	}
}

export const userDeleteReducers = (state = {}, action) => {
	switch (action.type) {
		case USER_DELETE_REQUEST:
			// true so the component knows its loading
			return { loading: true }
		case USER_DELETE_SUCCESS:
			// false bcos finished loading
			return { loading: false, success: true }
		case USER_DELETE_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const userUpdateReducers = (state = { user: {} }, action) => {
	switch (action.type) {
		case USER_UPDATE_PROFILE_REQUEST:
			// true so the component knows its loading
			return { loading: true }
		case USER_UPDATE_PROFILE_SUCCESS:
			// false bcos finished loading
			return { loading: false, success: true }
		case USER_UPDATE_PROFILE_FAIL:
			return { loading: false, error: action.payload }
		case USER_UPDATE_PROFILE_RESET:
			return {
				user: {}
			}
		default:
			return state
	}
}
