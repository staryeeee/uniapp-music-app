<template>
	<view class="album-view">
		<layout-main name="album">
			<album :id="id"></album>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import Album from '@/components/Album'
	
	export default {
		name: 'album-page',
		components: {
			LayoutMain,
			Album
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
	.album-view { }
</style>