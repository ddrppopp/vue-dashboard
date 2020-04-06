import Cookie from 'js-cookie'
export function getToken() {
    return Cookie.get('ds-token');
}