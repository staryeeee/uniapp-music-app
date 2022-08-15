<template>
	<view class="video-list-view">
		<layout-main>
			<video-list :id="id"></video-list>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import VideoList from '@/components/LeftComponents/VideoList'
	
	export default {
		name: 'video-list-page',
		components: {
			LayoutMain,
			VideoList
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
	.video-list-view { }
</style>