<template>
	<view class="home-view">
		<layout-main name="home">
			<home @album="handleAlbum" @mv="handleMV" @radio="handleRadio"></home>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import Home from '@/components/Home'
	
	export default {
		name: 'home-page',
		components: {
			LayoutMain,
			Home
		},
		data() {
			return { }
		},
		methods: {
			handleAlbum(data) {
				uni.navigateTo({
					url: '/pages/album/index?id=' + data
				})
			},
			handleMV(data) {
				uni.navigateTo({
					url: '/pages/mv/index?id=' + data
				})
			},
			handleRadio(data) {
				uni.navigateTo({
					url: '/pages/radio/index?id=' + data
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home-view { }
</style>