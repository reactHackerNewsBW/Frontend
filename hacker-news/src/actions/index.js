
import axios from "axios";

function clg(...x) {
	for (let exes of x) console.log(exes);
}


const URL = "https://bw-backend-hn.herokuapp.com/api/auth"

const axiosWithAuthent = () => {
	const token = sessionStorage.getItem("token")

	return axios.create({
		headers: {
			Authorization: token
		},
		baseURL: "https://bw-backend-hn.herokuapp.com/"
	});
};

//#region register
export const REG_START = "REG_START";
export const REG_SUCCESS = "REG_SUCCESS";
export const REG_FAILED = "REG_FAILED";

export const register = user =>
	dispatch => {
		dispatch({ type: REG_START });
		axios

			/*	
			WATCH FOR CHANGE
			*/
			.post(`${URL}/register`, { username: user.username, password: user.password })
			.then(res => {
				clg(">>> ACTION Register (success)", res);
				dispatch({ type: REG_SUCCESS, payload: res.data })
				return (true)
			})
			.catch(err => {
				clg(`!!! PROBLEM ACTION Register (fail) ${err}`)
				dispatch({ type: REG_FAILED, payload: err })
			}
			)
	}
//#endregion register

//#region login
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const login = (user, pass) =>
	dispatch => {
		dispatch({ type: LOGIN_START });
		return axiosWithAuthent()
			.post(`${URL}/login`, { username: user, password: pass })
			.then(res => {
				clg(">>> ACTION Register (success)", res);
				dispatch({ type: LOGIN_SUCCESS, payload: res.data })
				return (true);
			})
			.catch(err => {
				clg(`!!! PROBLEM ACTION Login (fail) ${err}`)
				dispatch({ type: LOGIN_FAILED, payload: err })
			}
			)
	}

//#endregion login