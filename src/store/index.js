import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import blog from './modules/blog'
import user from './modules/user'
import userLogin from './modules/user-login'
import role from './modules/role'
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    blog,
    user,
    userLogin,
    role
  }
})
