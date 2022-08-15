<template>
	<view class="radio-list-view">
		<u-swiper :list="bannerList" keyName="pic" :displayMultipleItems="1" indicator indicatorMode="dot" previousMargin="60" nextMargin="60" :height="200" circular :autoplay="false" radius="5" bgColor="#ffffff"></u-swiper>
		
		<view class="radio-list-tabs">
			<u-tabs :list="tabList" keyName="categoryName" :lineHeight="0"></u-tabs>
		</view>
		<view class="radio-list-body">
			<view v-if="fufeijingpinList.length > 0" class="radio-group group-jingpin">
				<view class="group-head">
					<text class="head-title">付费精品</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="6" v-for="(item, index) in fufeijingpinList" :key="index" @click="handleRadio(item)">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="aspectFill" :src="item.picUrl"></image>
								</view>
								<view class="col-block">
									<text class="col-title text-wrap">{{ item.name }}</text>
									<text class="col-text text-wrap">{{ item.rcmdText }}</text>
									<text class="col-text text-wrap">{{ item.lastProgramName }}</text>
									<text class="col-price text-wrap">¥ {{ item.originalPrice/100 }}</text>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view v-if="tuijianList.length > 0" class="radio-group group-tuijian">
				<view class="group-head">
					<text class="head-title">电台个性推荐</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="2" v-for="(item, index) in tuijianList" :key="index" @click="handleRadio(item)">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="aspectFill" :src="item.picUrl"></image>
								</view>
								<view class="col-block">
									<text class="col-title text-wrap">{{ item.name }}</text>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view v-if="youshengshuList.length > 0" class="radio-group group-youshengshu">
				<view class="group-head">
					<text class="head-title">有声书</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="2" v-for="(item, index) in youshengshuList" :key="index" @click="handleRadio(item)">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="aspectFill" :src="item.picUrl"></image>
								</view>
								<view class="col-block">
									<text class="col-text text-ellipsis">{{ item.name }}</text>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view v-if="chuangzuofanchangList.length > 0" class="radio-group group-chuangzuo">
				<view class="group-head">
					<text class="head-title">创作翻唱</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="2" v-for="(item, index) in chuangzuofanchangList" :key="index" @click="handleRadio(item)">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="aspectFill" :src="item.picUrl"></image>
								</view>
								<view class="col-block">
									<text class="col-text text-ellipsis">{{ item.name }}</text>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view v-if="yinyuetuijianList.length > 0" class="radio-group group-yinyue">
				<view class="group-head">
					<text class="head-title">音乐推荐</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="2" v-for="(item, index) in yinyuetuijianList" :key="index" @click="handleRadio(item)">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="aspectFill" :src="item.picUrl"></image>
								</view>
								<view class="col-block">
									<text class="col-text text-ellipsis">{{ item.name }}</text>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view v-if="qingganList.length > 0" class="radio-group group-qinggan">
				<view class="group-head">
					<text class="head-title">情感</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="2" v-for="(item, index) in qingganList" :key="index" @click="handleRadio(item)">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="aspectFill" :src="item.picUrl"></image>
								</view>
								<view class="col-block">
									<text class="col-text text-ellipsis">{{ item.name }}</text>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view v-if="tuokouxiuList.length > 0" class="radio-group group-tuokouxiu">
				<view class="group-head">
					<text class="head-title">脱口秀</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="2" v-for="(item, index) in tuokouxiuList" :key="index" @click="handleRadio(item)">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="aspectFill" :src="item.picUrl"></image>
								</view>
								<view class="col-block">
									<text class="col-text text-ellipsis">{{ item.name }}</text>
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
		fetchDjBanner,
		fetchDjCategoryRecommend,
		fetchDjPaygift,
		fetchDjPersonalizeRecommend,
		fetchDjRadioHot,
		fetchDjHot,
	} from '@/api/music'
	
	export default {
		data() {
			return {
				name: 'radio-list',
				bannerList: [],
				tabList: [
					{ name: '排行榜' },
					{ name: '情感' },
					{ name: '音乐推荐' },
					{ name: '有声书' },
					{ name: '脱口秀' },
					{ name: '创作翻唱' },
					{ name: '电音' },
					{ name: '知识' },
					{ name: '二次元' },
					{ name: '明星专区' },
					{ name: '生活' },
					{ name: '亲子' },
					{ name: '新闻资讯' },
					{ name: '广播剧' },
					{ name: '故事' },
					{ name: '人文历史' },
					{ name: '娱乐' },
					{ name: '相声曲艺' },
					{ name: '其他' },
					{ name: '文学出版' },
					{ name: '我要做主播' }
				],
				
				fufeijingpinList: [],
				tuijianList: [],
				youshengshuList: [],
				chuangzuofanchangList: [],
				yinyuetuijianList: [],
				qingganList: [],
				tuokouxiuList: []
			}
		},
		methods: {
			handleRadio(data) {
				uni.navigateTo({
					url: '/pages/radio/index?id=' + data.id
				})
			},
			getTuokouxiu() {
				fetchDjRadioHot({
					cateId: 8,
					limit: 5
				}).then(res => {
					this.tuokouxiuList = res.djRadios.slice(0, 5)
				})
			},
			getQinggan() {
				fetchDjRadioHot({
					cateId: 3,
					limit: 5
				}).then(res => {
					this.qingganList = res.djRadios.slice(0, 5)
				})
			},
			getYinyuetuijian() {
				fetchDjRadioHot({
					cateId: 2,
					limit: 5
				}).then(res => {
					this.yinyuetuijianList = res.djRadios.slice(0, 5)
				})
			},
			getChuangzuofanchang() {
				fetchDjRadioHot({
					cateId: 2001,
					limit: 5
				}).then(res => {
					this.chuangzuofanchangList = res.djRadios.slice(0, 5)
				})
			},
			getYoushengshu() {
				fetchDjRadioHot({
					cateId: 10001,
					limit: 5,
				}).then(res => {
					this.youshengshuList = res.djRadios.slice(0, 5)
				})
			},
			getTuijian() {
				fetchDjPersonalizeRecommend({
					limit: 5,
				}).then(res => {
					this.tuijianList = res.data || []
				})
			},
			getFufeiJingpin() {
				fetchDjPaygift({
					limit: 4
				}).then(res => {
					this.fufeijingpinList = res.data.list || []
				})
			},
			getCateList() {
				fetchDjCategoryRecommend().then(res => {
					this.tabList = res.data
				})
			},
			getBanner() {
				fetchDjBanner().then(res => {
					this.bannerList = res.data || []
				})
			}
		},
		mounted() {
			this.getBanner()
			this.getCateList()
			this.getFufeiJingpin()
			this.getTuijian()
			this.getYoushengshu()
			this.getChuangzuofanchang()
			this.getYinyuetuijian()
			this.getQinggan()
			this.getTuokouxiu()
		}
	}
