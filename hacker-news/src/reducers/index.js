import {
	REG_START,
	REG_SUCCESS,
	REG_FAILED,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILED
} from "../actions"

const initialUser = {username: "", password: ""};

export const reducer = (state = initialUser, action) => {
	switch (action.type) {
		case REG_START:
			return{
				...state,
				inProgress: true,
				error: ""
			}
		case REG_SUCCESS:
			return{
				...state,
				inProgress: false,
				register: action.payload,
				error: "",
				username: action.payload
			}
		case REG_FAILED:
			return{
				...state,
				inProgress: false,
				error: action.payload
			}


		case LOGIN_START:
			return{
				...state,
				inProgress: true,
				success: false
			}
		case LOGIN_SUCCESS:
			return{
				...state,
				inProgress: false,
				success: true,
				username: action.payload,
				password: action.payload
			}
		case LOGIN_FAILED:
			return{
				...state,
				inProgress: false,
				success: false,
				username: "",
				password: ""
			}
		default:
			return state;
	}
}

