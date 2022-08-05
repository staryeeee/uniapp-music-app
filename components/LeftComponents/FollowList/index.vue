<template>
	<view class="follow-list-view">
		<view class="music-body">
			<view class="music-left">
				<view class="music-comment">
					<view class="comment-group">
						<view class="comment-media" v-for="(item, index) in 20" :key="index">
							<view class="media-img-left">
								<image class="img-media" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
							</view>
							<view class="media-block">
								<view class="media-title">
									<text class="title-author">账号已注销：</text>希望大家多多支持
								</view>
								<view class="media-text">2022年08月10日 13:00</view>
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
				<u-sticky :offsetTop="50" :customNavHeight="0">
					<view class="music-recommend">
						<view class="recommend-head">
							<text class="head-title">热门话题</text>
						</view>
						<view class="recommend-body">
							<view class="recommend-list">
								<view class="recommend-item" v-for="(item, index) in 3" :key="index">
									<view class="recommend-img-left">
										<image class="img-recommend" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
									</view>
									<view class="recommend-block">
										<view class="recommend-title">#最后的水族馆#</view>
										<view class="recommend-text">2271人参与</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="music-recommend">
						<view class="recommend-head">
							<text class="head-title">添加关注</text>
						</view>
						<view class="recommend-body">
							<view class="recommend-list">
								<view class="recommend-item" v-for="(item, index) in 5" :key="index">
									<view class="recommend-img-left">
										<image class="img-recommend" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
									</view>
									<view class="recommend-block">
										<view class="recommend-title">明星</view>
										<view class="recommend-text">774</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</u-sticky>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'follow-list',
		data() {
			return {}
		}
	}
</script>

<style lang="scss" scoped>
	.follow-list-view {
		padding: 40rpx 60rpx 120rpx 60rpx;
		
		.music-body {
			display: flex;
			justify-content: flex-start;
		
			.music-left {
				flex: 1;
				
				.music-comment {
					margin-top: 60rpx;
					
					&:first-child {
						margin-top: 0;
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
				width: 400rpx;
				
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