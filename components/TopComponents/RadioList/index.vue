<template>
	<view class="radio-list-view">
		<u-swiper :list="swiperList" keyName="imgUrl" :displayMultipleItems="1" indicator indicatorMode="dot" previousMargin="60" nextMargin="60" :height="200" circular :autoplay="false" radius="5" bgColor="#ffffff"></u-swiper>
		
		<view class="radio-list-tabs">
			<u-tabs :list="tabList" :lineHeight="0">
			</u-tabs>
		</view>
		<view class="radio-list-body">
			<view class="radio-group group-jingpin">
				<view class="group-head">
					<text class="head-title">付费精品</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="6" v-for="(item, index) in 4" :key="index">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
								</view>
								<view class="col-block">
									<text class="col-title text-wrap">广播剧《青梅屿》</text>
									<text class="col-text text-wrap">小麻雀与大狼狗的夏日恋爱物语</text>
									<text class="col-text text-wrap">青梅屿 第12集</text>
									<text class="col-price text-wrap">¥ 12.9</text>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view class="radio-group group-tuijian">
				<view class="group-head">
					<text class="head-title">电台个性推荐</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="2" v-for="(item, index) in 5" :key="index">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
								</view>
								<view class="col-block">
									<text class="col-title text-wrap">广播剧《青梅屿》</text>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view class="radio-group group-youshengshu">
				<view class="group-head">
					<text class="head-title">有声书</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="2" v-for="(item, index) in 5" :key="index">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
								</view>
								<view class="col-block">
									<text class="col-text text-ellipsis">校霸学神间接性灵魂互换</text>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view class="radio-group group-chuangzuo">
				<view class="group-head">
					<text class="head-title">创作翻唱</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="2" v-for="(item, index) in 5" :key="index">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="widthFix" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
								</view>
								<view class="col-block">
									<text class="col-text text-ellipsis">校霸学神间接性灵魂互换</text>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view class="radio-group group-yinyue">
				<view class="group-head">
					<text class="head-title">音乐推荐</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="2" v-for="(item, index) in 5" :key="index">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="widthFix" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
								</view>
								<view class="col-block">
									<text class="col-text text-ellipsis">校霸学神间接性灵魂互换</text>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view class="radio-group group-qinggan">
				<view class="group-head">
					<text class="head-title">情感</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="2" v-for="(item, index) in 5" :key="index">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="widthFix" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
								</view>
								<view class="col-block">
									<text class="col-text text-ellipsis">校霸学神间接性灵魂互换</text>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view class="radio-group group-tuokouxiu">
				<view class="group-head">
					<text class="head-title">脱口秀</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="2" v-for="(item, index) in 5" :key="index">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="widthFix" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
								</view>
								<view class="col-block">
									<text class="col-text text-ellipsis">校霸学神间接性灵魂互换</text>
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
	export default {
		data() {
			return {
				name: 'radio-list',
				swiperList: [{
					title: '内容 A',
					imgUrl: 'http://p1.music.126.net/Srx6b0FP8S0kiOw1Zds3yQ==/109951167726062825.jpg?imageView&quality=89'
				}, {
					title: '内容 B',
					imgUrl: 'http://p1.music.126.net/z4ojoJkXKAlPsBCGe1GN-g==/109951167726073664.jpg?imageView&quality=89'
				}, {
					title: '内容 C',
					imgUrl: 'http://p1.music.126.net/-Q7-4JJnpx9h7lXAzEwLZQ==/109951167726072905.jpg?imageView&quality=89'
				}],
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
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.radio-list-view {
		padding: 40rpx 60rpx;
		
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