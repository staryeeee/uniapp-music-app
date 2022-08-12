import {
	fetchSongUrl
} from '@/api/music'

const myAudio = uni.createInnerAudioContext()

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
const hasMusicId = (id, list) => {
	let result = false
	list.forEach(item => {
		if (item.id == id) {
			result = true
		}
	})
	return result
}

export default {
    namespaced: true,
    state: {
		musicStatus: 'stop',
		currentTime: '00:00',
		sliderMax: 100,
		sliderValue: 0,
        currIdx: 0,
		currMusic: {},
		musicList: []
    },
    getters: {
    },
    mutations: {
		RENDER_MUSIC: (state, data) => {
			myAudio.onCanplay(() => {
				console.log('可以播放状态');
				state.duration = myAudio.duration
			})
			myAudio.onPlay(() => {
				console.log('开始播放')
				state.musicStatus = 'play'
			})
			myAudio.onPause(() => {
				console.log('已暂停');
				state.musicStatus = 'pause'
			})
			myAudio.onStop(() => {
				console.log('已停止');
				state.musicStatus = 'stop'
			})
			//音频播放进度更新事件	
			myAudio.onTimeUpdate(() => {
				state.currentTime = formatDuration(myAudio.currentTime)
				state.sliderValue = myAudio.currentTime
			})
			myAudio.onEnded((state) => {
				console.log('播放自然停止')
			})
			myAudio.onWaiting((state) => {
				// console.log('正在等待数据加载')
			})
		},
		SET_STATUS: (state, data) => {
			state.musicStatus = data
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
			state.musicStatus = 'stop'
			state.currentTime = '00:00'
			state.sliderMax = 100
			state.sliderValue = 0
			myAudio.src = ''
		},
		SET_MUSIC: (state, music) => {
			state.currMusic = music
			state.musicList.forEach((item, index) => {
				if (item.id == music.id) {
					state.currIdx = index
				}
			})
		},
		ADD_TO_LIST: (state, data, callback) => {
			let ids = []
			data.forEach(item => {
				ids.push(item.id)
			})
			fetchSongUrl({
				id: ids.join(',')
			}).then(res => {
				if (!res.data || (res.data && res.data.length == 0)) return
				data = data.map((item, index) => {
					item.url = res.data[index].url
					return item
				})
				data.forEach(item => {
					if (!hasMusicId(item.id, state.musicList)) {
						state.musicList.push(item)
					}
				})
				state.musicList.forEach((item, index) => {
					if (item.id == data[0].id) {
						state.currIdx = index
						state.currMusic = item
					}
				})
				callback && callback()
			})
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
			state.currMusic = state.musicList[state.currIdx]
		},
		NEXT_MUISIC: (state) => {
			if (state.currIdx == state.musicList.length - 1) {
				return uni.showToast({
					title: '已经是最后一首歌曲了',
					icon: 'none'
				})
			}
			state.currIdx += 1
			state.currMusic = state.musicList[state.currIdx]
		},
		PLAY_OR_PAUSE: (state) => {
			if (!state.currMusic.id) {
				return uni.showToast({
					title: '列表为空,请先添加歌曲',
					icon: 'none'
				})
			}
			if (state.musicStatus == "pause") { //如果暂停状态
				console.log('从暂停开始播放')
				return myAudio.play()
			}
			if (state.musicStatus == "play") { //如果处于播放状态，重新播放
				console.log('暂停播放')
				return myAudio.pause()
			}
			
			myAudio.src = state.currMusic.url
			if (state.musicList.length == 0) {
				uni.showToast({
					title: '列表为空,请先添加歌曲',
					icon: 'none'
				})
				return
			}
			if (state.musicStatus == "stop") { //如果处于停止状态，重新播放
				console.log('从停止状态开始播放')
				setTimeout(() => {
					myAudio.play()
				}, 500)
			}
		}
    },
    actions: {
		renderMusic({ commit }) {
			commit('RENDER_MUSIC')
		},
		resetMusic({ commit }) {
			commit('RESET_MUSIC')
		},
		setMusic({ commit }, music) {
			commit('SET_MUSIC', music)
		},
		addToList({ commit }, data) {
			commit('ADD_TO_LIST', data)
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
