import {
	fetchSongUrl
} from '@/api/music'

let myAudio = uni.createInnerAudioContext()

const formatDuration = seconds => {
	seconds = Math.round(seconds) //首先去掉小数
	let hour = Math.floor(seconds / 3600) >= 10 ? Math.floor(seconds / 3600) : '0' + Math.floor(seconds /
		3600);
	seconds -= 3600 * hour;
	let min = Math.floor(seconds / 60) >= 10 ? Math.floor(seconds / 60) : '0' + Math.floor(seconds / 60);
	seconds -= 60 * min;
	let sec = seconds >= 10 ? Math.round(seconds) : '0' + Math.round(seconds);
	if (hour == '00') {
		return min + ':' + sec
	}
	return hour + ':' + min + ':' + sec;
}

export default {
    namespaced: true,
    state: {
		status: 'stop',
		currentTime: '00:00',
		sliderMax: 100,
		sliderValue: 0,
        currIdx: 0,
		currMusic: {},
		list: []
    },
    getters: {
    },
    mutations: {
		SET_STATUS: (state, data) => {
			state.status = data
		},
		SET_CURRENTTIME: (state, data) => {
			state.currentTime = data
		},
		SET_SLIDERMAX: (state, data) => {
			state.sliderMax = data
		},
		SET_SLIDERVALUE: (state, data) => {
			state.sliderValue = data
		},
		SET_CURRIDX: (state, data) => {
			state.currIdx = data
		},
		SET_MUSIC:  (state, data) => {
			state.currMusic = data
		},
		RESET_MUSIC: (state) => {
			state.status = 'stop'
			state.currentTime = '00:00'
			state.sliderMax = 100
			state.sliderValue = 0
			myAudio.src = ''
		},
		SET_MUSIC: (state, music) => {
			state.currMusic = music
			state.list.forEach((item, index) => {
				if (item.id == music.id) {
					state.currIdx = index
				}
			})
		},
		ADD_TO_LIST: (state, music) => {
			let hasMusic = false
			state.list.forEach(item => {
				if (item.id == music.id) {
					hasMusic = true
				}
			})
			if (!hasMusic) {
				state.list.push(music)
				state.currIdx = state.list.length - 1
			}
			state.currMusic = music
		},
		SLIDER_CHANGE: (state, data) => {
			myAudio.seek(data)
		},
		PREV_MUISIC: (state) => {
			if (state.currIdx == 0) {
				return uni.showToast({
					title: '已经是第一首歌曲了',
					icon: 'none'
				})
			}
			state.currIdx -= 1
			state.currMusic = state.list[state.currIdx]
		},
		NEXT_MUISIC: (state) => {
			if (state.currIdx == state.list.length - 1) {
				return uni.showToast({
					title: '已经是最后一首歌曲了',
					icon: 'none'
				})
			}
			state.currIdx += 1
			state.currMusic = state.list[state.currIdx]
		},
		PLAY_OR_PAUSE: (state) => {
			if (!state.currMusic.id) {
				return uni.showToast({
					title: '列表为空,请先添加歌曲',
					icon: 'none'
				})
			}
			if (state.status == "pause") { //如果暂停状态
				console.log('从暂停开始播放')
				return myAudio.play()
			}
			if (state.status == "play") { //如果处于播放状态，重新播放
				console.log('暂停播放')
				return myAudio.pause()
			}
			fetchSongUrl({
				id: state.currMusic.id
			}).then(res => {
				myAudio.src = res.data[0].url
				if (state.list.length == 0) {
					uni.showToast({
						title: '列表为空,请先添加歌曲',
						icon: 'none'
					})
					return
				}
				if (state.status == "stop") { //如果处于停止状态，重新播放
					console.log('从停止状态开始播放')
					setTimeout(() => {
						myAudio.play()
					}, 500)
				}
			})
		}
    },
    actions: {
		renderMusic({ commit }) {
			myAudio.onCanplay(() => {
				console.log('可以播放状态');
				commit('SET_SLIDERMAX', myAudio.duration)
			})
			myAudio.onPlay(() => {
				console.log('开始播放')
				commit('SET_STATUS', 'play')
			})
			myAudio.onPause(() => {
				console.log('已暂停');
				commit('SET_STATUS', 'pause')
			})
			myAudio.onStop(() => {
				console.log('已停止');
				commit('SET_STATUS', 'stop')
			})
			//音频播放进度更新事件	
			myAudio.onTimeUpdate(() => {
				commit('SET_CURRENTTIME', formatDuration(myAudio.currentTime))
				commit('SET_SLIDERVALUE', myAudio.currentTime)
			})
			myAudio.onEnded((state) => {
				console.log('播放自然停止')
			})
			myAudio.onWaiting((state) => {
				console.log('正在等待数据加载');
			})
		},
		resetMusic({ commit }) {
			commit('RESET_MUSIC')
		},
		setMusic({ commit }, music) {
			commit('SET_MUSIC', music || '')
		},
		addToList({ commit }, music) {
			commit('ADD_TO_LIST', music)
			commit('PLAY_OR_PAUSE')
		},
		sliderChange({ commit }, data) {
			commit('SLIDER_CHANGE', data)
		},
		playPrev({ commit }) {
			commit('PREV_MUISIC')
		},
		playNext({ commit }) {
			commit('NEXT_MUISIC')
		},
		playOrPause({ commit }) {
			commit('PLAY_OR_PAUSE')
		}
	}
}
