<template>
	<scroll-view class="music-view" scroll-y>
		<view class="music-close" @click="handleClose">
			<u-icon name="arrow-down" size="14" color="#444"></u-icon>
		</view>
		<view class="music-wrap">
			<view class="wrap-left">
				<view class="music-player">
					<image class="img-bar" src="@/static/img/music/play-bar.png" mode="widthFix"></image>
					<image class="img-info" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
					<image class="img-cover" src="@/static/img/music/singlecover.png" mode="aspectFill"></image>
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
					<text class="head-title">This Is What You Came For</text>
					<text class="head-badge">MV</text>
				</view>
				<view class="wrap-desc">
					<text class="desc-info">
						专辑：<text class="info-text">This Is What You Came For</text>
					</text>
					<text class="desc-info">
						歌手：<text class="info-text">Madilyn</text>
					</text>
					<text class="desc-info">
						来源：<text class="info-text">今天</text>
					</text>
				</view>
				<scroll-view class="wrap-lyric" scroll-y>
					<view class="lyric-item" v-for="(item, index) in 100" :key="index">军令似骤雨来传</view>
				</scroll-view>
			</view>
		</view>
		<view class="music-body">
			<view class="music-left">
				<view class="music-comment">
					<view class="comment-head">
						<text class="head-title">听友评论<text class="head-subtitle">(已有2000条评论)</text></text>
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
						<view class="comment-media" v-for="(item, index) in 10" :key="index">
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
				<view class="music-recommend">
					<view class="recommend-head">
						<text class="head-title">包含这首歌的歌单</text>
					</view>
					<view class="recommend-body">
						<view class="recommend-list">
							<view class="recommend-item" v-for="(item, index) in 3" :key="index">
								<view class="recommend-img-left">
									<image class="img-recommend" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
								</view>
								<view class="recommend-block">
									<view class="recommend-title">超好听的音乐</view>
									<view class="recommend-text">227万</view>
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
							<view class="recommend-item" v-for="(item, index) in 5" :key="index">
								<view class="recommend-img-left">
									<image class="img-recommend" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
								</view>
								<view class="recommend-block">
									<view class="recommend-title">Run Free(Original Mix)</view>
									<view class="recommend-text">Deep Chills IVIE</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		name: 'music',
		data() {
			return {}
		},
		methods: {
			handleClose() {
				this.$emit('close')
			}
		}
	}
</script>

<style lang="scss" scoped>
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
					
					.img-bar {
						position: absolute;
						top: -180rpx;
						left: 50%;
						margin-left: -100rpx;
						width: 200rpx;
						z-index: 10;
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
					}
					
					.img-cover {
						width: 660rpx;
						height: 660rpx;
						border-radius: 50%;
						overflow: hidden;
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
					height: 1000rpx;
					
					.lyric-item {
						font-size: 26rpx;
						line-height: 1.56;
						text-align: center;
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