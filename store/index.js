import app from './modules/app.js'
import auth from './modules/auth.js'
import music from './modules/music.js'

// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	modules: {
		app,
		auth,
		music
	}
})
// #endif

// #ifdef VUE3
import {
	createStore
} from 'vuex'
// todo ssr
const store = createStore({
	modules: {
		app,
		user
	}
})
// #endif


export default store
