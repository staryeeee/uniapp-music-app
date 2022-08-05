<template>
	<view class="like-list-view">
		<view class="like-list-head">
			<view class="head-img-left">
				<image class="img-head" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
			</view>
			<view class="head-block">
				<view class="head-title">
					<text class="title-badge">歌单</text>
					<text class="title-text">我喜欢的音乐</text>
				</view>
				<view class="head-time">
					stevenwjx 2022-08-08 创建
				</view>
				<view class="head-action">
					<u-button class="btn-action" type="primary" shape="circle" icon="map" text="播放全部"></u-button>
					<u-button class="btn-action" type="default" plain shape="circle" icon="plus" text="收藏"></u-button>
					<u-button class="btn-action" type="default" plain shape="circle" icon="share" text="分享"></u-button>
					<u-button class="btn-action" type="default" plain shape="circle" icon="download" text="下载全部"></u-button>
				</view>
				<view class="head-text">
					歌曲数：67 播放数：343
				</view>
			</view>
		</view>
		<view class="like-list-body">
			<view class="body-tabs">
				<u-tabs :list="tabList" keyName="title"></u-tabs>
			</view>
			<view class="body-list">
				<view class="music-list">
					<view class="music-item">
						<view class="music-num"></view>
						<view class="music-title">音乐标题</view>
						<view class="music-author">歌手</view>
						<view class="music-album">专辑</view>
						<view class="music-time">时长</view>
					</view>
					<view class="music-item" v-for="(item, index) in 20" :key="index">
						<view class="music-num">{{ index < 9 ? '0' + (index + 1) : index }}</view>
						<view class="music-title">你只管努力 其他的交给天意</view>
						<view class="music-author">Cli</view>
						<view class="music-album">你迟到的许多年</view>
						<view class="music-time">05:06</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'like-list',
		data() {
			return {
				tabList: [
					{ title: '歌曲列表' },
					{ title: '评论', badge: { value: 5 } },
					{ title: '收藏者' }
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.like-list-view {
		padding: 40rpx 60rpx 120rpx 60rpx;
		
		.like-list-head {
			display: flex;
			justify-content: flex-start;
			
			.head-img-left {
				width: 400rpx;
				
				.img-head {
					width: 400rpx;
					height: 400rpx;
					border-radius: 10rpx;
					overflow: hidden;
				}
			}
			
			.head-block {
				margin-left: 50rpx;
				flex: 1;
				
				.head-title {
					display: flex;
					align-items: center;
					
					.title-badge {
						margin-right: 20rpx;
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
					
					.title-text {
						font-size: 48rpx;
						font-weight: 500;
					}
				}
				
				.head-time {
					margin-top: 40rpx;
					font-size: 28rpx;
					color: #666;
				}
				
				.head-action {
					margin-top: 50rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					
					.btn-action {
						margin-left: 20rpx;
						height: 60rpx;
						line-height: 60rpx;
						
						&:first-child {
							margin-left: 0;
						}
					}
				}
				
				.head-text {
					margin-top: 40rpx;
					font-size: 24rpx;
					color: #999;
				}
			}
		}
		
		.like-list-body {
			margin-top: 60rpx;
			
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
							width: 40%;
							font-size: 24rpx;
							color: #333;
						}
						
						.music-author {
							width: 20%;
							font-size: 24rpx;
							color: #999;
						}
						
						.music-album {
							width: 30%;
							font-size: 24rpx;
							color: #999;
						}
						
						.music-time {
							width: 5%;
							font-size: 24rpx;
							color: #aaa;
						}
					}
				}
			}
		}
	}
</style>