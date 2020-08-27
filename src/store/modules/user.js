import AxiosService from '../../common/service/axios-service'
import LoginService from "../../common/service/login-service";
import router from "../../router";
import swal from 'sweetalert';
const loginService = new LoginService()
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
    users: [],
    profile: {
        username: '',
        roles: []
    }
}
const mutations = {
    CREATE_USER(state, payload) {
        // ==> Save User
        axios.doPost('/api/user/', payload).then(res => {
            //state.user = {}
            let user = res.data
            //==> Assign role
            if (res.status == 'SUCCESS') {
                swal('Save User', `${user.username}`, 'success')
                router.push({ path: '/user' })
            } else {
                axios.processErr(res.message)
            }
        })
    },
    FIND_USER_BY_ID(state, id) {
        axios.doGet(`/api/user/${id}`).then(res => {
            state.user = res.data
            state.user.password = ''
            state.user.confirmPassword = ''
            state.mode = false
            axios.doGet(`/api/role-assignment/findByUserId/${state.user.id}`).then(res => {
                state.roles = res.data
            })
        })
        router.push({ path: '/user/form' })
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
    NEW_FORM(state) {
        state.mode = true
        state.user = {
            id: '',
            username: '',
            password: '',
            confirmPassword: ''
        }
        state.roles = []
    },
    GET_PROFILE(state) {
        loginService.getProfile().then(res=>{
            state.profile = res.data       
        })
    },
    CLEAR_STATE_ALL(state) {
        state.mode = true
        state.user = {
            id: '',
            username: '',
            password: '',
            confirmPassword: ''
        }
        state.roles = []
        state.users = []
        state.profile = {
            username: '',
            roles: []
        }

    }
}
const actions = {
    createUser: ({ commit }, payload) => {
        commit('CREATE_USER', payload)
    },
    findUserById: ({ commit }, idx) => {
        commit('FIND_USER_BY_ID', idx)
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
    },
    getProfile: ({ commit }) => {
        commit('GET_PROFILE')
    },
    clearStateAll: ({ commit }) => {
        commit('CLEAR_STATE_ALL')
    }
}
const getters = {
    getUser: (state) => {
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
