<template>
	<view class="singer-list-view">
		<layout-main name="singer-list">
			<singer-list :id="id"></singer-list>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import SingerList from '@/components/TopComponents/SingerList'
	
	export default {
		name: 'singer-list-page',
		components: {
			LayoutMain,
			SingerList
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
	.singer-list-view { }
</style>