<template>
	<view class="follow-list-view">
		<layout-main>
			<follow-list :id="id"></follow-list>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import FollowList from '@/components/LeftComponents/FollowList'
	
	export default {
		name: 'follow-list-page',
		components: {
			LayoutMain,
			FollowList
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
	.follow-list-view { }
</style>