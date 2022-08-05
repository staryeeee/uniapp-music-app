<template>
	<view class="download-list-view">
		<div class="download-list-head">
			<view class="head-filter">全部视频</view>
		</div>
		<view class="download-list-body">
			<view class="body-list">
				<view class="music-list">
					<view class="music-item">
						<view class="music-num"></view>
						<view class="music-title">音乐标题</view>
						<view class="music-author">歌手</view>
						<view class="music-album">专辑</view>
						<view class="music-size">大小</view>
						<view class="music-time">下载时间</view>
					</view>
					<view class="music-item" v-for="(item, index) in 20" :key="index">
						<view class="music-num">{{ index < 9 ? '0' + (index + 1) : index }}</view>
						<view class="music-title">你只管努力 其他的交给天意</view>
						<view class="music-author">Cli</view>
						<view class="music-album">你迟到的许多年</view>
						<view class="music-size">05M</view>
						<view class="music-time">00:26</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'download-list',
		data() {
			return {}
		}
	}
</script>

<style lang="scss" scoped>
	.download-list-view {
		padding: 40rpx 60rpx 120rpx 60rpx;
		
		.download-list-head {
			padding: 30rpx 0;
		
			.head-filter {
				display: inline-block;
				zoom: 1;
				vertical-align: middle;
				width: 200rpx;
				height: 60rpx;
				line-height: 60rpx;
				font-size: 26rpx;
				color: #fff;
				text-align: center;
				border: 1px solid #d9d9d9;
				background-color: #cb3631;
				border-radius: 60rpx;
			}
		}
		
		.download-list-body {
			.body-list {
				.music-list {
					.music-item {
						display: flex;
						justify-content: flex-start;
						align-items: center;
						width: 100%;
						height: 68rpx;
						
						.music-num {
							width: 5%;
							font-size: 24rpx;
							color: #aaa;
						}
						
						.music-title {
							width: 35%;
							font-size: 24rpx;
							color: #333;
						}
						
						.music-author {
							width: 20%;
							font-size: 24rpx;
							color: #999;
						}
						
						.music-album {
							width: 20%;
							font-size: 24rpx;
							color: #999;
						}
						
						.music-size {
							width: 10%;
							font-size: 24rpx;
							color: #999;
						}
						
						.music-time {
							width: 10%;
							font-size: 24rpx;
							color: #aaa;
						}
					}
				}
			}
		}
	}
</style>