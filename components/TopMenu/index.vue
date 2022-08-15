<template>
	<view class="top-menu-view">
		<view class="top-menu-content">
			<view class="top-menu-left">
				<uni-icons class="icon-arrow" type="back" size="20" :color="prevPage ? '#444' : '#ccc'" @click="handlePrevPage"></uni-icons>
				<uni-icons class="icon-arrow" type="forward" size="20" :color="nextPage ? '#444' : '#ccc'" @click="handleNextPage"></uni-icons>
			</view>
			<view class="top-menu-right">
				<view class="top-menu-nav">
					<view class="nav-item" :class="{ active: name == 'home' }" @click="handleMenuTo('/pages/index/index')">
						个性推荐
					</view>
					<view class="nav-item" :class="{ active: name == 'album-list' }" @click="handleMenuTo('/pages/topmenu/album-list')">
						歌单
					</view>
					<view class="nav-item" :class="{ active: name == 'radio-list' }" @click="handleMenuTo('/pages/topmenu/radio-list')">
						主播电台
					</view>
					<view class="nav-item" :class="{ active: name == 'hot-list' }" @click="handleMenuTo('/pages/topmenu/hot-list')">
						排行榜
					</view>
					<view class="nav-item" :class="{ active: name == 'singer-list' }" @click="handleMenuTo('/pages/topmenu/singer-list')">
						歌手
					</view>
					<view class="nav-item" :class="{ active: name == 'newest-list' }" @click="handleMenuTo('/pages/topmenu/newest-list')">
						最新音乐
					</view>
				</view>
				<view class="top-menu-form">
					<input v-model="keyword" class="search-input" placeholder="搜索" />
				</view>
				<view class="top-menu-action">
					<uni-icons class="icon-action" type="gear" size="20" color="#999"></uni-icons>
					<uni-icons class="icon-action" type="email" size="20" color="#999"></uni-icons>
					<uni-icons class="icon-action" type="color" size="20" color="#999"></uni-icons>
					<uni-icons class="icon-action" type="gift" size="20" color="#999"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'top-menu',
		props: {
			name: {
				type: String,
				default: 'home'
			}
		},
		data() {
			return {
				keyword: ''
			}
		},
		computed: {
			prevPage() {
				return getCurrentPages().length > 1
			},
			nextPage() {}
		},
		methods: {
			handlePrevPage() {
				uni.navigateBack(-1)
			},
			handleNextPage() {
				uni.navigateBack(1)
			},
			handleMenuTo(data) {
				this.$emit('change', data)
			},
			initData() { }
		},
		mounted() {
			this.initData()
		}
	}
</script>

<style lang="scss">
	.top-menu-view {
		.top-menu-content {
			display: flex;
			justify-content: flex-start;
			flex-direction: row;
			align-items: center;
			
			.top-menu-left {
				display: flex;
				justify-content: flex-end;
				flex-direction: row;
				align-items: center;
				width: 400rpx;
				height: 50px;
				background-color: #f5f5f5;
				
				.icon-arrow {
					margin-left: 32rpx;
					
					&:first-child {
						margin-left: 0;
					}
				}
			}
			
			.top-menu-right {
				flex: 1;
				display: flex;
				justify-content: flex-start;
				flex-direction: row;
				padding-left: 32rpx;
				height: 50px;
				background-color: #f8f8f8;
				
				.top-menu-nav {
					flex: 1;
					display: flex;
					justify-content: flex-start;
					flex-direction: row;
					align-items: center;
					
					.nav-item {
						padding: 0 18rpx;
						font-size: 26rpx;
						color: $uni-text-color-grey;
						
						&.active {
							color: $uni-text-color;
						}
					}
				}
		
				.top-menu-form {
					width: 200rpx;
					padding-top: 25rpx;
					
					.search-input {
						padding: 0 20rpx;
						height: 48rpx;
						line-height: 48rpx;
						font-size: 24rpx;
						text-align: center;
						border: 2rpx solid #eee;
						border-radius: 48rpx;
						background-color: #fff;
					}
				}
				
				.top-menu-action {
					width: 260rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					
					.icon-action {
						margin-left: 20rpx;
						color: $uni-text-color-grey;
					}
				}
			}
		}
	}
</style>
