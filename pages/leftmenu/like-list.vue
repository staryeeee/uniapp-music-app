<template>
	<view class="like-list-view">
		<layout-main>
			<like-list :id="id"></like-list>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import LikeList from '@/components/LeftComponents/LikeList'
	
	export default {
		name: 'like-list-page',
		components: {
			LayoutMain,
			LikeList
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
	.like-list-view { }
</style>