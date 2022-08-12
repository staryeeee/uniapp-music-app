<template>
	<view class="song-list-view">
		<view class="song-list-top">
			<view class="top-wrap" v-for="(item, index) in bannerList" :key="index">
				<view class="top-img-top">
					<image class="img-top" mode="aspectFill" :src="item.coverImgUrl"></image>
				</view>
				<view class="top-block">
					<text class="top-badge">精品歌单</text>
					<text class="top-title text-wrap">{{ item.name }}</text>
					<text class="top-text">{{ item.description }}</text>
				</view>
			</view>
		</view>
		<div class="song-list-head">
			<div class="head-left">
				<view class="head-filter" @click="handleNavChange('全部')">全部歌单</view>
			</div>
			<div class="head-right">
				<view class="head-nav">
					<view class="nav-item" :class="{ active: item.active }" v-for="(item, index) in navList" :key="index" @click="handleNavChange(item.title)">
						<text class="nav-text">{{ item.title }}</text>
					</view>
				</view>
			</div>
		</div>
		<view class="song-list-body">
			<u-row>
				<u-col span="3" v-for="(item, index) in musicList" :key="index" @click="handleAlbum(item)">
					<view class="col-wrap">
						<view class="col-img-top">
							<image class="img-col" mode="aspectFill" :src="item.coverImgUrl"></image>
						</view>
						<view class="col-block">
							<text class="col-text text-ellipsis">{{ item.name }}</text>
						</view>
					</view>
				</u-col>
			</u-row>
		</view>
		<view v-show="musicList.length > 0 && total > pageSize" class="song-list-pagination">
			<uni-pagination title="" type="line" :total="this.total" :pageSize="this.pageSize" @change="handlePageChange"></uni-pagination>
		</view>
	</view>
</template>

<script>
	import {
		fetchTopPlaylistHighquality,
		fetchPlaylistCatlist,
		fetchTopPlaylist
	} from '@/api/music'
	
	export default {
		name: 'song-list',
		data() {
			return {
				bannerList: [],
				
				navList: [
					{ active: false, title: '华语' },
					{ active: false, title: '流行' },
					{ active: false, title: '摇滚' },
					{ active: false, title: '民谣' },
					{ active: false, title: '电子' },
					{ active: false, title: '另类/独立' },
					{ active: false, title: '轻音乐' },
					{ active: false, title: '综艺' },
					{ active: false, title: '影视原声' },
					{ active: false, title: 'ACG' }
				],
				
				cat: '全部',
				
				listLoading: false,
				isMore: false,
				pageSize: 20,
				offset: 0,
				total: 0,
				musicList: []
			}
		},
		methods: {
			handleAlbum(data) {
				this.$emit('album', data.id)
			},
			handleNavChange(data) {
				this.navList = this.navList.map((item, index) => {
					item.active = false
					if (item.title == data) {
						item.active = true
					}
					return item
				})
				this.cat = data
				this.getBanner()
				this.musicList = []
				this.getMusicList()
			},
			getMusicCateList() {
				fetchPlaylistCatlist().then(res => {
					
				})
			},
			getMusicList() {
				if (this.listLoading) return
				this.listLoading = true
				fetchTopPlaylist({
					cat: this.cat,
					offset: this.offset,
					limit: this.pageSize
				}).then(res => {
					this.isMore = res.more
					this.musicList = res.playlists
					this.total = res.total
				}).finally(() => {
					this.listLoading = false
				})
			},
			handlePageChange(data) {
				this.offset = (data.current - 1) * this.pageSize
				this.musicList = []
				this.getMusicList()
			},
			getBanner() {
				fetchTopPlaylistHighquality({
					cat: this.cat,
					limit: 1
				}).then(res => {
					this.bannerList = res.playlists
				})
			}
		},
		mounted() {
			this.getBanner()
			this.getMusicCateList()
			this.getMusicList()
		}
	}
</script>

<style lang="scss" scoped>
	.song-list-view {
		padding: 40rpx 60rpx 160rpx 60rpx;
		
		.song-list-top {
			padding: 30rpx;
			background-color: #5e7273;
			border-radius: 10rpx;
				
			.top-wrap {
				display: flex;
				justify-content: flex-start;
				flex-direction: row;
				
				.top-img-top {
					width: 280rpx;
					
					.img-top {
						width: 280rpx;
						height: 280rpx;
						border-radius: 10rpx;
						overflow: hidden;
					}
				}
				
				.top-block {
					margin-left: 20rpx;
					padding-top: 20rpx;;
					
					.top-badge {
						display: inline-block;
						zoom: 1;
						vertical-align: middle;
						width: 200rpx;
						height: 60rpx;
						font-size: 30rpx;
						line-height: 60rpx;
						color: #c68e4e;
						text-align: center;
						border: 1px solid #c68e4e;
						border-radius: 60rpx;
					}
					
					.top-title {
						margin-top: 32rpx;
						display: block;
						font-size: 32rpx;
						color: #fff;
						
						&.text-wrap {
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
					
					.top-text {
						margin-top: 20rpx;
						font-size: 26rpx;
						line-height: 36rpx;
						height: 72rpx;
						color: #ccc;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						lines: 2;
					}
				}
			}
		}
		
		.song-list-head {
			padding: 30rpx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
				
			.head-left {
				.head-filter {
					display: inline-block;
					zoom: 1;
					vertical-align: middle;
					width: 200rpx;
					height: 60rpx;
					line-height: 60rpx;
					font-size: 26rpx;
					text-align: center;
					border: 1px solid #d9d9d9;
					border-radius: 60rpx;
				}
			}
			
			.head-right {
				.head-nav {
					display: flex;
					justify-content: flex-end;
						
					.nav-item {
						padding: 0 30rpx;
						
						.nav-text {
							font-size: 24rpx;
							color: #777;
						}
						
						&.active {
							.nav-text {
								color: #cb3631;
							}
						}
					}
				}
			}
		}
		
		.song-list-body {
			::v-deep .u-row {
				flex-wrap: wrap;
				margin-right: -36rpx;
				
				.u-col {
					margin-bottom: 80rpx;
				}
				
				.col-wrap {
					padding-right: 36rpx;
					
					.col-img-top {
						.img-col {
							width: 100%;
							height: 340rpx;
							border-radius: 10rpx;
						}
					}
					
					.col-block {
						flex: 1;
						margin-top: 8rpx;
					
						.col-text {
							display: block;
							font-size: 26rpx;
							line-height: 36rpx;
							color: $uni-text-color;
							
							&.text-wrap {
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
</style>