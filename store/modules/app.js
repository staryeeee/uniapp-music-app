
export default {
    namespaced: true,
    state: {
        version: '1.0.0',
		pageList: [{name: 'home'}],
		pageIndex: 0,
    },
    getters: {
    },
    mutations: {
		SET_PAGE: (state, data) => {
			if (state.pageList[state.pageList.length - 1] == data.name) return
			if (state.pageList.length > 10) {
				state.pageList = state.pageList.slice(1)
			}
			if (state.pageIndex > 0) {
				state.pageList = state.pageList.slice(0, state.pageIndex)
			}
			state.pageList.push({
				name: data.name,
				query: data.query,
				params: data.params
			})
			state.pageIndex = state.pageList.length - 1
		},
		SET_PREV_PAGE: (state) => {
			if (state.pageIndex == 0) return
			state.pageIndex -= 1
		},
		SET_NEXT_PAGE: (state) => {
			if (state.pageIndex == state.pageList.length - 1) return
			state.pageIndex += 1
		}
    },
    actions: {
		setPage({ commit }, data) {
			commit('SET_PAGE', data)
		},
		setPrevPage({ commit }, data) {
			commit('SET_PREV_PAGE')
		},
		setNextPage({ commit }, data) {
			commit('SET_NEXT_PAGE', data)
		}
	}
}
