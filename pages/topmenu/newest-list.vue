<template>
	<view class="newest-list-view">
		<layout-main name="newest-list">
			<newest-list :id="id"></newest-list>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import NewestList from '@/components/TopComponents/NewestList'
	
	export default {
		name: 'newest-list-page',
		components: {
			LayoutMain,
			NewestList
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
	.newest-list-view { }
</style>