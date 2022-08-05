<template>
	<view class="music-bar-view">
		<u-slider v-model="playSlider" activeColor="#cb3631" :blockSize="12" blockColor="#cb3631" inactiveColor="#c0c4cc"></u-slider>
		<view class="music-info" @click="handleShow">
			<view class="info-img-left">
				<image class="img-info" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
			</view>
			<view class="info-block">
				<view class="info-title">
					<text class="info-name">Unity</text> - The Walkers
				</view>
				<view class="info-text">
					00:00 / 04:10
				</view>
			</view>
		</view>
		<view class="music-player">
			<u-icon class="icon-player" name="heart" size="20" color="#555"></u-icon>
			<u-icon class="icon-player" name="play-left-fill" size="20" color="#cb3631"></u-icon>
			<u-icon v-show="isPlay" class="icon-player" name="pause-circle-fill" size="50" color="#cb3631"></u-icon>
			<u-icon v-show="!isPlay" class="icon-player" name="play-circle-fill" size="50" color="#cb3631"></u-icon>
			<u-icon class="icon-player" name="play-right-fill" size="20" color="#cb3631"></u-icon>
			<u-icon class="icon-player" name="share-square" size="20" color="#555"></u-icon>
		</view>
		<view class="music-action">
			<u-icon class="icon-action" name="gift" size="20" color="#555"></u-icon>
			<u-icon class="icon-action" name="reload" size="20" color="#555"></u-icon>
			<u-icon class="icon-action" name="list-dot" size="20" color="#555"></u-icon>
			<u-icon class="icon-action" name="eye-fill" size="20" color="#555"></u-icon>
			<u-icon class="icon-action" name="volume-fill" size="20" color="#555"></u-icon>
		</view>
	</view>
</template>

<script>
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
				isShow: this.show,
				isPlay: false,
				playSlider: 30
			}
		},
		watch: {
			show(val) {
				this.isShow = val
			}
		},
		methods: {
			handleShow() {
				this.$emit('show-music')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.music-bar-view {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 120rpx;
		z-index: 9999;
		background-color: #fff;
		
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
			display: flex;
			justify-content: flex-start;
			align-items: center;
				
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
	}
</style>