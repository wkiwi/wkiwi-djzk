<template>
	<view class="back-top" @click="backTop" :class="show ? 'show' : ''">
		<view class="back-bg">
			<view class="iconfont icon-shang"></view>
		</view>
	</view>
</template>

<script>
export default {
    name: 'back-top',
    props: {

    },
    data () {
        return {
					show: false
        }
    },
    components: {

    },
		onPageScroll: function(res) {
			let _this = this;
			if(this.timeoutId){
				clearTimeout(this.timeoutId);
			}
			this.timeoutId = setTimeout(function(){ //节流
				res.scrollTop > 900 ? _this.show = true : _this.show = false;
				_this.timeoutId = undefined;
			},10);
		},
    methods: {
        backTop:function(){
					// this.show = false;
					uni.pageScrollTo({
						scrollTop: 0,
						duration: 400
					});
				}
    }
}
</script>

<style scoped >
	.back-top{
		position: fixed;
		bottom: -50upx;
		right: 30upx;
		z-index: 2000;
		padding: 10upx;
		border-radius: 50%;
		overflow: hidden;
		opacity: 0;
		transition: all .4s ease 0s;
	}
	.back-bg{
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
		overflow: hidden;
		background: rgba(255,81,0,.8);
		color: #FFFFFF;
		line-height: 60upx;
		text-align: center;
		box-shadow:0upx 0upx 20upx rgba(255,81,0,.7);
	}
	.iconfont{
		font-size: 30upx;
	}
	.back-top.show{
		opacity: 1;
    transform: translateY(-150upx) translateX(0);
	}
</style>
