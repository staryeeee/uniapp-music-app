<template>
	<view class="download-list-view">
		<layout-main>
			<download-list :id="id"></download-list>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import DownloadList from '@/components/LeftComponents/DownloadList'
	
	export default {
		name: 'download-list-page',
		components: {
			LayoutMain,
			DownloadList
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
	.download-list-view { }
</style>