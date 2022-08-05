<template>
	<view class="singer-list-view">
		<view class="singer-list-head">
			<view class="singer-filter-wrap" v-for="(item, index) in filterList" :key="index">
				<view class="filter-title">{{ item.title }}：</view>
				<view class="filter-nav">
					<view class="nav-item" :class="{ active: subIndex == 0 }" v-for="(subItem, subIndex) in item.children" :key="subIndex">
						<text class="nav-text">{{ subItem.title }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="singer-list-body">
			<view class="singer-group group-quanqiu">
				<view class="group-head">
					<text class="head-title">全球榜</text>
				</view>
				<view class="group-body">
					<u-row>
						<u-col span="2" v-for="(item, index) in 20" :key="index">
							<view class="col-wrap">
								<view class="col-img-top">
									<image class="img-col" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
								</view>
								<view class="col-block">
									<text class="col-title text-wrap">陈奕迅</text>
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
				name: 'singer-list',
				filterList: [
					{ title: '语种', children: [
						{ title: '全部' },
						{ title: '华语' },
						{ title: '欧美' },
						{ title: '日本' },
						{ title: '韩国' },
						{ title: '其他' }
					] },
					{ title: '分类', children: [
						{ title: '全部' },
						{ title: '男歌手' },
						{ title: '女歌手' },
						{ title: '乐队组合' }
					] },
					{ title: '筛选', children: [
						{ title: '热门' },
						{ title: 'A' },
						{ title: 'B' },
						{ title: 'C' },
						{ title: 'D' },
						{ title: 'E' },
						{ title: 'F' },
						{ title: 'G' },
						{ title: 'H' },
						{ title: 'I' },
						{ title: 'J' },
						{ title: 'K' },
						{ title: 'L' },
						{ title: 'M' },
						{ title: 'N' },
						{ title: 'O' },
						{ title: 'P' },
						{ title: 'Q' },
						{ title: 'R' },
						{ title: 'S' },
						{ title: 'T' },
						{ title: 'U' },
						{ title: 'V' },
						{ title: 'W' },
						{ title: 'X' },
						{ title: 'Y' },
						{ title: 'Z' },
						{ title: '#' }
					] }
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.singer-list-view {
		padding: 40rpx 60rpx;
		
		.singer-list-head {
			.singer-filter-wrap {
				display: flex;
				justify-content: flex-start;
				margin-top: 10rpx;
				
				&:first-child {
					margin-top: 0;
				}
				
				.filter-title {
					width: 90rpx;
					font-size: 24rpx;
					line-height: 40rpx;
				}
				
				.filter-nav {
					flex: 1;
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;
					
					.nav-item {
						margin: 0 20rpx;
						padding: 0 20rpx;
						margin-bottom: 10rpx;
						border-radius: 40rpx;
							
						.nav-text {
							font-size: 24rpx;
							line-height: 40rpx;
							color: #999;
						}
						
						&.active {
							background-color: #fcf5f5;
								
							.nav-text {
								color: #dd4444;
							}
						}
					}
				}
			}
		}
		
		.singer-list-body {
			.singer-group {
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
			}
		}
	}
</style>