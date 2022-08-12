<template>
	<view class="music-bar-view">
		<u-slider v-show="currMusic.id" v-model="musicSliderValue" :min="0" :max="sliderMax" activeColor="#cb3631" :blockSize="10" blockColor="#cb3631" inactiveColor="#c0c4cc" @change="sliderChange"></u-slider>
		<view class="music-bar-content">
			<view class="music-info" @click="handleShow">
				<view v-show="currMusic.id" class="info-box">
					<view class="info-img-left">
						<image v-if="currMusic.album" class="img-info" mode="aspectFill" :src="currMusic.album.picUrl"></image>
					</view>
					<view class="info-block">
						<view class="info-title">
							<text class="info-name">{{ currMusic.name }}</text> - {{ currMusic.artists ? currMusic.artists[0].name : '' }}
						</view>
						<view class="info-text">
							{{ currentTime }} / {{ currMusic.duration | formatDate('mm:ss') }}
						</view>
					</view>
				</view>
			</view>
			<view class="music-player">
				<u-icon class="icon-player" name="heart" size="20" color="#555"></u-icon>
				<u-icon class="icon-player" name="play-left-fill" size="20" color="#cb3631" @click="playPrev"></u-icon>
				<u-icon class="icon-player" :name="musicStatus == 'play' ? 'pause-circle-fill' : 'play-circle-fill'" size="50" color="#cb3631" @click="playOrPause"></u-icon>
				<u-icon class="icon-player" name="play-right-fill" size="20" color="#cb3631" @click="playNext"></u-icon>
				<u-icon class="icon-player" name="share-square" size="20" color="#555"></u-icon>
			</view>
			<view class="music-action">
				<u-icon class="icon-action" name="gift" size="20" color="#555"></u-icon>
				<u-icon class="icon-action" name="reload" size="20" color="#555"></u-icon>
				<u-icon class="icon-action" name="list-dot" size="20" color="#555" @click="isShowPopups=true;"></u-icon>
				<u-icon class="icon-action" name="eye-fill" size="20" color="#555"></u-icon>
				<u-icon class="icon-action" name="volume-fill" size="20" color="#555"></u-icon>
			</view>
		</view>
		<u-popup :show="isShowPopups" :overlayOpacity="0.01" mode="right" closeable  @close="isShowPopups=false;">
			<view class="popup-music">
				<view class="music-head">
					<view class="head-title">当前播放</view>
					<view class="head-text">共 {{ musicList.length }} 首</view>
				</view>
				<scroll-view class="music-body" scroll-y>
					<view class="music-list">
						<view class="music-item" v-for="(item, index) in musicList" :key="index" @click.stop="handleMusic(item)">
							<view class="music-name">{{ item.name }}</view>
							<view class="music-author">{{ item.ar ? item.ar[0].name : '' }}</view>
							<view class="music-time">{{ item.dt | formatDate('mm:ss') }}</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	
	export default {
		name: 'music-bar',
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				isShowPopups: false,
				
				musicSliderValue: this.sliderValue
			}
		},
		watch: {
			currMusic(val) {
				this.resetMusic()
				this.playOrPause()
			},
			sliderValue(val) {
				this.musicSliderValue = val
			}
		},
		computed: {
			...mapState('music', ['musicStatus', 'currentTime', 'sliderMax', 'sliderValue', 'currIdx', 'currMusic', 'musicList'])
		},
		methods: {
			...mapActions({
				renderMusic: 'music/renderMusic',
				resetMusic: 'music/resetMusic',
				setMusic: 'music/setMusic',
				sliderChange: 'music/sliderChange',
				addToList: 'music/addToList',
				playPrev: 'music/playPrev',
				playNext: 'music/playNext',
				playOrPause: 'music/playOrPause'
			}),
			handleMusic(data) {
				this.addToList([data])
			},
			handleShow() {
				this.$emit('show-music')
			}
		},
		mounted() {
			this.renderMusic()
		}
	}
</script>

<style lang="scss" scoped>
	.music-bar-view {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		z-index: 9999;
		border-top: 2rpx solid #eee;
		background-color: #fff;
		
		.music-bar-content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 120rpx;
		}
		
		::v-deep .u-slider {
			position: absolute;
			top: -2rpx;
			left: 0;
			right: 0;
			width: 100%;
			
			uni-slider {
				margin: 0;
				
				.uni-slider-wrapper {
					min-height: 4rpx;
				}
				
				.uni-slider-tap-area {
					padding: 0;
				}
			}
		}
		
		.music-info {
			width: 33.33%;
			flex: 1;
			margin-left: 20rpx;
			
			.info-box {
				display: flex;
				justify-content: flex-start;
				align-items: center;
			}
				
			.info-img-left {
				.img-info {
					width: 80rpx;
					height: 80rpx;
					border-radius: 6rpx;
					overflow: hidden;
				}
			}
			
			.info-block {
				margin-left: 20rpx;
			
				.info-title {
					font-size: 26rpx;
					color: #aaa;
					
					.info-name {
						color: #444;
					}
				}
				
				.info-text {
					font-size: 24rpx;
					color: #aaa;
				}
			}
		}
		
		.music-player {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 33.33%;
			flex: 1;
			
			.icon-player {
				margin-left: 40rpx;
				
				&:first-child {
					margin-left: 0;
				}
			}
		}
		
		.music-action {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding-right: 80rpx;
			width: 33.33%;
			flex: 1;
			
			.icon-action {
				margin-left: 40rpx;
				
				&:first-child {
					margin-left: 0;
				}
			}
		}
		
		.popup-music {
			width: 800rpx;
			
			.music-head {
				padding-top: 20rpx;
				padding-left: 20rpx;
				height: 100rpx;
				border-bottom: 1px solid #eee;
				
				.head-title {
					font-size: 32rpx;
				}
				
				.head-text {
					margin-top: 6rpx;
					font-size: 24rpx;
					color: #999;
				}
			}
			
			.music-body {
				height: calc(100vh - 120rpx - 120rpx);
				
				.music-list {					
					.music-item {
						display: flex;
						justify-content: flex-start;
						align-items: center;
						padding: 0 30rpx;
						height: 70rpx;
						
						&:nth-child(even) {
							background-color: #f2f3f4;
						}
						
						.music-name {
							flex: 1;
							font-size: 24rpx;
						}
						
						.music-author {
							width: 200rpx;
							font-size: 24rpx;
							color: #999;
						}
						
						.music-time {
							width: 100rpx;
							font-size: 24rpx;
							color: #999;
						}
					}
				}
			}
		}
	}
</style>