import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
export const AdminStore = defineStore("admin", {

    state: () => {
        return {
            id: 0,
            account: "",
            token: ""
        }
    },
    actions: {},
    getters: {}

})
const TokenKey = 'Admin-Token'
var token = ""
//添加cookie
export function setToken(token) {
    return Cookies.set(TokenKey,token)
}
//清空cookie
export function removeToken(token) {
    return Cookies.remove(token)
}
export {TokenKey}