const state = {
    idx: '',
    title: '',
    description: '',
    blogs: []
}
const mutations = {
    ADD_VALUE(state, payload) {
        let blog = {
            title: payload.title,
            description: payload.description
        }
        state.blogs.push(blog)
    },
    UPDATE_BLOG(state, payload) {
        state.blogs[payload.idx] = {
            title: payload.title,
            description: payload.description
        }
        state.blogs.push({})
        state.blogs.splice(state.blogs.length - 1, 1)

    },
    REMOVE_BLOG(state, index) {
        state.blogs.splice(index, 1)
    },
    GET_VALUE_BY_IDX(state, index) {
        let blog = state.blogs[index]
        state.idx = index
        state.title = blog.title
        state.description = blog.description
    },
    CLEAR_FORM(state) {
        state.idx = ''
        state.title = ''
        state.description = ''
    }
}
const actions = {
    setBlog: ({commit}, payload) => {
        commit('ADD_VALUE', payload)
    },
    getBlogByIdx: ({commit}, payload) => {
        commit('GET_VALUE_BY_IDX', payload)
    },
    updateBlog: ({commit}, payload) => {
        commit('UPDATE_BLOG', payload)
    },
    removeBlog: ({commit}, payload) => {
        commit('REMOVE_BLOG', payload)
    },
    clearForm: ({commit}) => {
        commit('CLEAR_FORM')
    }
}
const getters = {
    getBlog: (state) => {
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
