<template>
	<scroll-view  scroll-x="true" class="scroll-x">
			<view class="item-wrapper">
				<view class="item" v-for="(item,index) of goodslist" :key="index" @click="detail(item)" >
					<view class="icon">
						<img class="img" lazy-load :src="item.goods_pic" :alt="item.goods_short_title">
					</view>
					<view class="tip">
						<view class="fl">{{item.goods_sales}}人已领</view>
						<view class="fr">{{item.coupon_price}}元券</view>
					</view>
					<view class="desc">
						<view class="title">{{item.goods_short_title}}</view>
						<view class="row-price">
							<view class="goods-price">原价 {{item.goods_price}}</view>
							<view class="quanhou">券后 {{item.quanhou_price}}元</view>
						</view>
					</view>
				</view>
			</view>
	</scroll-view>
</template>

<script>
export default {
    name: 'scroll-view-x',
    props: {
        goodslist: {
            type: Array
        }
    },
    data () {
        return {
					
        }
    },
		onLoad() {
		},
    components: {

    },
    methods: {
			detail (data) {
				uni.showToast({
						title: '进入详情页',
						duration: 2000
				});
			}
    }
}
</script>

<style scoped>
	view{
		font-size: 24upx;
	}
	.fl{
		float:left;
	}
	.fr{
		float:right;
	}
	.scroll-x{
		width: 100%;
		height:450upx;
	}
	.item-wrapper{
		height:450upx;
		width: 3792upx;
	}
	.scroll-x .item{
		float: left;
		width: 300upx;
		height: 400upx;
		background: #fff;
		margin:0 8upx;
		border-radius: 15upx;
		overflow:hidden;
		position:relative;
		box-shadow: 0px 15px 20px rgba(7,17,27,.2);
	}
	.icon{
		width: 100%;
		height: 0;
		padding-bottom: 100%;
		position: relative;
	}
	.icon .img{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.tip{
		box-sizing: border-box;
		padding: 0 15upx;
		position: absolute;
		z-index: 5;
		top: 250upx;
		height: 50upx;
		width: 100%;
		background: rgba(255,31,189,.6);
		color: #fff;
		overflow: hidden;
		font-size: 20upx;
		line-height: 50upx;
		border-top-left-radius: 10upx;
		border-top-right-radius: 10upx;
	}
	
	.desc {
		height: 100upx;
		padding: 0 15upx;
	}
	.desc .title {
		height: 50upx;
		line-height: 50upx;
		font-size: 24upx;
		color: #333333;
		font-weight: 400;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.row-price {
		font-size: 24upx;
		color: #888;
		line-height: 40upx;
		height: 40upx;
	}
	.row-price .goods-price {
		float:left;
		text-decoration:line-through;
	}
	.row-price .quanhou{
		float: right; 
		text-align: right;
		color: #ff1f1f;
	}
	
</style>
