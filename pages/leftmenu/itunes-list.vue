<template>
	<view class="itunes-list-view">
		<layout-main>
			<itunes-list :id="id"></itunes-list>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import ItunesList from '@/components/LeftComponents/ItunesList'
	
	export default {
		name: 'itunes-list-page',
		components: {
			LayoutMain,
			ItunesList
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
	.itunes-list-view { }
</style>