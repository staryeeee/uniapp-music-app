<template>
	<view class="radio-list-view">
		<view class="radio-list-head">
			<view class="head-img-left">
				<image class="img-head" mode="aspectFill" :src="radioData.picUrl || radioData.coverUrl"></image>
			</view>
			<view class="head-block">
				<view class="head-title">
					<text class="title-badge">电台</text>
					<text class="title-text">{{ radioData.name }}</text>
				</view>
				<view class="head-time">
					<image v-if="radioData.creator" class="img-creator" mode="aspectFill" :src="radioData.creator.avatarUrl"></image>
					<text class="text-creator">{{ radioData.creator ? radioData.creator.nickname : '' }} {{ radioData.createTime | formatDate }}</text>
					创建
				</view>
				<view class="head-action">
					<u-button class="btn-action btn-play" type="primary" shape="circle" icon="map" text="播放全部" @click="handleMusics"></u-button>
					<u-button class="btn-action" type="default" plain shape="circle" icon="plus" :text="'收藏(' + (radioDataDynamic.bookedCount || 0) + ')'"></u-button>
					<u-button class="btn-action" type="default" plain shape="circle" icon="share" :text="'分享(' + (radioDataDynamic.shareCount || 0) + ')'"></u-button>
					<u-button class="btn-action" type="default" plain shape="circle" icon="download" text="下载全部"></u-button>
				</view>
				<view class="head-info">
					<view class="head-text text-wrap">
						简介：<text class="text-desc">{{ radioData.desc || radioData.description }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="radio-list-body">
			<view class="body-tabs">
				<u-tabs :list="tabList" keyName="title" @change="handleTabChange"></u-tabs>
			</view>
			<view class="body-list">
				<view v-if="tabIdx == 0" class="music-list">
					<view class="music-item">
						<view class="music-num">共 {{ radioCount }} 期</view>
						<view class="music-title"></view>
						<view class="music-play"></view>
						<view class="music-like"></view>
						<view class="music-radio"></view>
						<view class="music-time"></view>
					</view>
					<view class="music-item" v-show="item.name" v-for="(item, index) in musicList" :key="index" @click="handleMusic([item])">
						<view class="music-num">{{ musicList.length - index < 10 ? '0' + (musicList.length - index) : musicList.length - index }}</view>
						<view class="music-img">
							<image v-if="item.coverUrl" class="img-music" :src="item.coverUrl" mode="aspectFill"></image>
						</view>
						<view class="music-title">{{ item.name }}</view>
						<view class="music-play">
							<u-icon name="play-circle" color="#999" size="16"></u-icon>
							{{ item.listenerCount }}
						</view>
						<view class="music-like">
							<u-icon name="thumb-up" color="#999" size="16"></u-icon>
							{{ item.likedCount }}
						</view>
						<view class="music-publish">{{ item.scheduledPublishTime | formatDate }}</view>
						<view class="music-time">{{ item.duration | formatDate('mm:ss') }}</view>
					</view>
				</view>
				<view v-if="tabIdx == 1" class="comment-group">
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
				<view v-if="tabIdx == 2" class="subscriber-group">
					<u-row>
						<u-col span="6" v-for="(item, index) in subscriberList" :key="index">
							<view class="subscriber-wrap">
								<view class="subscriber-img-left">
									<image class="img-subscriber" mode="aspectFill" :src="item.avatarUrl"></image>
								</view>
								<view class="subscriber-block">
									<view class="subscriber-title">
										{{ item.nickname }}
										<u-icon v-if="item.gender == 2" class="icon-gender" name="woman" color="#df3b77" size="14"></u-icon>
										<u-icon v-if="item.gender == 1" class="icon-gender" name="man" color="#3290c6" size="14"></u-icon>
									</view>
									<view class="subscriber-text">{{ item.description }}</view>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapActions
	} from 'vuex'
	import {
		fetchDjDetail,
		fetchCommentDj,
		fetchDjProgram,
		fetchDjSubscriber
	} from '@/api/music'
	
	export default {
		name: 'radio-list',
		props: {
			id: {
				type: String|Number,
				default: ''
			}
		},
		data() {
			return {
				tabIdx: 0,
				tabList: [
					{ title: '节目' },
					{ title: '评论', badge: { value: 0 } },
					{ title: '订阅者' }
				],
				
				radioData: {},
				
				radioCount: 0,
				musicList: [],
				
				radioDataDynamic: {},
				
				commentList: [],
				subscriberList: []
			}
		},
		watch: {
			id(val) {
				this.initData()
			}
		},
		methods: {
			...mapActions({
				addToList: 'music/addToList'
			}),
			handleTabChange(data) {
				this.tabIdx = data.index
			},
			handleMusics() {
				let musics = []
				this.musicList.forEach(item => {
					musics.push(item.mainSong)
				})
				this.addToList(musics)
			},
			handleMusic(data) {
				this.addToList(data)
			},
			getRadioDetail() {
				fetchDjDetail({
					rid: this.id
				}).then(res => {
					this.radioData = res.data
					this.musicList = res.data.songs || []
				})
			},
			getRadioProgramDetail() {
				fetchDjProgram({
					rid: this.id
				}).then(res => {
					this.radioCount = res.count || 0
					this.musicList = res.programs || []
				})
			},
			getRadioComment() {
				fetchCommentDj({
					id: this.id
				}).then(res => {
					this.commentList = res.comments || []
				})
			},
			getRadioSubscribers() {
				fetchDjSubscriber({
					id: this.id
				}).then(res => {
					this.subscriberList = res.subscribers
				})
			},
			initData() {
				this.getRadioDetail()
				this.getRadioProgramDetail()
				this.getRadioComment()
				this.getRadioSubscribers()
			}
		},
		mounted() {
			this.initData()
		}
	}
