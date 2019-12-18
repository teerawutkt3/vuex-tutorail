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
            state = res.data
            router.push({path: '/user'})
        })
    },
    UPDATE_USER(state, payload) {
        state.blogs[payload.idx] = {
            title: payload.title,
            description: payload.description
        }
        state.blogs.push({})
        state.blogs.splice(state.blogs.length - 1, 1)

    },
    REMOVE_USER(state, index) {
        state.blogs.splice(index, 1)
    },
    GET_USERS(state){
        console.log('GET_USERS... ')
        axios.doGet('/api/user/user-all').then(res => {
            state.users = res.data
        })
    }
}
const actions = {
    createUser: ({commit}, payload) => {
        commit('CREATE_USER', payload)
    },
    updateUser: ({commit}, payload) => {
        commit('UPDATE_USER', payload)
    },
    removeUser: ({commit}, payload) => {
        commit('REMOVE_USER', payload)
    },
    getUsers:({commit}) => {
        commit('GET_USERS')
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
