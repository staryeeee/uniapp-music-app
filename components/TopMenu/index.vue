<template>
	<view class="top-menu-view">
		<view class="top-menu-content">
			<view class="top-menu-left">
				<uni-icons class="icon-arrow" type="back" size="20" color="#444"></uni-icons>
				<uni-icons class="icon-arrow" type="forward" size="20" color="#444"></uni-icons>
			</view>
			<view class="top-menu-right">
				<view class="top-menu-nav">
					<view class="nav-item" :class="{ active: navName == 'home' }" @click="handleMenuTo('home')">
						个性推荐
					</view>
					<view class="nav-item" :class="{ active: navName == 'music-list' }" @click="handleMenuTo('music-list')">
						歌单
					</view>
					<view class="nav-item" :class="{ active: navName == 'radio-list' }" @click="handleMenuTo('radio-list')">
						主播电台
					</view>
					<view class="nav-item" :class="{ active: navName == 'hot-list' }" @click="handleMenuTo('hot-list')">
						排行榜
					</view>
					<view class="nav-item" :class="{ active: navName == 'singer-list' }" @click="handleMenuTo('singer-list')">
						歌手
					</view>
					<view class="nav-item" :class="{ active: navName == 'newest-list' }" @click="handleMenuTo('newest-list')">
						最新音乐
					</view>
				</view>
				<view class="top-menu-form">
				</view>
				<view class="top-menu-action">
					<uni-icons class="icon-action" type="gear" size="24" color="#999"></uni-icons>
					<uni-icons class="icon-action" type="email" size="24" color="#999"></uni-icons>
					<uni-icons class="icon-action" type="color" size="24" color="#999"></uni-icons>
					<uni-icons class="icon-action" type="gift" size="24" color="#999"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'top-menu',
		props: {
			value: {
				type: String,
				default: 'home'
			}
		},
		data() {
			return {
				keyword: '',
				navName: this.value
			}
		},
		watch: {
			value(val) {
				this.navName = this.value
			}
		},
		methods: {
			handleMenuTo(data) {
				this.navName = data
				this.$emit('change', data)
			}
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
						padding: 0 30rpx;
						font-size: 28rpx;
						color: $uni-text-color-grey;
						
						&.active {
							color: $uni-text-color;
						}
					}
				}
		
				.top-menu-form {
					width: 300rpx;
					
					:deep(.uni-searchbar) {
						.uni-searchbar__box {
							height: 48rpx;
							line-height: 48rpx;
							font-size: 24rpx;
						}
					}
				}
				
				.top-menu-action {
					width: 320rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					
					.icon-action {
						margin-right: 20rpx;
						color: $uni-text-color-grey;
					}
				}
			}
		}
	}
</style>
