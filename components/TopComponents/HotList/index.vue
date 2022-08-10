<template>
	<view class="hot-list-view">
		<view class="hot-list-body">
			<view v-if="guanfangList.length > 0" class="hot-group group-guanfang">
				<view class="group-head">
					<text class="head-title">官方榜</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="12" v-for="(item, index) in guanfangList" :key="index">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="aspectFill" :src="item.coverImgUrl"></image>
								</view>
								<view class="col-block">
									<view v-if="false" class="col-cell">
										<text class="cell-title"><text class="title-num">1</text> 对你说</text>
										<text class="cell-text">张茜</text>
									</view>
									<text class="col-title text-ellipsis">{{ item.description }}</text>
									<text class="col-text text-wrap">{{ item.updateFrequency }}</text>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view v-if="quanqiuList.length > 0" class="hot-group group-quanqiu">
				<view class="group-head">
					<text class="head-title">全球榜</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="3" v-for="(item, index) in quanqiuList" :key="index">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="aspectFill" :src="item.coverImgUrl"></image>
								</view>
								<view class="col-block">
									<text class="col-title text-wrap">{{ item.name }}</text>
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
		fetchToplist
	} from '@/api/music'
	
	export default {
		name: 'hot-list',
		data() {
			return {
				guanfangList: [],
				quanqiuList: []
			}
		},
		methods: {
			getHotList() {
				fetchToplist().then(res => {
					this.guanfangList = res.list.slice(0, 4)
					this.quanqiuList = res.list.slice(4)
				})
			}
		},
		mounted() {
			this.getHotList()
		}
	}
</script>

<style lang="scss" scoped>
	.hot-list-view {
		padding: 40rpx 60rpx 140rpx 60rpx;
		
		.hot-list-body {
			.hot-group {
				margin-top: 40rpx;
				
				&:first-child {
					margin-top: 0;
				}
				
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
									width: 350rpx;
									height: 350rpx;
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
									color: #444;
									
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
				
				&.group-guanfang {
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
								
								.col-img-top {
									width: 340rpx;
									
									.img-col {
										width: 340rpx;
										height: 340rpx;
									}
								}
								
								.col-block {
									margin-left: 60rpx;
									
									.col-title {
										font-size: 28rpx;
										max-width: 260px;
										margin-bottom: 30rpx;
									}
									
									.col-text {
										padding-left: 20rpx;
										max-width: 260px;
										font-size: 26rpx;
										line-height: 46rpx;
										color: $uni-text-color-grey;
									}
									
									.col-cell {
										display: flex;
										justify-content: space-between;
										align-items: center;
										height: 60rpx;
										
										&:nth-child(even) {
											background-color: #fafafa;
										}
										
										.cell-title {
											padding-left: 20rpx;
											font-size: 28rpx;
											color: #999;
										
											.title-num {
												margin-right: 20rpx;
												color: #dd4444;
											}
										}
										
										.cell-text {
											padding-right: 60rpx;
											font-size: 26rpx;
											color: #ccc;
										}
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