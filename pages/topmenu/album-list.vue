<template>
	<view class="album-list-view">
		<layout-main name="album-list">
			<album-list></album-list>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import AlbumList from '@/components/TopComponents/AlbumList'
	
	export default {
		name: 'album-list-page',
		components: {
			LayoutMain,
			AlbumList
		},
		data() {
			return { }
		}
	}
</script>

<style lang="scss" scoped>
	.album-list-view { }
</style>