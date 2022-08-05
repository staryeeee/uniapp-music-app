<template>
	<view class="newest-list-view">
		<u-subsection :list="tabList" keyName="title" mode="subsection" activeColor="#f56c6c" :current="tabCurrent" @change="handleTabChange"></u-subsection>
		<view class="newest-list-filter">
			<view class="filter-nav">
				<view class="nav-item" :class="{ active: index == 0 }" v-for="(item, index) in filterList" :key="index">
					<text class="nav-text">{{ item.title }}</text>
				</view>
			</view>
		</view>
		<view class="newest-list-body">
			<u-row>
				<u-col span="12" v-for="(item, index) in 20" :key="index">
					<view class="col-wrap">
						<view class="col-num">{{ index < 9 ? '0' + (index + 1) : index }}</view>
						<view class="col-img-left">
							<image class="img-col" mode="aspectFill" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
						</view>
						<view class="col-name">星汉游</view>
						<view class="col-author">张杰</view>
						<view class="col-album">星汉游</view>
						<view class="col-time">04:09</view>
					</view>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: 'newest-list',
				tabCurrent: 0,
				tabList: [
					{ title: '新歌速递' },
					{ title: '新碟上架' }
				],
				filterList: [
					{ title: '全部' },
					{ title: '华语' },
					{ title: '欧美' },
					{ title: '韩国' },
					{ title: '日本' },
					{ title: '小语种' }
				]
			}
		},
		methods: {
			handleTabChange(index) {
				this.tabCurrent = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.newest-list-view {
		padding: 40rpx 60rpx;
		
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
	}
</style>