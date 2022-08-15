<template>
	<view class="fm-list-view">
		<layout-main>
			<fm-list :id="id"></fm-list>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import FmList from '@/components/LeftComponents/FmList'
	
	export default {
		name: 'fm-list-page',
		components: {
			LayoutMain,
			FmList
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
	.fm-list-view { }
</style>