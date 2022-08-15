<template>
	<view class="hot-list-view">
		<layout-main name="hot-list">
			<hot-list :id="id"></hot-list>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import HotList from '@/components/TopComponents/HotList'
	
	export default {
		name: 'hot-list-page',
		components: {
			LayoutMain,
			HotList
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
	.hot-list-view { }
</style>