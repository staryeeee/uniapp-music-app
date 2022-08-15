<template>
	<view class="radio-list-view">
		<layout-main name="radio-list">
			<radio-list></radio-list>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import RadioList from '@/components/TopComponents/RadioList'
	
	export default {
		name: 'radio-list-page',
		components: {
			LayoutMain,
			RadioList
		},
		data() {
			return { }
		}
	}
</script>

<style lang="scss" scoped>
	.radio-list-view { }
</style>