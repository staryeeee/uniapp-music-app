<template>
	<view class="left-menu-view">
		<view class="left-menu-content">
			<view v-if="!userInfo.userId" class="nav-user" @click="handleUser">
				<view class="user-avatar">
					<uni-icons class="icon-user" type="person" size="20"></uni-icons>
				</view>
				<view class="user-info">
					<text class="user-title">未登录</text>
				</view>
			</view>
			<view v-if="userInfo.userId" class="nav-user">
				<view class="user-avatar">
					<image class="img-avatar" mode="aspectFill" :src="userInfo.avatarUrl"></image>
				</view>
				<view class="user-info">
					<text class="user-title">{{ userInfo.nickname }}</text>
				</view>
			</view>
			<view class="nav-list">
				<view class="list-body">
					<view class="nav-item" :class="{ active: navName == 'home' }" @click="handleMenuTo('home')">
						<text>发现音乐</text>
					</view>
					<view class="nav-item" :class="{ active: navName == 'fm-list' }" @click="handleMenuTo('fm-list')">
						<text>私人 FM</text>
					</view>
					<view class="nav-item" :class="{ active: navName == 'video-list' }" @click="handleMenuTo('video-list')">
						<text>视频</text>
					</view>
					<view class="nav-item" :class="{ active: navName == 'follow-list' }" @click="handleMenuTo('follow-list')">
						<text>关注</text>
					</view>
				</view>
			</view>
			<view class="nav-list">
				<view class="list-head">
					<text class="head-title">我的音乐</text>
				</view>
				<view class="list-body">
					<view class="nav-item" :class="{ active: navName == 'itunes-list' }" @click="handleMenuTo('itunes-list')">
						<text>iTunes 音乐</text>
					</view>
					<view class="nav-item" :class="{ active: navName == 'download-list' }" @click="handleMenuTo('download-list')">
						<text>下载管理</text>
					</view>
					<view class="nav-item" :class="{ active: navName == 'recent-list' }" @click="handleMenuTo('recent-list')">
						<text>最近播放</text>
					</view>
					<view class="nav-item" :class="{ active: navName == 'favorite-list' }" @click="handleMenuTo('favorite-list')">
						<text>我的收藏</text>
					</view>
				</view>
			</view>
			<view class="nav-list">
				<view class="list-head">
					<text class="head-title">创建的歌单</text>
					<view class="head-action">
						<uni-icons class="icon-action" type="plusempty" size="16"></uni-icons>
					</view>
				</view>
				<view class="list-body">
					<view class="nav-item" :class="{ active: navName == 'like-list' }" @click="handleMenuTo('like-list')">
						<text>我喜欢的音乐</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	
	export default {
		name: 'left-menu',
		props: {
			value: {
				type: String,
				default: 'home'
			}
		},
		data() {
			return {
				navName: this.value,
			}
		},
		watch: {
			value(val) {
				this.navName = this.value
			}
		},
		computed: {
			...mapState('auth', ['cookie', 'token', 'userInfo'])
		},
		methods: {
			handleUser() {
				console.log(1)
				if (true) {
					this.$emit('auth', 'signin')
				}
			},
			handleMenuTo(data) {
				this.navName = data
				this.$emit('change', data)
			}
		}
	}
</script>

<style lang="scss">
	.left-menu-view {
		min-height: calc(100vh - 50px);
		background-color: #eaeaea;
		
		.left-menu-content {
			padding: 20rpx 0;
			
			.nav-user {
				padding: 0 20rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-direction: row;
				
				.user-avatar {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 80rpx;
					height: 80rpx;
					line-height: 80rpx;
					background-color: #dcdcdc;
					border-radius: 50%;
					
					.icon-user {
						font-size: 60rpx;
					}
					
					.img-avatar {
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						overflow: hidden;
					}
				}
				
				.user-info {
					margin-left: 20rpx;
					flex: 1;
					
					.user-title {
						font-size: 28rpx;
						color: $uni-text-color;
					}
				}
			}
			
			.nav-list{
				margin-top: 20rpx;
				background-color: transparent;
				
				.list-head {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding-left: 32rpx;
					background-color: transparent;
					
					.head-title {
						font-size: 26rpx;
						color: #888;
					}
					
					.head-action {
						padding-right: 32rpx;
					}
				}
				
				.list-body {
					padding: 0;
					
					.nav-item {
						padding-left: 80rpx;
						font-size: 28rpx;
						height: 72rpx;
						line-height: 72rpx;
						color: $uni-text-color;
						
						&.active {
							color: #C20C0C;
							background-color: #dedede;
						}
					
						&:hover {
							background-color: #e3e3e3;
						}
					}
				}
			}
		}
	}
</style>
