<template>
	<view class="index-view">
		<u-sticky :offsetTop="0" :customNavHeight="0">
			<view class="index-top">
				<top-menu v-model="page" @change="handleTopMenuChange"></top-menu>
			</view>
		</u-sticky>
		<view class="index-main">
			<view class="index-left-menu">
				<u-sticky :offsetTop="50" :customNavHeight="0">
					<left-menu v-model="page" @auth="handleAuth" @change="handleTopMenuChange"></left-menu>
				</u-sticky>
			</view>
			<view class="index-content">
				<u-transition mode="fade" :show="page == 'home'">
					<home @album="handleAlbum" @music="handleMusic"></home>
				</u-transition>
				<u-transition mode="fade" :show="page == 'album-list'">
					<album-list @album="handleAlbum"></album-list>
				</u-transition>
				<u-transition mode="fade" :show="page == 'radio-list'">
					<radio-list></radio-list>
				</u-transition>
				<u-transition mode="fade" :show="page == 'hot-list'">
					<hot-list></hot-list>
				</u-transition>
				<u-transition mode="fade" :show="page == 'singer-list'">
					<singer-list></singer-list>
				</u-transition>
				<u-transition mode="fade" :show="page == 'newest-list'">
					<newest-list @album="handleAlbum" @music="handleMusic"></newest-list>
				</u-transition>
				
				<u-transition mode="fade" :show="page == 'fm-list'">
					<fm-list></fm-list>
				</u-transition>
				<u-transition mode="fade" :show="page == 'video-list'">
					<video-list></video-list>
				</u-transition>
				<u-transition mode="fade" :show="page == 'follow-list'">
					<follow-list></follow-list>
				</u-transition>
				<u-transition mode="fade" :show="page == 'itunes-list'">
					<itunes-list></itunes-list>
				</u-transition>
				<u-transition mode="fade" :show="page == 'download-list'">
					<download-list></download-list>
				</u-transition>
				<u-transition mode="fade" :show="page == 'recent-list'">
					<recent-list></recent-list>
				</u-transition>
				<u-transition mode="fade" :show="page == 'favorite-list'">
					<favorite-list></favorite-list>
				</u-transition>
				<u-transition mode="fade" :show="page == 'like-list'">
					<like-list></like-list>
				</u-transition>
				<u-transition mode="fade" :show="page == 'album'">
					<album :id="id"></album>
				</u-transition>
			</view>
		</view>
		<music-bar :music="currMusic" @show-music="handleShowMusic"></music-bar>
		<signin v-model="isSignin"></signin>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import Signin from '@/components/Auth/Signin'
	import MusicBar from '@/components/MusicBar'
	import Home from '@/components/Home'
	import AlbumList from '@/components/TopComponents/AlbumList'
	import RadioList from '@/components/TopComponents/RadioList'
	import HotList from '@/components/TopComponents/HotList'
	import SingerList from '@/components/TopComponents/SingerList'
	import NewestList from '@/components/TopComponents/NewestList'
	import FmList from '@/components/LeftComponents/FmList'
	import VideoList from '@/components/LeftComponents/VideoList'
	import FollowList from '@/components/LeftComponents/FollowList'
	import DownloadList from '@/components/LeftComponents/DownloadList'
	import FavoriteList from '@/components/LeftComponents/FavoriteList'
	import RecentList from '@/components/LeftComponents/RecentList'
	import ItunesList from '@/components/LeftComponents/ItunesList'
	import LikeList from '@/components/LeftComponents/LikeList'
	
	import Album from '@/components/Album'
	
	import {
		fetchLoginStatus
	} from '@/api/music'
	
	export default {
		components: {
			Signin,
			
			MusicBar,
			
			Home,
			
			AlbumList,
			RadioList,
			HotList,
			SingerList,
			NewestList,
			
			FmList,
			VideoList,
			FollowList,
			DownloadList,
			FavoriteList,
			RecentList,
			ItunesList,
			LikeList,
			
			Album
		},
		data() {
			return {
				isSignin: false,
				isShowTrans: false,
				page: 'home',
				id: ''
			}
		},
		computed: {
			...mapState('music', ['currMusic'])
		},
		methods: {
			...mapActions({
				addToList: 'music/addToList'
			}),
			handleMusic(data) {
				this.addToList([data])
			},
			handleAlbum(data) {
				this.id = data
				this.page = 'album'
			},
			handleShowMusic() {
				uni.navigateTo({
					url: '/pages/music/index?id=' + this.currMusic.id,
					animationType: 'slide-in-bottom',
					animationDuration: 200
				})
			},
			handleAuth(data) {
				fetchLoginStatus().then(res => {
					
				})
				if (data == 'signin') {
					this.isSignin = true
				}
			},
			handleTopMenuChange(data) {
				this.isShowTrans = true
				this.page = data
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				});
			},
			initData() {
			},
		},
		onLoad(options) {
			this.page = options.page || 'home'
			this.id = options.id || ''
			this.initData()
		}
	}
</script>

<style lang="scss" scoped>
	.index-view {
		.index-top {
			height: 50px;
			overflow: hidden;
		}
		
		.index-main {
			display: flex;
			justify-content: flex-start;
			flex-direction: row;
			
			.index-left-menu {
				width: 400rpx;
			}
		}
		
		.index-content {
			flex: 1;
		}
	}
</style>
