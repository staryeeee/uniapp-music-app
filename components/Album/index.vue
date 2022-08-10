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
					<u-button class="btn-action" type="primary" shape="circle" icon="map" text="播放全部"></u-button>
					<u-button class="btn-action" type="default" plain shape="circle" icon="plus" :text="'收藏(' + (playlist.subscribedCount || 0) + ')'"></u-button>
					<u-button class="btn-action" type="default" plain shape="circle" icon="share" :text="'分享(' + (playlist.shareCount || 0) + ')'"></u-button>
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
				<u-tabs :list="tabList" keyName="title"></u-tabs>
			</view>
			<view class="body-list">
				<view class="music-list">
					<view class="music-item">
						<view class="music-num"></view>
						<view class="music-title" style="color:#999;">音乐标题</view>
						<view class="music-author">歌手</view>
						<view class="music-album">专辑</view>
						<view class="music-time">时长</view>
					</view>
					<view class="music-item" v-for="(item, index) in musicList" :key="index" @click="handleMusic(item)">
						<view class="music-num">{{ index < 9 ? '0' + (index + 1) : index + 1 }}</view>
						<view class="music-title">{{ item.name }}</view>
						<view class="music-author">{{ item.ar && item.ar[0] ? item.ar[0].name : '' }}</view>
						<view class="music-album">{{ item.al ? item.al.name : '' }}</view>
						<view class="music-time">{{ item.dt | formatDate('mm:ss') }}</view>
					</view>
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
		fetchPlaylistDetail
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
				tabList: [
					{ title: '歌曲列表' },
					{ title: '评论', badge: { value: 5 } },
					{ title: '收藏者' }
				],
				
				playlist: {},
				musicList: []
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
			handleMusic(data) {
				this.addToList(data)
			},
			getAlbumDetail() {
				fetchPlaylistDetail({
					id: this.id
				}).then(res => {
					this.playlist = res.playlist
					this.musicList = res.playlist.tracks
				})
			},
			initData() {
				this.getAlbumDetail()
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
			}
		}
	}
</style>