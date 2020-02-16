import AxiosService from '../../common/service/axios-service'
import router from "../../router";
import swal from 'sweetalert';

const axios = new AxiosService()
const state = {
    mode: true,
    user: {
        id: '',
        username: '',
        password: '',
        confirmPassword: ''
    },
    roles: [],
    users: []
}
const mutations = {
    CREATE_USER(state, payload) {
        // ==> Save User
        axios.doPost('/api/user/', payload).then(res => {
            state.user = {}
            let user = res.data
            //==> Assign role
            if (res.status == 'SUCCESS') {
                swal('Save User', `${user.username}`, 'success')
                router.push({ path: '/user' })
            }
        })
    },
    FIND_USER_BY_ID(state, id) {
        axios.doGet(`/api/user/${id}`).then(res=>{
            state.user = res.data
            state.user.password = ''
            state.user.confirmPassword = ''
            state.mode = false
            axios.doGet(`/api/role-assignment/findByUserId/${state.user.id}`).then(res=>{    
                state.roles = res.data        
            })
        })                
        router.push({ path: '/user/form' })
    },
    UPDATE_USER(state, payload) {
        state.blogs[payload.idx] = {
            title: payload.title,
            description: payload.description
        }
        state.blogs.push({})
        state.blogs.splice(state.blogs.length - 1, 1)
    },
    REMOVE_USER(state, id) {
        axios.doDelete(`/api/user/${id}`).then(() => {
            let idx = state.users.findIndex(e => e.id == id)
            state.users.splice(idx, 1)
        })
    },
    GET_USERS(state) {        
        axios.doGet('/api/user/').then(res => {
            state.users = res.data
        })
    },
    SET_FORM(state, payload) {
        state.roles = payload
    },
    CLEAR_FORM(state) {
        state.user = {}
    },
    NEW_FORM() {
        state.user = {}
        state.roles = []
    },
}
const actions = {
    createUser: ({ commit }, payload) => {
        commit('CREATE_USER', payload)
    },
    findUserById: ({ commit }, idx) => {
        commit('FIND_USER_BY_ID', idx)
    },
    updateUser: ({ commit }, payload) => {
        commit('UPDATE_USER', payload)
    },
    removeUser: ({ commit }, id) => {
        commit('REMOVE_USER', id)
    },
    setForm: ({ commit }, payload) => {
        commit('SET_FORM', payload)
    },
    getUsers: ({ commit }) => {
        commit('GET_USERS')
    },
    clearForm: ({ commit }) => {
        commit('CLEAR_FORM')
    },
    newForm: ({ commit }) => {
        commit('NEW_FORM')
    }
}
const getters = {
    getUser: (state) => {
        console.log('state: ', state)
        return state
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
