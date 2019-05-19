import { login, register } from '../Servises/remote';
import { REGISTER_SUCCESS, LOGIN_SUCCESS, REDIRECTED } from '../Actions/actionsTypes';


function registerSuccess() {
    return {
        type: REGISTER_SUCCESS
    };
}
function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    };
}

export function redirect() {
    return {
        type: REDIRECTED
    };
}

function registerAction(name, email, password) {
    return async (dispatch) => {
        return await register(name, email, password)
            .then(json => {
                if (json.success) {
                    console.log('register')
                    console.log(json)
                    dispatch(registerSuccess());
                }
            });
    };
}

function loginAction(email, password) {
    return (dispatch) => {
        return login(email, password)
            .then(json => {
                console.log('login')
                console.log(json)
                localStorage.setItem('authToken', json.token);
                localStorage.setItem('user', json.user.name);
                localStorage.setItem('email', json.user.email);
                dispatch(loginSuccess());
            });
    };
}

export { registerAction, loginAction };