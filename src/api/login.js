import fetch from '../utils/fetch'
export function login(userName, password) {
    console.log(userName+ ":" + password);
    return fetch({
        method: 'post',
        url: '/user/login',
        data: {
            userName,
            password
        }
    });
}