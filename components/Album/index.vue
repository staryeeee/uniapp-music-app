<template>
	<view class="album-list-view">
		<view class="album-list-head">
			<view class="head-img-left">
				<image class="img-head" mode="aspectFill" :src="playlist.coverImgUrl"></image>
			</view>
			<view class="head-block">
				<view class="head-title">
					<text class="title-badge">歌单</text>
					<text class="title-text">{{ playlist.name }}</text>
				</view>
				<view class="head-time">
					<image v-if="playlist.creator" class="img-creator" mode="aspectFill" :src="playlist.creator.avatarUrl"></image>
					<text class="text-creator">{{ playlist.creator ? playlist.creator.nickname : '' }} {{ playlist.createTime | formatDate }}</text>
					创建
				</view>
				<view class="head-action">
					<u-button class="btn-action" type="primary" shape="circle" icon="map" text="播放全部" @click="handleMusics(musicList)"></u-button>
					<u-button class="btn-action" type="default" plain shape="circle" icon="plus" :text="'收藏(' + (playlistDynamic.bookedCount || 0) + ')'"></u-button>
					<u-button class="btn-action" type="default" plain shape="circle" icon="share" :text="'分享(' + (playlistDynamic.shareCount || 0) + ')'"></u-button>
					<u-button class="btn-action" type="default" plain shape="circle" icon="download" text="下载全部"></u-button>
				</view>
				<view class="head-info">
					<view class="head-text">
						标签：<text class="text-tag" v-for="(item, index) in playlist.tags" :key="index"><text v-if="index != 0"> / </text>{{ item }}</text>
					</view>
					<view class="head-text">
						歌曲数：{{ playlist.trackCount }} 播放数：{{ playlist.playCount }}
					</view>
					<view class="head-text text-wrap">
						简介：<text class="text-desc">{{ playlist.description }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="album-list-body">
			<view class="body-tabs">
				<u-tabs :list="tabList" keyName="title" @change="handleTabChange"></u-tabs>
			</view>
			<view class="body-list">
				<view v-if="tabIdx == 0" class="music-list">
					<view class="music-item">
						<view class="music-num"></view>
						<view class="music-title" style="color:#999;">音乐标题</view>
						<view class="music-author">歌手</view>
						<view class="music-album">专辑</view>
						<view class="music-time">时长</view>
					</view>
					<view class="music-item" v-for="(item, index) in musicList" :key="index" @click="handleMusics([item])">
						<view class="music-num">{{ index < 9 ? '0' + (index + 1) : index + 1 }}</view>
						<view class="music-title">{{ item.name }}</view>
						<view class="music-author">{{ item.artists && item.artists[0] ? item.ar[0].name : '' }}</view>
						<view class="music-album">{{ item.album ? item.album.name : '' }}</view>
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
		fetchPlaylistDetail,
		fetchCommentPlaylist,
		fetchPlaylistDetailDynamic,
		fetchPlaylistSubscribers
	} from '@/api/music'
	
	export default {
		name: 'album-list',
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
					{ title: '歌曲列表' },
					{ title: '评论', badge: { value: 0 } },
					{ title: '收藏者' }
				],
				
				playlist: {},
				musicList: [],
				
				playlistDynamic: {},
				
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
			handleMusics(data) {
				this.addToList(data)
			},
			getAlbumDetail() {
				fetchPlaylistDetail({
					id: this.id
				}).then(res => {
					this.playlist = res.playlist
					this.musicList = res.playlist.tracks.map(item => {
						item.album = item.al
						item.artists = item.ar
						item.duration = item.dt
						return item
					})
				})
			},
			getAlbumDetailDynamic() {
				fetchPlaylistDetailDynamic({
					id: this.id
				}).then(res => {
					this.playlistDynamic = res
					this.$set(this.tabList)
					this.tabList = this.tabList.map(item => {
						if (item.title == '评论') {
							item.badge = {
								value: res.commentCount > 100 ? '99+' : res.commentCount
							}
						}
						return item
					})
				})
			},
			getCommentPlaylist() {
				fetchCommentPlaylist({
					id: this.id
				}).then(res => {
					this.commentList = res.comments
				})
			},
			getPlaylistSubscribers() {
				fetchPlaylistSubscribers({
					id: this.id
				}).then(res => {
					this.subscriberList = res.subscribers
				})
			},
			initData() {
				this.getAlbumDetail()
				this.getAlbumDetailDynamic()
				this.getCommentPlaylist()
				this.getPlaylistSubscribers()
			}
		},
		mounted() {
			this.initData()
		}
	}
</script>

<style lang="scss" scoped>
	.album-list-view {
		padding: 40rpx 60rpx 140rpx 60rpx;
		
		.album-list-head {
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
		
		.album-list-body {
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