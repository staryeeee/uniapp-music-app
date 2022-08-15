<template>
	<view class="mv-view">
		<view class="mv-wrap">
			<view class="wrap-left">
				<view class="mv-video">
					<video v-if="videoUrl"  class="video-mv" :src="videoUrl" :poster="mvData.cover" autoplay loop vslide-gesture enable-danmu danmu-btn controls></video>
				</view>
				<view class="mv-avatar">
					<image class="img-avatar" :src="mvData.cover" mode="aspectFill"></image>
					<view class="avatar-title">{{ mvData.artistName }}</view>
				</view>
				<view class="mv-title">{{ mvData.name }}</view>
				<view class="mv-text">
					发布：{{ mvData.publishTime }}
				</view>
				<view class="mv-tags">
					<u-tag class="mv-tag" text="MV" plain size="mini" color="#cb3631" borderColor="#cb3631" type="info"></u-tag>
					<u-tag class="mv-tag" text="音乐" plain size="mini" color="#cb3631" borderColor="#cb3631" type="info"></u-tag>
				</view>
				<view class="mv-comment">
					<view class="comment-head">
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
			<view class="wrap-right">
				<view v-if="simiList.length > 0" class="mv-recommend">
					<view class="recommend-head">
						<text class="head-title">包含这首歌的歌单</text>
					</view>
					<view class="recommend-body">
						<view class="recommend-list">
							<view class="recommend-item" v-for="(item, index) in simiList" :key="index" @click="handleMV(item)">
								<view class="recommend-img-left">
									<image class="img-recommend" mode="aspectFill" :src="item.cover"></image>
									<view class="img-title-top">{{ item.playCount }}</view>
									<view class="img-title-bottom">{{ item.duration | formatDate('mm:ss') }}</view>
								</view>
								<view class="recommend-block">
									<view class="recommend-title">{{ item.name }}</view>
									<view class="recommend-text">by {{ item.artistName }}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		fetchMvDetail,
		fetchMvUrl,
		fetchCommentMv,
		fetchSimiMv
	} from '@/api/music'
	
	export default {
		name: 'mv',
		props: {
			id: {
				type: String|Number,
				default: ''
			}
		},
		data() {
			return {
				mvData: {},
				videoUrl: '',
				
				simiList: [],
				commentList: []
			}
		},
		watch: {
			id(val) {
				this.initData()
			}
		},
		methods: {
			handleMV(data) {
				uni.navigateTo({
					url: '/pages/index/index?page=mv&id=' + data.id
				})
			},
			getMVSimi() {
				fetchSimiMv({
					mvid: this.id
				}).then(res => {
					this.simiList = res.mvs
				})
			},
			getMVComment() {
				fetchCommentMv({
					id: this.id
				}).then(res => {
					this.commentList = res.data
				})
			},
			getMVUrl() {
				fetchMvUrl({
					id: this.id
				}).then(res => {
					this.videoUrl = res.data.url || ''
				})
			},
			getMVDetail() {
				fetchMvDetail({
					mvid: this.id
				}).then(res => {
					this.mvData = res.data
				})
			},
			initData() {
				this.getMVDetail()
				this.getMVUrl()
				this.getMVComment()
				this.getMVSimi()
			}
		},
		mounted() {
			this.initData()
		}
	}
</script>

<style lang="scss" scoped>
	.mv-view {
		padding: 40rpx 60rpx;
		
		.mv-wrap {
			display: flex;
			justify-content: flex-start;
			
			.wrap-left {
				flex: 1;
				
				.mv-video {
					max-width: 1240rpx;
					max-height: 700rpx;
					
					.video-mv {
						width: 100%;
					}
				}
				
				.mv-avatar {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					margin-top: 30rpx;
					
					.img-avatar {
						width: 100rpx;
						height: 100rpx;
						border-radius: 50%;
						overflow: hidden;
					}
					
					.avatar-title {
						margin-left: 20rpx;
						font-size: 32rpx;
						line-height: 1;
					}
				}
				
				.mv-title {
					margin-top: 50rpx;
					font-size: 44rpx;
				}
				
				.mv-text {
					margin-top: 40rpx;
					font-size: 24rpx;
					line-height: 1;
					color: #999;
				}
				
				.mv-tags {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					margin-top: 40rpx;
					
					.mv-tag {
						margin-left: 20rpx;
					
						&:first-child {
							margin-left: 0;
						}
					}
				}
				
				.mv-comment {
					.comment-head {
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
			
			.wrap-right {
				width: 640rpx;
				margin-left: 60rpx;
					
				.mv-recommend {
					.recommend-head {
						.head-title {
							font-size: 32rpx;
							font-weight: bold;
						}
					}
					
					.recommend-body {
						margin-top: 30rpx;
						
						.recommend-list {
							.recommend-item {
								display: flex;
								justify-content: flex-start;
								align-items: center;
								padding: 10rpx 10rpx 10rpx 0;
								
								.recommend-img-left {
									position: relative;
									width: 300rpx;
									font-size: 0;
									
									.img-recommend {
										width: 280rpx;
										height: 160rpx;
										border-radius: 10rpx;
										overflow: hidden;
									}
									
									.img-title-top, .img-title-bottom {
										position: absolute;
										top: 20rpx;
										right: 30rpx;
										font-size: 24rpx;
										line-height: 1;
										color: #eee;
									}
									
									.img-title-bottom {
										top: inherit;
										bottom: 20rpx;
									}
								}
								
								.recommend-block {
									width: 320rpx;
									margin-left: 20rpx;
									
									.recommend-title {
										font-size: 26rpx;
										line-height: 36rpx;
										height: 72rpx;
										word-break: break-word;
										overflow: hidden;
										text-overflow: ellipsis;
										display: -webkit-box;
										-webkit-box-orient: vertical;
										-webkit-line-clamp: 2;
										lines: 2;
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