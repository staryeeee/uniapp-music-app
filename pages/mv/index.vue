<template>
	<view class="mv-view">
		<layout-main name="mv">
			<mv :id="id"></mv>
		</layout-main>
	</view>
</template>

<script>
	import LayoutMain from '@/components/Layout/main'
	import Mv from '@/components/Mv'
	
	export default {
		name: 'mv-page',
		components: {
			LayoutMain,
			Mv
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
	.mv-view { }
</style>