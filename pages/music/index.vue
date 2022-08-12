<template>
	<scroll-view class="music-view" scroll-y>
		<view class="music-close" @click="handleClose">
			<u-icon name="arrow-down" size="14" color="#444"></u-icon>
		</view>
		<view class="music-wrap">
			<view class="wrap-left">
				<view class="music-player">
					<image class="img-bar-circle" src="@/static/img/music/play-bar-circle.png" mode="aspectFill"></image>
					<image class="img-bar" :class="{ play: musicStatus == 'play' }" src="@/static/img/music/play-bar.png" mode="aspectFill"></image>
					<image v-if="currMusic.al" :class="{ play: musicStatus == 'play', paused: musicStatus == 'pause' }" class="img-info" mode="aspectFill" :src="currMusic.album.picUrl"></image>
					<image class="img-cover" :class="{ play: musicStatus == 'play', paused: musicStatus == 'pause' }" src="@/static/img/music/singlecover.png" mode="aspectFill"></image>
				</view>
				<view class="music-action">
					<view class="action-wrap">
						<u-icon class="icon-action" name="heart" size="20" color="#ccc"></u-icon>
					</view>
					<view class="action-wrap">
						<u-icon class="icon-action" name="plus-circle" size="20" color="#ccc"></u-icon>
					</view>
					<view class="action-wrap">
						<u-icon class="icon-action" name="download" size="20" color="#ccc"></u-icon>
					</view>
					<view class="action-wrap">
						<u-icon class="icon-action" name="share-square" size="20" color="#ccc"></u-icon>
					</view>
				</view>
			</view>
			<view class="wrap-right">
				<view class="wrap-head">
					<text class="head-title">{{ currMusic.name }}</text>
					<text class="head-badge">MV</text>
				</view>
				<view class="wrap-desc">
					<text class="desc-info">
						专辑：<text class="info-text">{{ currMusic.artists ? currMusic.artists[0].name : '' }}</text>
					</text>
					<text class="desc-info">
						歌手：<text class="info-text">{{ currMusic.artists && currMusic.artists[0] ? currMusic.artists[0].name : '' }}</text>
					</text>
					<text class="desc-info">
						来源：<text class="info-text">今天</text>
					</text>
				</view>
				<scroll-view class="wrap-lyric" scroll-y scroll-with-animation :scroll-top="lyricTop">
					<view class="lyric-list">
						<view class="lyric-item" :id="'lyric-' + index" :class="{ active: lyricId == 'lyric-' + index }" v-for="(item, index) in lyricList" :key="index">
							<text class="lyric-text">{{ item.lyric }}</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="music-body">
			<view class="music-left">
				<view class="music-comment">
					<view class="comment-head">
						<text class="head-title">听友评论<text class="head-subtitle">(已有 {{ commentTotal }} 条评论)</text></text>
					</view>
					<view class="comment-body">
						<u-input placeholder="评论内容">
							<template slot="suffix">
								<u-button type="success" size="mini">发送</u-button>
							</template>
						</u-input>
					</view>
					<view class="comment-subhead">
						<text class="subhead-title">最新评论</text>
					</view>
					<view class="comment-group">
						<view class="comment-media" v-for="(item, index) in commentList" :key="index">
							<view class="media-img-left">
								<image v-if="item.user" class="img-media" mode="aspectFill" :src="item.user.avatarUrl"></image>
							</view>
							<view class="media-block">
								<view class="media-title">
									<text class="title-author">{{ item.user ? item.user.nickname : '' }}：</text>{{ item.content }}
								</view>
								<view class="media-text">{{ item.timeStr }}</view>
							</view>
							<view class="media-action">
								<view class="action-wrap">
									<u-icon class="icon-action" name="thumb-up" size="16" color="#ccc"></u-icon> 1000
								</view>
								<view class="action-wrap">
									<u-icon class="icon-action" name="share" size="16" color="#ccc"></u-icon>
								</view>
								<view class="action-wrap">
									<u-icon class="icon-action" name="chat" size="16" color="#ccc"></u-icon>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="music-right">
				<view v-if="gedanList.length > 0" class="music-recommend">
					<view class="recommend-head">
						<text class="head-title">包含这首歌的歌单</text>
					</view>
					<view class="recommend-body">
						<view class="recommend-list">
							<view class="recommend-item" v-for="(item, index) in gedanList" :key="index" @click="handleAlbum(item)">
								<view class="recommend-img-left">
									<image class="img-recommend" mode="aspectFill" :src="item.coverImgUrl"></image>
								</view>
								<view class="recommend-block">
									<view class="recommend-title">{{ item.name }}</view>
									<view class="recommend-text">{{ item.creator ? item.creator.nickname : '' }}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="music-recommend">
					<view class="recommend-head">
						<text class="head-title">相似歌曲</text>
					</view>
					<view class="recommend-body">
						<view class="recommend-list">
							<view class="recommend-item" v-for="(item, index) in similarList" :key="index" @click="handleMusic(item)">
								<view class="recommend-img-left">
									<image v-if="item.album" class="img-recommend" mode="aspectFill" :src="item.album.picUrl"></image>
								</view>
								<view class="recommend-block">
									<view class="recommend-title">{{ item.name }}</view>
									<view class="recommend-text">{{ item.album ? item.album.name : '' }}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<music-bar :music="currMusic"></music-bar>
	</scroll-view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		fetchSongDetail,
		fetchLyric,
		fetchSimiSong,
		fetchRelatedPlaylist,
		fetchCommentMusic
	} from '@/api/music'
	import MusicBar from '@/components/MusicBar'
	
	export default {
		name: 'music',
		components: {
			MusicBar
		},
		data() {
			return {
				id: '',
				lyricIdx: 0,
				
				commentTotal: 0,
				lyricList: [],
				similarList: [],
				gedanList: [],
				commentList: []
			}
		},
		computed: {
			...mapState('music', ['musicStatus', 'currMusic', 'currentTime']),
			lyricId() {
				return 'lyric-' + this.lyricIdx
			},
			lyricTop() {
				let res = 0, maxRes = 0
				if (this.lyricIdx < 4) {
					return res
				}
				this.lyricList.forEach((item, index) => {
					if (index < this.lyricIdx - 4) {
						res += item.height || 0
					}
					if (index <= this.lyricList.length - 11) {
						maxRes += item.height || 0
					}
				})
				if (res > maxRes) {
					return maxRes
				}
				return res
			}
		},
		watch: {
			currMusic(val) {
				this.id = val.id
				this.initData()
			},
			currentTime(val) {
				let time, nextLyricTime
				this.lyricList.forEach((item, index) => {
					time = item.time.match(/\d{2}:\d{2}/)[0]
					if (this.currentTime >= time) {
						nextLyricTime = this.lyricList[index + 1]
						if (nextLyricTime) {
							nextLyricTime = nextLyricTime.time.match(/\d{2}:\d{2}/)[0]
						}
						if (this.currentTime < nextLyricTime) {
							this.lyricIdx = index
						}
					}
				})
			}
		},
		methods: {
			...mapActions({
				addToList: 'music/addToList'
			}),
			handleMusic(data) {
				this.addToList([data])
			},
			handleAlbum(data) {
				uni.navigateTo({
					url: '/pages/index/index?page=album-list&id=' + data.id
				})
			},
			handleClose() {
				uni.navigateTo({
					url: '/pages/index/index'
				})
			},
			getSimilarList() {
				fetchSimiSong({
					id: this.id
				}).then(res => {
					this.similarList = res.songs
				})
			},
			getGedanList() {
				fetchRelatedPlaylist({
					id: this.id
				}).then(res => {
					this.gedanList = res.playlists
				})
			},
			getCommentList() {
				fetchCommentMusic({
					id: this.id
				}).then(res => {
					this.commentTotal = res.total
					this.commentList = res.comments || []
				})
			},
			getLyric() {
				fetchLyric({
					id: this.id
				}).then(res => {
					let lyric = res.lrc.lyric
					if (lyric == '') {
						return [{
							time: 0,
							lyric: '这个地方没有歌词',
							uid: 520
						}]
					}
					let lyricList = [],
						lyricArr = lyric.split('\n')
					
					const regTime = /\d{2}:\d{2}.\d{2,3}/
					
					lyricArr.forEach(item => {
						if (item.match(regTime)) {
							lyricList.push({
								time: item.match(regTime)[0],
								lyric: item.split(']')[1],
								uid: +new Date()
							})
						}
					})
					this.lyricList = lyricList
					this.getLyricHeight()
				})
			},
			getLyricHeight() {
				this.$nextTick(() => {
					var query = uni.createSelectorQuery().in(this);
					query.selectAll('.lyric-item').boundingClientRect(data => {
						this.lyricList = this.lyricList.map((item, index) => {
							item.height = data[index].height
							return item
						})
					}).exec()
				})
			},
			getSongDetail() {
				fetchSongDetail({
					ids: this.id
				}).then(res => {
					if (res.songs && res.songs.length > 0) {
						let songs = res.songs.map(item => {
							item.album = item.al
							item.artists = item.ar
							item.duration = item.dt
							return item
						})
						this.addToList(songs)
					}
				})
			},
			initData() {
				this.getSongDetail()
				this.getLyric()
				this.getCommentList()
				this.getGedanList()
				this.getSimilarList()
			}
		},
		onLoad(options) {
			this.id = this.currMusic.id || options.id
			this.initData()
		}
	}
