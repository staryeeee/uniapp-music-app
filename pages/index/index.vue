<template>
	<view class="index-view">
		<u-sticky v-if="!isShowMusic" :offsetTop="0" :customNavHeight="0">
			<view class="index-top">
				<top-menu v-model="page" @change="handleTopMenuChange"></top-menu>
			</view>
		</u-sticky>
		<view v-if="!isShowMusic" class="index-main">
			<view class="index-left-menu">
				<u-sticky :offsetTop="50" :customNavHeight="0">
					<left-menu v-model="page" @change="handleTopMenuChange"></left-menu>
				</u-sticky>
			</view>
			<view class="index-content">
				<u-transition mode="fade" :show="page == 'home'">
					<home></home>
				</u-transition>
				<u-transition mode="fade" :show="page == 'music-list'">
					<music-list v-if="page == 'music-list'"></music-list>
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
					<newest-list></newest-list>
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
			</view>
		</view>
		<u-transition mode="fade-up" :show="isShowMusic">
			<view class="music-box">
				<music @close="handleMusicClose"></music>
			</view>
		</u-transition>
		<music-bar @show-music="handleShowMusic"></music-bar>
	</view>
</template>

<script>
	import MusicBar from '@/components/MusicBar'
	import Music from '@/components/Music'
	import Home from '@/components/Home'
	import MusicList from '@/components/TopComponents/MusicList'
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
	
	export default {
		components: {
			MusicBar,
			Music,
			
			Home,
			
			MusicList,
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
			LikeList
		},
		data() {
			return {
				isShowMusic: false,
				isShowTrans: false,
				page: 'recent-list',
			}
		},
		onLoad() {

		},
		methods: {
			handleShowMusic() {
				this.isShowMusic = !this.isShowMusic
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				});
			},
			handleMusicClose() {
				this.isShowMusic = false
			},
			handleTopMenuChange(data) {
				this.isShowTrans = true
				this.page = data
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				});
			}
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
