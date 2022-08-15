<template>
	<view class="radio-view">
		<layout-main name="radio">
			<radio-detail :id="id"></radio-detail>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import RadioDetail from '@/components/RadioDetail'
	
	export default {
		name: 'radio-page',
		components: {
			LayoutMain,
			RadioDetail
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
	.radio-view { }
</style>