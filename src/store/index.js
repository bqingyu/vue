import user from './modules/user'
import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
const store=new Vuex.Store({
    "modules":{
        user
    }
})
export default store