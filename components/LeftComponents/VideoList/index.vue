<template>
	<view class="video-list-view">
		<div class="video-list-head">
			<div class="head-left">
				<view class="head-filter">全部视频</view>
			</div>
			<div class="head-right">
				<view class="head-nav">
					<view class="nav-item" v-for="(item, index) in navList" :key="index">
						<text class="nav-text">{{ item.title }}</text>
					</view>
				</view>
			</div>
		</div>
		<view class="video-list-body">
			<u-row>
				<u-col span="3" v-for="(item, index) in 20" :key="index">
					<view class="col-wrap">
						<view class="col-img-top">
							<image class="img-col" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
						</view>
						<view class="col-block">
							<text class="col-text text-ellipsis">我是神的少女 风情万种</text>
						</view>
					</view>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'video-list',
		data() {
			return {
				navList: [
					{ title: '翻唱' },
					{ title: '听 BGM' },
					{ title: '生活' },
					{ title: '现场' },
					{ title: '舞蹈' },
					{ title: 'MV' },
					{ title: '游戏' },
					{ title: 'AGG 音乐' },
					{ title: '最佳饭制' }
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.video-list-view {
		padding: 40rpx 60rpx;
		
		.video-list-head {
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
					}
				}
			}
		}
		
		.video-list-body {
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