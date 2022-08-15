<template>
	<scroll-view scroll-y class="left-menu-view">
		<view class="left-menu-content">
			<view v-if="!userInfo.userId" class="nav-user" @click="handleAuth">
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
					<view class="nav-item" :class="{ active: name == 'home' }" @click="handleMenuTo('/pages/index/index')">
						<text>发现音乐</text>
					</view>
					<view class="nav-item" :class="{ active: name == 'fm-list' }" @click="handleMenuTo('/pages/leftmenu/fm-list')">
						<text>私人 FM</text>
					</view>
					<view class="nav-item" :class="{ active: name == 'video-list' }" @click="handleMenuTo('/pages/leftmenu/video-list')">
						<text>视频</text>
					</view>
					<view class="nav-item" :class="{ active: name == 'follow-list' }" @click="handleMenuTo('/pages/leftmenu/follow-list')">
						<text>关注</text>
					</view>
				</view>
			</view>
			<view class="nav-list">
				<view class="list-head">
					<text class="head-title">我的音乐</text>
				</view>
				<view class="list-body">
					<view class="nav-item" :class="{ active: name == 'itunes-list' }" @click="handleMenuTo('/pages/leftmenu/itunes-list')">
						<text>iTunes 音乐</text>
					</view>
					<view class="nav-item" :class="{ active: name == 'download-list' }" @click="handleMenuTo('/pages/leftmenu/download-list')">
						<text>下载管理</text>
					</view>
					<view class="nav-item" :class="{ active: name == 'recent-list' }" @click="handleMenuTo('/pages/leftmenu/recent-list')">
						<text>最近播放</text>
					</view>
					<view class="nav-item" :class="{ active: name == 'favorite-list' }" @click="handleMenuTo('/pages/leftmenu/favorite-list')">
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
					<view class="nav-item" :class="{ active: name == 'like-list' }" @click="handleMenuTo('like-list')">
						<text>我喜欢的音乐</text>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	
	export default {
		name: 'left-menu',
		props: {
			name: {
				type: String,
				default: 'home'
			}
		},
		data() {
			return { }
		},
		computed: {
			...mapState('auth', ['cookie', 'token', 'userInfo'])
		},
		methods: {
			handleAuth() {
				this.$emit('auth', 'signin')
			},
			handleMenuTo(data) {
				this.$emit('change', data)
			}
		}
	}
</script>

<style lang="scss">
	.left-menu-view {
		width: 400rpx;
		height: calc(100vh - 100rpx - 120rpx);
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
