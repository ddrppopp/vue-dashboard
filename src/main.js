import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import router from '../src/routes/index'

Vue.use(Router)
Vue.use(ElementUI)
const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router,
    data: {
        message: "hello world!!!"
    },
    template: "<App>123</App>"
});