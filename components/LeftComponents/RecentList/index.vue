<template>
	<view class="recent-list-view">
		<div class="recent-list-head">
			<view class="head-total">共100首</view>
			<view class="head-filter">播放全部</view>
		</div>
		<view class="recent-list-body">
			<view class="body-list">
				<view class="music-list">
					<view class="music-item">
						<view class="music-num"></view>
						<view class="music-title">音乐标题</view>
						<view class="music-album">歌手</view>
						<view class="music-time">播放时间</view>
					</view>
					<view class="music-item" v-for="(item, index) in 20" :key="index">
						<view class="music-num">{{ index < 9 ? '0' + (index + 1) : index }}</view>
						<view class="music-title">你只管努力 其他的交给天意</view>
						<view class="music-album">Cli</view>
						<view class="music-time">30分钟前</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'recent-list',
		data() {
			return {}
		}
	}
</script>

<style lang="scss" scoped>
	.recent-list-view {
		padding: 40rpx 60rpx 120rpx 60rpx;
		
		.recent-list-head {
			padding: 30rpx 0;
			
			.head-total {
				font-size: 24rpx;
				color: #aaa;
			}
		
			.head-filter {
				margin-top: 40rpx;;
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
		
		.recent-list-body {
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
							width: 50%;
							font-size: 24rpx;
							color: #333;
						}
						
						
						.music-album {
							width: 35%;
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