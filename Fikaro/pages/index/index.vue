<template>
	<swiper class="banner" indicator-dots circular :autoplay="true" indicator-active-color="#c28d63">
		<swiper-item v-for="item in pictures" :key="item.id">
			<image :src="item.url"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				
				pictures: [
					{ id: '1', url: "../../static/swipe/c1.jpg"},
					{ id: '2', url: "../../static/swipe/c2.jpg"},
					{ id: '3', url: "../../static/swipe/c3.jpg"},
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
.banner {
	height: 1000upx;
	image {
		width: 100%;
		height: 1000upx;
	}
}
</style>