</script>

<style lang="scss" scoped>
	.radio-list-view {
		padding: 40rpx 60rpx 140rpx 60rpx;
		
		::v-deep .u-swiper {
		}
		
		.radio-list-tabs {
			margin-top: 32rpx;
		}
		
		.radio-list-body {
			.radio-group {
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
								width: calc(100%/10 * 2);
							}
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
								margin-top: 8rpx;
							
								.col-title {
									display: block;
									font-size: 28rpx;
								}
								
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
				
				&.group-jingpin {
					.group-body {
						::v-deep .u-row {
							margin-bottom: 0;
							
							.col-wrap {
								padding: 22rpx 0;
								display: flex;
								justify-content: flex-start;
								flex-direction: row;
								
								.col-img-top {
									width: 270rpx;
									
									.img-col {
										width: 270rpx;
										height: 270rpx;
									}
								}
								
								.col-block {
									margin-left: 40rpx;
									
									.col-title {
										font-size: 28rpx;
										max-width: 260px;
										margin-bottom: 30rpx;
									}
									
									.col-text {
										margin-top: 10rpx;
										max-width: 260px;
										font-size: 26rpx;
										color: $uni-text-color-grey;
									}
									
									.col-price {
										display: block;
										margin-top: 30rpx;
										color: #dd4444;
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