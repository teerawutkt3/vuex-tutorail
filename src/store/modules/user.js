import AxiosService from '../../common/service/axios-service'
import router from "../../router";

const axios = new AxiosService()
const state = {
    user: {},
    users: []
}
const mutations = {
    CREATE_USER(state, payload) {
        axios.doPost('/api/user/generate-user', payload).then(res => {
            state.user = {}
            res.data
            router.push({path: '/user'})
        })
    },
    FIND_USER_BY_ID(state, idx) {
        state.user = state.users[idx]
        router.push({path: '/user/form'})
    }
    ,
    UPDATE_USER(state, payload) {
        state.blogs[payload.idx] = {
            title: payload.title,
            description: payload.description
        }
        state.blogs.push({})
        state.blogs.splice(state.blogs.length - 1, 1)

    },
    REMOVE_USER(state, id) {
        axios.doDelete(`/api/user/delete/${id}`).then(res => {
            console.log('delete: ', res)
            let idx = state.users.findIndex(e => e.id === id)
            state.users.splice(idx, 1)
        })
    },
    GET_USERS(state) {
        console.log('GET_USERS... ')
        axios.doGet('/api/user/user-all').then(res => {
            state.users = res.data
        })
    },
    CLEAR_FORM(state) {
        state.user = {}
    }
}
const actions = {
    createUser: ({commit}, payload) => {
        commit('CREATE_USER', payload)
    },
    findUserById: ({commit}, idx) => {
        commit('FIND_USER_BY_ID', idx)
    },
    updateUser: ({commit}, payload) => {
        commit('UPDATE_USER', payload)
    },
    removeUser: ({commit}, id) => {
        commit('REMOVE_USER', id)
    },
    getUsers: ({commit}) => {
        commit('GET_USERS')
    },
    clearForm: ({commit}) => {
        commit('CLEAR_FORM')
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
