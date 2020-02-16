import AxiosService from '../../common/service/axios-service'
import swal from 'sweetalert'
const axios = new AxiosService()
const state = {
    role: {
        id: '',
        roleCode: '',
        roleName: '',
        description: ''
    }
}
const mutations = {
    FIND_ROLE_BY_ID(state, roleId) {
        axios.doGet(`/api/role/${roleId}`).then(res => {
            if (res.status == 'SUCCESS') {
                state.role = res.data
            } else {
                swal('Find Role Fail', '', 'error')
            }
        })
    },
    CLEAR_FORM(istate) {
        let id = istate.role.id
        state.role = {
            roleCode: '',
            roleName: '',
            description: ''
        }
        state.role.id = id
    },
    NEW_FORM() {
        state.role = {
            id: '',
            roleCode: '',
            roleName: '',
            description: ''
        }
    }
}
const actions = {
    findRoleById: ({ commit }, roleId) => {
        commit('FIND_ROLE_BY_ID', roleId)
    },
    clearForm: ({ commit }) => {
        commit('CLEAR_FORM')
    },
    newForm: ({ commit }) => {
        commit('NEW_FORM')
    }
}
const getters = {
    getRole: (state) => {
        return state.role
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
