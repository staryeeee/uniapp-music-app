<template>
	<view class="recent-list-view">
		<layout-main>
			<recent-list :id="id"></recent-list>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import RecentList from '@/components/LeftComponents/RecentList'
	
	export default {
		name: 'recent-list-page',
		components: {
			LayoutMain,
			RecentList
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
	.recent-list-view { }
</style>