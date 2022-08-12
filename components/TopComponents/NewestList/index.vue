<template>
	<view class="newest-list-view">
		<u-subsection :list="tabList" keyName="title" mode="subsection" activeColor="#f56c6c" :current="tabCurrent" @change="handleTabChange"></u-subsection>
		<view class="newest-list-filter">
			<view class="filter-nav">
				<view class="nav-item" :class="{ active: index == 0 }" v-for="(item, index) in filterList" :key="index" @click="handleFilterChange(item.type)">
					<text class="nav-text">{{ item.title }}</text>
				</view>
			</view>
		</view>
		<view class="newest-list-body">
			<u-row v-if="tabCurrent == 0" class="music-list">
				<u-col span="12" v-for="(item, index) in musicList" :key="index" @click="handleMusic(item)">
					<view class="col-wrap">
						<view class="col-num">{{ index < 9 ? '0' + (index + 1) : index + 1 }}</view>
						<view class="col-img-left">
							<image v-if="item.album" class="img-col" mode="aspectFill" :src="item.album.picUrl"></image>
						</view>
						<view class="col-name">{{ item.name }}</view>
						<view v-if="item.artists" class="col-author">{{ item.artists[0].name }}</view>
						<view v-if="item.album" class="col-album">{{ item.album.name }}</view>
						<view class="col-time">{{ item.duration | formatDate('mm:ss') }}</view>
					</view>
				</u-col>
			</u-row>
			<view v-show="tabCurrent == 1" class="album-group" v-for="(item, index) in albumList" :key="index">
				<view class="group-head">
					<text class="head-title">{{ item.title }}</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="3" v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="handleAlbum(subItem)">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="aspectFill" :src="subItem.picUrl"></image>
								</view>
								<view class="col-block">
									<text class="col-title text-wrap">{{ subItem.name }}</text>
									<text v-if="subItem.artist" class="col-text text-wrap">{{ subItem.artist.name }}</text>
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
		fetchTopSong,
		fetchTopAlbum
	} from '@/api/music'
	
	export default {
		name: 'newest-list',
		data() {
			return {
				tabCurrent: 0,
				tabList: [
					{ title: '新歌速递' },
					{ title: '新碟上架' }
				],
				filterList: [
					{ title: '全部', type: 0 },
					{ title: '华语', type: 7 },
					{ title: '欧美', type: 96 },
					{ title: '韩国', type: 16 },
					{ title: '日本', type: 8 }
				],
				
				musicList: [],
				albumList: []
			}
		},
		methods: {
			handleAlbum(data) {
				this.$emit('album', data.id)
			},
			handleMusic(data) {
				this.$emit('music', data)
			},
			handleTabChange(index) {
				this.tabCurrent = index
				if (this.tabCurrent == 0) {
					this.musicList = []
					this.getMusicList()
				} else {
					this.albumList = []
					this.getAlbumList()
				}
			},
			handleFilterChange(data) {
				this.type = data
				this.musicList = []
				this.getMusicList()
			},
			getMusicList() {
				fetchTopSong({
					type: this.type,
					limit: 20
				}).then(res => {
					this.musicList = res.data.slice(0, 20)
				})
			},
			getAlbumList() {
				fetchTopAlbum({
					type: this.type
				}).then(res => {
					this.albumList = [{
						title: '本周新碟',
						children: res.weekData.slice(0, 40)
					}, {
						title: '本月新碟',
						children: res.monthData.slice(0, 40)
					}]
				})
			}
		},
		mounted() {
			this.getMusicList()
		}
	}
</script>

<style lang="scss" scoped>
	.newest-list-view {
		padding: 40rpx 60rpx 140rpx 60rpx;
		
		::v-deep .u-subsection {
			width: 460rpx;
			margin: 0 auto;
		}
		
		.newest-list-filter {
			margin-top: 60rpx;
			
			.filter-nav {
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				
				.nav-item {
					margin: 0 20rpx;
					padding: 0 20rpx;
					border-radius: 40rpx;
						
					.nav-text {
						font-size: 24rpx;
						line-height: 40rpx;
						color: #999;
					}
					
					&:first-child {
						margin-left: 0;
						padding-left: 0;
					}
					
					&.active {
						.nav-text {
							font-weight: bold;
							color: #444;
						}
					}
				}
			}
		}
		
		.newest-list-body {
			margin-top: 20rpx;
			
			::v-deep .u-row {
				&.music-list {
					width: 100%;
					flex-wrap: wrap;
					margin-right: -36rpx;
					
					.u-col {
						margin-bottom: 20rpx;
						
						&:nth-child(even) {
							background-color: #fafafa;
						}
					}
					
					.col-wrap {
						padding: 20rpx 0;
						display: flex;
						justify-content: flex-start;
						align-items: center;
						
						.col-num {
							width: 60rpx;
							font-size: 24rpx;
							color: #aaa;
							text-align: center;
						}
						
						.col-img-left {
							.img-col {
								width: 120rpx;
								height: 120rpx;
								border-radius: 6rpx;
								overflow: hidden;
							}
						}
						
						.col-name {
							padding: 0 20rpx;
							flex: 1;
							font-size: 24rpx;
						}
						
						.col-author {
							padding: 0 20rpx;
							width: 200rpx;
							font-size: 24rpx;
							color: #aaa;
							text-align: center;
						}
						
						.col-album {
							padding: 0 20rpx;
							width: 400rpx;
							font-size: 24rpx;
							color: #aaa;
							text-align: center;
						}
						
						.col-time {
							padding: 0 20rpx;
							width: 200rpx;
							font-size: 24rpx;
							color: #aaa;
							text-align: center;
						}
					}
				}
			}
			
			.album-group {
				margin-top: 40rpx;
				
				.group-head {
					.head-title {
						height: 96rpx;
						line-height: 96rpx;
						font-size: 32rpx;
						color: $uni-text-color;
						background-color: transparent;
					}
				}
				
				.group-body {
					::v-deep .u-row {
						width: 100%;
						flex-wrap: wrap;
						margin-right: -36rpx;
						
						.u-col {
							margin-bottom: 40rpx;
						}
						
						.col-wrap {
							padding-right: 36rpx;
							
							.col-img-top {
								.img-col {
									width: 270rpx;
									height: 270rpx;
									border-radius: 10rpx;
									overflow: hidden;
								}
							}
							
							.col-block {
								flex: 1;
							
								.col-title {
									display: block;
									font-size: 28rpx;
									line-height: 36rpx;
									
									&.text-wrap {
										height: 36rpx;
										overflow: hidden;
										text-overflow: ellipsis;
										white-space: nowrap;
									}
								}
								
								.col-text {
									display: block;
									font-size: 26rpx;
									line-height: 36rpx;
									color: $uni-text-color;
									
									&.text-wrap {
										height: 36rpx;
										overflow: hidden;
										text-overflow: ellipsis;
										white-space: nowrap;
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