import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import blog from './modules/blog'
import userLogin from './modules/user-login'
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    blog,
    userLogin
  }
})