</script>

<style lang="scss" scoped>
	.radio-list-view {
		padding: 40rpx 60rpx 140rpx 60rpx;
		
		.radio-list-head {
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
					align-items: flex-start;
					
					.title-badge {
						position: relative;
						top: 10rpx;
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
						white-space: nowrap;
						border: 1px solid #cb3631;
						border-radius: 6rpx;
					}
					
					.title-text {
						font-size: 48rpx;
						font-weight: 500;
					}
				}
				
				.head-time {
					display: flex;
					align-items: center;
					margin-top: 40rpx;
					font-size: 28rpx;
					color: #666;
					
					.img-creator {
						margin-right: 20rpx;
						width: 60rpx;
						height: 60rpx;
						border-radius: 50%;
						overflow: hidden;
					}
					
					.text-creator {
						color: #567cab;
					}
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
						color: #3c9cff;
						border: 1px solid #3c9cff;
						background-color: #fff;
						
						&.btn-play {
							color: #fff;
							border-color: #3c9cff;
							background-color: #3c9cff;
						}
						
						&:first-child {
							margin-left: 0;
						}
					}
				}
				
				.head-info {
					margin-top: 40rpx;
				}
				
				.head-text {
					font-size: 24rpx;
					line-height: 44rpx;
					color: #999;
					
					&:first-child {
						margin-top: 0;
					}
					
					.text-tag {
						color: #567cab;
					}
				}
				
				.text-wrap {
					max-width: 1000rpx;
					height: 44rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
		
		.radio-list-body {
			margin-top: 60rpx;
			
			.body-list {
				.music-list {
					.music-item {
						display: flex;
						justify-content: flex-start;
						align-items: center;
						width: 100%;
						margin-bottom: 20rpx;
						
						.music-num {
							width: 120rpx;
							font-size: 24rpx;
							color: #aaa;
						}
						
						.music-img {
							width: 120rpx;
							height: 120rpx;
							
							.img-music {
								width: 120rpx;
								height: 120rpx;
								border-radius: 10rpx;
								overflow: hidden;
							}
						}
						
						.music-title {
							margin-left: 20rpx;
							flex: 1;
							font-size: 24rpx;
							color: #333;
						}
						
						.music-play {
							width: 200rpx;
							font-size: 24rpx;
							color: #999;
							
							::v-deep .u-icon {
								display: inline-block;
								zoom: 1;
								margin-right: 10rpx;
							}
						}
						
						.music-like {
							width: 200rpx;
							font-size: 24rpx;
							color: #999;
							
							::v-deep .u-icon {
								display: inline-block;
								zoom: 1;
								margin-right: 10rpx;
							}
						}
						
						.music-radio {
							width: 30%;
							font-size: 24rpx;
							color: #999;
						}
						
						.music-publish {
							width: 160rpx;
							font-size: 24rpx;
							color: #aaa;
						}
						
						.music-time {
							width: 160rpx;
							font-size: 24rpx;
							color: #aaa;
							text-align: right;
						}
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
				
				.subscriber-group {
					margin-top: 60rpx;
					
					::v-deep .u-row {
						flex-wrap: wrap;
						
						.u-col {
							margin-bottom: 40rpx;
						}
						
						.subscriber-wrap {
							display: flex;
							justify-content: flex-start;
							align-items: center;
							
							.subscriber-img-left {
								width: 200rpx;
								
								.img-subscriber {
									width: 180rpx;
									height: 180rpx;
									border-radius: 50%;
									overflow: hidden;
								}
							}
							
							.subscriber-block {
								.subscriber-title {
									font-size: 30rpx;
									
									.icon-gender {
										display: inline-block;
										zoom: 1;
										vertical-align: middle;
										margin-left: 10rpx;
									}
								}
								
								.subscriber-text {
									font-size: 24rpx;
									color: #999;
								}
							}
						}
					}
				}
			}
		}
	}
</style>