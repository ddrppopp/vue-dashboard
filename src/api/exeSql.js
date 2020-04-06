import fetch from '../utils/fetch'
export function exeSql(sql) {
    return fetch({
        url: `/exesql?sql=${sql}`
    })
}