export const tableFormModule = {
    state: () => ({
        id: null,
        name: null,
        email: null,
        body: null
    }),
    getters:{
       
    },
    mutations:{
        setId(state, id){
            state.id = id
        },
        setName(state, name){
            state.name = name
        },
        setEmail(state, email){
            state.email = email
        },
        setBody(state, body){
            state.body = body
        },
    },
    actions:{
        clearForm({commit}){
            commit('setId', null)
            commit('setName', null)
            commit('setEmail', null)
            commit('setBody', null)
       },
    },
    namespaced: true
}