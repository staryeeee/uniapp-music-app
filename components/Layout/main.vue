<template>
	<view class="app-layout-view">
		<u-sticky :offsetTop="0" :customNavHeight="0">
			<view class="app-layout-top">
				<top-menu :name="name" @change="handleMenuChange"></top-menu>
			</view>
		</u-sticky>
		<view class="app-layout-main">
			<view class="app-layout-menu">
				<u-sticky :offsetTop="50" :customNavHeight="0">
					<left-menu :name="name" @auth="handleAuth" @change="handleMenuChange"></left-menu>
				</u-sticky>
			</view>
			<view class="app-layout-content">
				<slot></slot>
			</view>
		</view>
		<signin v-model="isSignin"></signin>
		<music-bar :music="currMusic" @show-music="handleShowMusic"></music-bar>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import TopMenu from '@/components/TopMenu'
	import LeftMenu from '@/components/LeftMenu'
	import Signin from '@/components/Auth/Signin'
	import MusicBar from '@/components/MusicBar'
	
	export default {
		name: 'layout-main',
		components: {
			TopMenu,
			LeftMenu,
			Signin,
			MusicBar
		},
		props: {
			name: {
				type: String,
				default: '',
			}
		},
		data() {
			return {
				isSignin: false
			}
		},
		computed: {
			...mapState('music', ['currMusic'])
		},
		methods: {
			...mapActions({
				setPage: 'app/setPage'
			}),
			handleAuth(data) {
				this.isSignin = true
			},
			handleMenuChange(data) {
				console.log(data)
				uni.navigateTo({
					url: data
				})
			},
			handleShowMusic() {
				uni.navigateTo({
					url: '/pages/music/index?id=' + this.currMusic.id,
					animationType: 'slide-in-bottom',
					animationDuration: 200
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.app-layout-view {
		.app-layout-top {
			height: 100rpx;
			overflow: hidden;
		}
		
		.app-layout-main {
			display: flex;
			justify-content: flex-start;
			flex-direction: row;
			
			.app-layout-menu {
				width: 400rpx;
			}
			
			.app-layout-content {
				flex: 1;
			}
		}
	}
</style>