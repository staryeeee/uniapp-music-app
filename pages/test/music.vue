<template>
	<view class="test-view">
		<view class="test-content">
			<view class="test-text">{{ musicUrl }}</view>
			<u-icon class="icon-player" :name="musicStatus == 'play' ? 'pause-circle-fill' : 'play-circle-fill'" size="50" color="#cb3631" @click="handlePlayOrPause"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myAudio: uni.createInnerAudioContext(),
				musicStatus: 'stop',
				musicUrl: 'http://m702.music.126.net/20220812153150/ab35c2fa2ddbb634ff01d885ed96a954/jd-musicrep-ts/ba53/a6a0/94e6/203a6d7d9b75aadd27899f31d81de33f.mp3',
			}
		},
		methods: {
			handlePlayOrPause() {
				if (this.musicStatus == "pause") { //如果暂停状态
					return this.myAudio.play()
				}
				if (this.musicStatus == "play") { //如果处于播放状态，重新播放
					return this.myAudio.pause()
				}
				if (this.musicStatus == "stop") { //如果处于停止状态，重新播放
					return this.myAudio.play()
				}
			},
			initData() {
				this.myAudio.src = this.musicUrl
				this.myAudio.onCanplay(() => {
					console.log('可以播放状态');
				})
				this.myAudio.onPlay(() => {
					console.log('开始播放')
					this.musicStatus = 'play'
				})
				this.myAudio.onPause(() => {
					console.log('已暂停');
					this.musicStatus = 'pause'
				})
				this.myAudio.onStop(() => {
					console.log('已停止');
					this.musicStatus = 'stop'
				})
				//音频播放进度更新事件	
				this.myAudio.onTimeUpdate(() => {
				})
				this.myAudio.onEnded((state) => {
					console.log('播放自然停止')
				})
				this.myAudio.onWaiting((state) => {
					// console.log('正在等待数据加载')
				})
			}
		},
		mounted() {
			this.initData()
		}
	}
</script>

<style lang="scss" scoped>
.test-view {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 100rpx;
	width: 100vw;
	height: 100vh;
	
	.test-content {
		text-align: center;
		
		.icon-player {
			display: inline-block;
			margin: 0 auto;
		}
	}
}
</style>
