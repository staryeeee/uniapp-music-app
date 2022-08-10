import {
	UNIAPP_COOKIE_KEY,
	UNIAPP_TOKEN_KEY,
	UNIAPP_USERINFO_KEY
} from '@/config/index'

export default {
    namespaced: true,
    state: {
		cookie: uni.getStorageSync(UNIAPP_COOKIE_KEY),
		token: uni.getStorageSync(UNIAPP_TOKEN_KEY),
        userInfo: uni.getStorageSync(UNIAPP_USERINFO_KEY) || {}
    },
    getters: {
        
    },
    mutations: {
		SET_COOKIE: (state, cookie) => {
			state.cookie = cookie
			uni.setStorageSync(UNIAPP_COOKIE_KEY, cookie)
		},
        SET_TOKEN: (state, token) => {
            state.token = token
			uni.setStorageSync(UNIAPP_TOKEN_KEY, token)
        },
		SET_USERINFO: (state, userInfo) => {
		    state.userInfo = userInfo
			uni.setStorageSync(UNIAPP_USERINFO_KEY, userInfo)
		},
		REMOVE_COOKIE: (state) => {
		    state.token = ''
			uni.removeStorageSync(UNIAPP_COOKIE_KEY)
		},
        REMOVE_TOKEN: (state) => {
            state.token = ''
			uni.removeStorageSync(UNIAPP_TOKEN_KEY)
        },
        REMOVE_USERINFO: (state) => {
            state.userInfo = {}
			uni.removeStorageSync(UNIAPP_USERINFO_KEY)
        }
    },
    actions: {
		setCookie({ commit }, cookie) {
			commit('SET_COOKIE', cookie || '')
		},
		setToken({ commit }, token) {
			commit('SET_TOKEN', token || '')
		},
		setUserInfo({ commit }, userInfo) {
			commit('SET_USERINFO', userInfo || {})
		}
	}
}
