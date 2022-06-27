import axios from "axios";

export const newsModule = {
    state: () => ({
        searchValue: '',
        selectedSort: '',
        news: [],
        limit: 0,
        page: 0,
        totalPages: 0,
        url:'https://jsonplaceholder.typicode.com/posts',
        isLoading: true
    }),
    getters:{
        sortedNews(state){
            return [...state.news].sort((p1,p2) => p1[state.selectedSort]?.localeCompare(p2[state.selectedSort]))
        },
        sortedAndSearchedNews(state, getters){
            return getters.sortedNews.filter(item => item.title.toLowerCase().includes(state.searchValue.toLowerCase()))
        }
    },
    mutations:{
        setNews(state, news){
            state.news = news
        },
        setSearchValue(state, searchValue){
            state.searchValue = searchValue
        },
        setSelectedSort(state, selectedSort){
            state.selectedSort = selectedSort
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
        setLoading(state, isLoading){
            state.isLoading = isLoading
        }
    },
    actions:{
        initNews({state,commit}){
            commit('setPage', 0)
            commit('setNews' , [])
            commit('setTotalPages', 0)
            commit('setLoading' , true)
        },

        async loadMoreNews({state,commit}){
            try {
                commit('setPage', state.page += 1)
                const response = await axios.get(state.url , {
                    params:{
                        _page: state.page,
                        _limit: state.limit 
                    }
                })
                if(state.totalPages === 0) commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setNews' ,  [...state.news, ...response.data])
                setTimeout(()=>{
                    commit('setLoading' , false)
                }, 1000)
                
            } catch (error) {
                console.log(error);
            }
        }



        // async fetchNews({state, commit}){
        //     try {
        //       commit('setPage', 1)
        //       const response = await axios.get(state.url , {
        //         params:{
        //           _page: state.page,
        //           _limit: state.limit 
        //         }
        //       })
        //       commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
        //       commit('setNews', response.data)
        //     } catch (error) {
        //       console.log(error);
        //     }
        // },
      
        // async loadMoreNews({state,commit}){
        //     try {
        //         commit('setPage', state.page += 1)
        //         const response = await axios.get(state.url , {
        //         params:{
        //             _page: state.page,
        //             _limit: state.limit 
        //         }
        //         })
        //         commit('setNews' ,  [...state.news, ...response.data])
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
    },
    namespaced: true
}