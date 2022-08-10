<template>
	<view class="home-view">
		<u-swiper :list="swiperList" keyName="imgUrl" :displayMultipleItems="1" indicator indicatorMode="dot" previousMargin="60" nextMargin="60" :height="200" circular :autoplay="false" radius="5" bgColor="#ffffff"></u-swiper>
		<view v-if="musicList.length > 0" class="home-group">
			<view class="group-head">
				<text class="head-title">推荐歌单</text>
			</view>
			<view class="group-body">
				<u-row>
					<u-col span="2" v-for="(item, index) in musicList" :key="index">
						<view class="col-wrap">
							<view class="col-img-top">
								<image class="img-col" mode="widthFix" :src="item.picUrl"></image>
							</view>
							<view class="col-block">
								<text class="col-text text-ellipsis">{{ item.name }}</text>
							</view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		<view v-if="dujiaList.length > 0" class="home-group group-dujia">
			<view class="group-head">
				<text class="head-title">独家放送</text>
			</view>
			<view class="group-body">
				<u-row>
					<u-col span="3" v-for="(item, index) in dujiaList" :key="index">
						<view class="col-wrap">
							<view class="col-img-top">
								<image class="img-col" mode="widthFix" :src="item.picUrl"></image>
							</view>
							<view class="col-block">
								<text class="col-text text-ellipsis">{{ item.name }}</text>
							</view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		<view v-if="zuixinList.length > 0" class="home-group group-zuixin">
			<view class="group-head">
				<text class="head-title">最新音乐</text>
			</view>
			<view class="group-body">
				<u-row>
					<u-col span="6" v-for="(item, index) in zuixinList" :key="index">
						<view class="col-wrap">
							<view class="col-img-top">
								<image class="img-col" mode="aspectFill" :src="item.picUrl"></image>
							</view>
							<view class="col-idx">
								<text class="idx-text">{{  index >= 9 ? index + 1 : '0' + (index + 1) }}</text>
							</view>
							<view class="col-block">
								<text class="col-title text-wrap">{{ item.name }}</text>
								<text v-if="item.song && item.song.album" class="col-text text-wrap">{{ item.song.album.name }}</text>
							</view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		<view v-if="mvList.length > 0" class="home-group group-tuijian">
			<view class="group-head">
				<text class="head-title">推荐 MV</text>
			</view>
			<view class="group-body">
				<u-row>
					<u-col span="3" v-for="(item, index) in mvList" :key="index">
						<view class="col-wrap">
							<view class="col-img-top">
								<image class="img-col" mode="aspectFill" :src="item.picUrl"></image>
							</view>
							<view class="col-block">
								<text class="col-title text-wrap">{{ item.name }}</text>
								<text class="col-text text-wrap">{{ item.artistName }}</text>
							</view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		<view v-if="diantaiList.length > 0" class="home-group group-diantai">
			<view class="group-head">
				<text class="head-title">主播电台</text>
			</view>
			<view class="group-body">
				<u-row>
					<u-col span="6" v-for="(item, index) in diantaiList" :key="index">
						<view class="col-wrap">
							<view class="col-img-top">
								<image class="img-col" mode="widthFix" :src="item.picUrl"></image>
							</view>
							<view class="col-block">
								<text class="col-title text-wrap">{{ item.name }}</text>
								<text v-if="item.program" class="col-text text-wrap">{{ item.program.description }}</text>
							</view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		fetchHomepageBlockPage,
		fetchHomepageDragonBall,
		fetchBanner,
		fetchPersonalized,
		fetchPersonalizedPrivatecontentList,
		fetchPersonalizedMV,
		fetchPersonalizedNewsong,
		fetchPersonalizedDjprogram,
		fetchProgramRecommend
	} from '@/api/music'
	
	export default {
		name: 'home',
		data() {
			return {
				swiperList: [],
				
				musicList: [],
				dujiaList: [],
				zuixinList: [],
				mvList: [],
				diantaiList: []
			}
		},
		created() {
			this.getHomepageBlockPage()
			this.getBanner()
			this.getMusicList()
			this.getDujiaList()
			this.getZuixinList()
			this.getMVList()
			this.getDiantaiList()
		},
		methods: {
			getHomepageBlockPage() {
				fetchHomepageDragonBall().then(res => {
					console.log(res)
				})
			},
			getBanner() {
				fetchBanner({
					type: 0
				}).then(res => {
					this.swiperList = res.banners.map(item => {
						return {
							title: item.typeTitle,
							imgUrl: item.imageUrl
						}
					})
				})
			},
			getMusicList() {
				fetchPersonalized({
					limit: 10
				}).then(res => {
					this.musicList = res.result
				})
			},
			getDujiaList() {
				fetchPersonalizedPrivatecontentList({
					limit: 4
				}).then(res => {
					this.dujiaList = res.result
				})
			},
			getZuixinList() {
				fetchPersonalizedNewsong({
					limit: 10
				}).then(res => {
					this.zuixinList = res.result
				})
			},
			getMVList() {
				fetchPersonalizedMV({
					limit: 4
				}).then(res => {
					this.mvList = res.result
				})
			},
			getDiantaiList() {
				fetchPersonalizedDjprogram({
					limit: 6
				}).then(res => {
					this.diantaiList = res.result
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.home-view {
		padding: 40rpx 60rpx 160rpx 60rpx;
		
		::v-deep .u-swiper {
		}
		
		.home-group {
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
					flex-wrap: wrap;
					margin-right: -36rpx;
					
					.u-col {
						margin-bottom: 80rpx;
						
						&.u-col-2 {
							flex: 0 0 20% !important;
							width: calc(100%/10 * 2);
						}
					}
					
					.col-wrap {
						padding-right: 36rpx;
						
						.col-img-top {
							.img-col {
								width: 100%;
								border-radius: 10rpx;
							}
						}
						
						.col-block {
							flex: 1;
							margin-top: 8rpx;
						
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
								
								&.text-ellipsis {
									height: 72rpx;
									overflow: hidden;
									text-overflow: ellipsis;
									display: -webkit-box;
									-webkit-box-orient: vertical;
									-webkit-line-clamp: 2;
									lines: 2;
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
								
								&.text-ellipsis {
									height: 72rpx;
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
				}
			}
			
			&.group-zuixin {
				.group-body {
					::v-deep .u-row {
						margin-bottom: 0;
						
						.u-col {
							margin-bottom: 0;
						}
						
						.col-wrap {
							padding: 18rpx 0;
							display: flex;
							justify-content: flex-start;
							flex-direction: row;
							align-items: center;
							
							.col-img-top {
								width: 120rpx;
								
								.img-col {
									width: 120rpx;
									height: 120rpx;
								}
							}
							
							.col-idx {
								width: 70rpx;
								display: flex;
								justify-content: center;
								align-items: center;
								
								.idx-text {
									font-size: 26rpx;
									color: $uni-text-color-grey;
								}
							}
							
							.col-block {
								.col-title {
									font-size: 28rpx;
								}
								
								.col-text {
									margin-top: 0;
									font-size: 26rpx;
									color: $uni-text-color-grey;
								}
							}
						}
					}
				}
			}
			
			&.group-tuijian {
				.group-body {
					::v-deep .u-row {
						.col-wrap {
							.col-img-top {
								.img-col {
									height: 200rpx;
								}
							}
						}
					}
				}
			}
			
			&.group-diantai {
				.group-body {
					::v-deep .u-row {
						margin-bottom: 0;
						
						.u-col {
							margin-bottom: 0;
						}
						
						.col-wrap {
							padding: 22rpx 0;
							display: flex;
							justify-content: flex-start;
							flex-direction: row;
							align-items: center;
							
							.col-img-top {
								width: 180rpx;
								
								.img-col {
									width: 180rpx;
									height: 180rpx;
								}
							}
							
							.col-block {
								margin-left: 40rpx;
								
								.col-title {
									font-size: 28rpx;
									max-width: 260px;
								}
								
								.col-text {
									margin-top: 0;
									max-width: 260px;
									font-size: 26rpx;
									color: $uni-text-color-grey;
								}
							}
						}
					}
				}
			}
		}
	}
</style>