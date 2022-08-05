<template>
	<view class="home-view">
		<u-swiper :list="swiperList" keyName="imgUrl" :displayMultipleItems="1" indicator indicatorMode="dot" previousMargin="60" nextMargin="60" :height="200" circular :autoplay="false" radius="5" bgColor="#ffffff"></u-swiper>
		<view class="home-group">
			<view class="group-head">
				<text class="head-title">推荐歌单</text>
			</view>
			<view class="group-body">
				<u-row>
					<u-col span="2" v-for="(item, index) in 12" :key="index">
						<view class="col-wrap">
							<view class="col-img-top">
								<image class="img-col" mode="widthFix" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
							</view>
							<view class="col-block">
								<text class="col-text text-ellipsis">{{ index == 0 ? '每日歌曲推荐' : '[华语私人订制]最懂你的话语推荐 每日更新歌单 每日更新歌单'}}</text>
							</view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		<view class="home-group group-dujia">
			<view class="group-head">
				<text class="head-title">独家放送</text>
			</view>
			<view class="group-body">
				<u-row>
					<u-col span="3" v-for="(item, index) in 4" :key="index">
						<view class="col-wrap">
							<view class="col-img-top">
								<image class="img-col" mode="widthFix" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
							</view>
							<view class="col-block">
								<text class="col-text text-ellipsis">《超级面对面》第10期 keshi：我的音乐永远新鲜</text>
							</view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		<view class="home-group group-zuixin">
			<view class="group-head">
				<text class="head-title">最新音乐</text>
			</view>
			<view class="group-body">
				<u-row>
					<u-col span="6" v-for="(item, index) in 10" :key="index">
						<view class="col-wrap">
							<view class="col-img-top">
								<image class="img-col" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
							</view>
							<view class="col-idx">
								<text class="idx-text">{{  index >= 9 ? index + 1 : '0' + (index + 1) }}</text>
							</view>
							<view class="col-block">
								<text class="col-title text-wrap">浪迹天涯</text>
								<text class="col-text text-wrap">旅行乐队</text>
							</view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		<view class="home-group group-tuijian">
			<view class="group-head">
				<text class="head-title">推荐 MV</text>
			</view>
			<view class="group-body">
				<u-row>
					<u-col span="3" v-for="(item, index) in 4" :key="index">
						<view class="col-wrap">
							<view class="col-img-top">
								<image class="img-col" mode="widthFix" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
							</view>
							<view class="col-block">
								<text class="col-title text-wrap">Munafik</text>
								<text class="col-text text-wrap">Shen</text>
							</view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		<view class="home-group group-diantai">
			<view class="group-head">
				<text class="head-title">主播电台</text>
			</view>
			<view class="group-body">
				<u-row>
					<u-col span="6" v-for="(item, index) in 4" :key="index">
						<view class="col-wrap">
							<view class="col-img-top">
								<image class="img-col" mode="widthFix" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
							</view>
							<view class="col-block">
								<text class="col-title text-wrap">【独家】墨菲定律音乐博客</text>
								<text class="col-text text-wrap">墨菲定律的音乐后花园(MoreFeel Music Round)</text>
							</view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		<view class="home-group group-look">
			<view class="group-head">
				<text class="head-title">LOOK 直播</text>
			</view>
			<view class="group-body">
				<u-row>
					<u-col span="3" v-for="(item, index) in 4" :key="index">
						<view class="col-wrap">
							<view class="col-img-top">
								<image class="img-col" mode="widthFix" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
							</view>
							<view class="col-block">
								<text class="col-text text-wrap">传说是灵魂割手传说是灵魂割手</text>
							</view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'home',
				swiperList: [{
					title: '内容 A',
					imgUrl: 'http://p1.music.126.net/Srx6b0FP8S0kiOw1Zds3yQ==/109951167726062825.jpg?imageView&quality=89'
				}, {
					title: '内容 B',
					imgUrl: 'http://p1.music.126.net/z4ojoJkXKAlPsBCGe1GN-g==/109951167726073664.jpg?imageView&quality=89'
				}, {
					title: '内容 C',
					imgUrl: 'http://p1.music.126.net/-Q7-4JJnpx9h7lXAzEwLZQ==/109951167726072905.jpg?imageView&quality=89'
				}, {
					title: '内容 D',
					imgUrl: 'http://p1.music.126.net/_jfDcxP0F9eUdQklBK1ReQ==/109951167726083229.jpg?imageView&quality=89'
				}, {
					title: '内容 E',
					imgUrl: 'http://p1.music.126.net/ZKSlILlJmZlPAdtjQ4_kww==/109951167726095678.jpg?imageView&quality=89'
				}, {
					title: '内容 F',
					imgUrl: 'http://p1.music.126.net/s954zUZ6_LqGuG-pCoVI6Q==/109951167726093887.jpg?imageView&quality=89'
				}, {
					title: '内容 G',
					imgUrl: 'http://p1.music.126.net/-Ik_9Kc98emdeogKpncFpw==/109951167726099143.jpg?imageView&quality=89'
				}, {
					title: '内容 G',
					imgUrl: 'http://p1.music.126.net/POKYbyNIlU31OSkECHrI0w==/109951167726104173.jpg?imageView&quality=89'
				}],
			}
		},
		onLoad() {
	
		},
		methods: {
	
		}
	}
</script>

<style lang="scss" scoped>
	.home-view {
		padding: 40rpx 60rpx;
		
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
			
			&.group-zuixin {
				.group-body {
					::v-deep .u-row {
						margin-bottom: 0;
						
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
			
			&.group-diantai {
				.group-body {
					::v-deep .u-row {
						margin-bottom: 0;
						
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