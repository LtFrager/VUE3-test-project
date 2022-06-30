import axios from "axios";

export const tableModule = {
    state: () => ({
        headers:[],
        rows:[],
        limit: 25,
        page: 1,
        totalPages: 0
    }),
    getters:{
       
    },
    mutations:{
        setTableHeaders(state, headers){
            state.headers = headers
        },
        setTableRows(state, rows){
            state.rows = rows
        },
        setPage(state, page){
            state.page = page
        },
        setLimit(state, limit){
            state.limit = limit
        },
        setTotalPages(state, totalPages){
            state.totalPages = totalPages
        },
    },
    actions:{
        async fetchTable({state,commit}){
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
                    params:{
                        _page: state.page,
                        _limit: state.limit,
                    }
                })
                if(state.totalPages === 0) commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setTableRows',  response.data)
            } catch (error) {
                console.log(error);
            }
        },

        removeRow({state,commit}, row) {
            commit('setTableRows', state.rows.filter(r => r.id !== row.id))
        },

        addUpdateRow({state,commit}, rowData){
            console.log(rowData)
            // const rowData = {
            //         id: null ? this.formId : Date.now(),
            //         name: this.formName,
            //         email: this.formEmail,
            //         body: this.formBody
            // }
            const rowIndex = state.rows.findIndex(x => x.id == rowData.id)
            if(rowIndex !== -1){
                state.rows[rowIndex] = rowData
            } else {
                state.rows.push(rowData)
            }
        },
    },
    namespaced: true
}