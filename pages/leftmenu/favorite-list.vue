<template>
	<view class="favorite-list-view">
		<layout-main>
			<favorite-list :id="id"></favorite-list>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import FavoriteList from '@/components/LeftComponents/FavoriteList'
	
	export default {
		name: 'favorite-list-page',
		components: {
			LayoutMain,
			FavoriteList
		},
		data() {
			return {
				id: ''
			}
		},
		onLoad(options) {
			this.id = options.id || ''
		}
	}
</script>

<style lang="scss" scoped>
	.favorite-list-view { }
</style>