</script>

<style lang="scss" scoped>
	@keyframes rotate {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(1turn);
		}
	}
		
	.music-view {
		
		.music-close {
			display: flex;
			justify-content: center;
			align-items: center;
			position: fixed;
			top: 20rpx;
			left: 60rpx;
			width: 60rpx;
			height: 60rpx;
			z-index: 9;
			background-color: #fff;
			border-radius: 50%;
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		}
		
		.music-wrap {
			padding: 0 100rpx;
			display: flex;
			justify-content: flex-start;
			
			.wrap-left {
				width: 50%;
				flex: 1;
				padding-top: 200rpx;
				
				.music-player {
					margin: 0 auto;
					position: relative;
					width: 660rpx;
					
					.img-bar-circle {
						position: absolute;
						top: -165rpx;
						left: 50%;
						margin-left: -33rpx;
						width: 60rpx;
						height: 60rpx;
						z-index: 19;
					}
					
					.img-bar {
						position: absolute;
						top: -150rpx;
						left: 50%;
						margin-left: -20rpx;
						width: 200rpx;
						height: 292rpx;
						z-index: 10;
						transform-origin: 0 33rpx;
						transform: rotate(-30deg);
						transition: all .3s ease;
						
						&.play {
							transform: rotate(0);
						}
					}
					
					.img-info {
						position: absolute;
						top: 50%;
						left: 50%;
						margin-left: -220rpx;
						margin-top: -220rpx;
						width: 440rpx;
						height: 440rpx;
						border-radius: 50%;
						overflow: hidden;
						animation: rotate 20s linear infinite alternate;
						
						&.play {
							animation-play-state: running; 
						}
						
						&.paused {
							animation-play-state: paused; 
						}
					}
					
					.img-cover {
						width: 660rpx;
						height: 660rpx;
						border-radius: 50%;
						overflow: hidden;
						animation: rotate 20s linear infinite alternate;
						
						&.play {
							animation-play-state: running; 
						}
						
						&.paused {
							animation-play-state: paused; 
						}
					}
				}
				
				.music-action {
					margin-top: 60rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					
					.action-wrap {
						display: flex;
						justify-content: center;
						align-items: center;
						margin-left: 80rpx;
						width: 80rpx;
						height: 80rpx;
						background-color: #eee;
						border-radius: 50%;
						
						&:first-child {
							margin-left: 0;
						}
					}
				}
			}
			
			.wrap-right {
				width: 50%;
				flex: 1;
				padding-top: 100rpx;
				
				.wrap-head {
					.head-title {
						display: inline-block;
						zoom: 1;
						vertical-align: middle;
						font-size: 48rpx;
						font-weight: bold;
					}
					
					.head-badge {
						display: inline-block;
						zoom: 1;
						vertical-align: middle;
						padding: 0 10rpx;
						margin-left: 20rpx;
						height: 38rpx;
						line-height: 38rpx;
						font-size: 26rpx;
						color: #cb3631;
						border: 1px solid #cb3631;
						border-radius: 6rpx;
					}
				}
			
				.wrap-desc {
					margin-top: 20rpx;
						
					.desc-info {
						margin-left: 30rpx;
						font-size: 26rpx;
						
						&:first-child {
							margin-left: 0;
						}
							
						.info-text {
							color: #999;
						}
					}
				}
				
				.wrap-lyric {
					margin-top: 60rpx;
					width: 80%;
					height: 800rpx;
					
					.lyric-item {
						padding: 20rpx 0;
						font-size: 0;
						text-align: left;
						
						.lyric-text {
							font-size: 28rpx;
							line-height: 40rpx;
							color: #999;
						}
						
						&.active {
							.lyric-text {
								color: #444;
							}
						}
					}
				}
			}
		}
	
		.music-body {
			display: flex;
			justify-content: flex-start;
			margin-top: 100rpx;
			padding: 0 100rpx;
		
			.music-left {
				flex: 1;
				
				.music-comment {
					margin-top: 60rpx;
					
					&:first-child {
						margin-top: 0;
					}
					
					.comment-head {
						.head-title {
							font-size: 32rpx;
							font-weight: bold;
						}
					}
					
					.comment-body {
						margin-top: 30rpx;
							
						::v-deep .u-input {
							border: 1px solid #eee;
							border-radius: 6rpx;
						}
					}
					
					.comment-subhead {
						margin-top: 60rpx;
						
						.subhead-title {
							font-size: 30rpx;
							font-weight: bold;
						}
					}
					
					.comment-group {
						.comment-media {
							position: relative;
							display: flex;
							justify-content: flex-start;
							align-items: center;
							padding: 10rpx 10rpx 10rpx 0;
							
							.media-img-left {
								width: 110rpx;
								font-size: 0;
								
								.img-media {
									width: 110rpx;
									height: 110rpx;
									border-radius: 6rpx;
									overflow: hidden;
								}
							}
							
							.media-block {
								flex: 1;
								margin-left: 20rpx;
								height: 110rpx;
								border-bottom: 1px solid #eee;
								
								.media-title {
									font-size: 26rpx;
									line-height: 36rpx;
									height: 72rpx;
									overflow: hidden;
									text-overflow: ellipsis;
									display: -webkit-box;
									-webkit-box-orient: vertical;
									-webkit-line-clamp: 2;
									lines: 2;
								}
								
								.media-text {
									font-size: 26rpx;
									color: #999;
								}
							}
								
							.media-action {
								position: absolute;
								bottom: 20rpx;
								right: 20rpx;
								display: flex;
								justify-content: flex-start;
								align-items: center;
								
								.action-wrap {
									margin-left: 20rpx;
									font-size: 28rpx;
									color: #ccc;
									
									&:first-child {
										margin-left: 0;
									}
									
									.icon-action {
										display: inline-block;
									}
								}
							}
						}
					}
				}
			}
			
			.music-right {
				margin-left: 90rpx;
				width: 520rpx;
				
				.music-recommend {
					margin-top: 60rpx;
					
					&:first-child {
						margin-top: 0;
					}
						
					.recommend-head {
						.head-title {
							font-size: 32rpx;
							font-weight: bold;
						}
					}
					
					.recommend-body {
						.recommend-list {
							.recommend-item {
								display: flex;
								justify-content: flex-start;
								align-items: center;
								padding: 10rpx 10rpx 10rpx 0;
								
								.recommend-img-left {
									width: 110rpx;
									font-size: 0;
									
									.img-recommend {
										width: 110rpx;
										height: 110rpx;
										border-radius: 6rpx;
										overflow: hidden;
									}
								}
								
								.recommend-block {
									flex: 1;
									margin-left: 20rpx;
									
									.recommend-title {
										font-size: 26rpx;
									}
									
									.recommend-text {
										font-size: 26rpx;
										color: #999;
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>