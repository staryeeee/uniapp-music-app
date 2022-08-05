<template>
	<view class="song-list-view">
		<view class="song-list-top">
			<view class="top-wrap">
				<view class="top-img-top">
					<image class="img-top" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
				</view>
				<view class="top-block">
					<text class="top-badge">精品推荐</text>
					<text class="top-title text-wrap">【独家】墨菲定律音乐博客</text>
				</view>
			</view>
		</view>
		<div class="song-list-head">
			<div class="head-left">
				<view class="head-filter">全部歌单</view>
			</div>
			<div class="head-right">
				<view class="head-nav">
					<view class="nav-item" v-for="(item, index) in navList" :key="index">
						<text class="nav-text">{{ item.title }}</text>
					</view>
				</view>
			</div>
		</div>
		<view class="song-list-body">
			<u-row>
				<u-col span="3" v-for="(item, index) in 20" :key="index">
					<view class="col-wrap">
						<view class="col-img-top">
							<image class="img-col" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
						</view>
						<view class="col-block">
							<text class="col-text text-ellipsis">《超级面对面》第10期 keshi：我的音乐永远新鲜</text>
						</view>
					</view>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'song-list',
		data() {
			return {
				navList: [
					{ title: '华语' },
					{ title: '流行' },
					{ title: '摇滚' },
					{ title: '民谣' },
					{ title: '电子' },
					{ title: '另类/独立' },
					{ title: '轻音乐' },
					{ title: '综艺' },
					{ title: '影视原声' },
					{ title: 'ACG' }
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.song-list-view {
		padding: 40rpx 60rpx;
		
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
					padding-top: 40rpx;;
					
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