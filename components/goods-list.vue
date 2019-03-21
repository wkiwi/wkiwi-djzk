<template>
    <view class="goods-list">
    	<view class="goods-item" v-for="(item,index) of goodslist" :key="index" @click="detail(item)">
    		<view class="goods-item-wrapper">
    			<view class="icon">
    				<img class="img" lazy-load :src="item.goods_pic" :alt="item.goods_short_title">
    			</view>
    			<view class="desc">
    				<view class="title">{{item.goods_short_title}}</view>
    				<view class="row-price">
    					<view class="goods-price">原价 {{item.goods_price}}</view>
    					<view class="goods-sales">已售 {{item.goods_sales}}</view>
    				</view>
    				<view class="row-coupon"> 
    					<view class="quanhou">券后 {{item.quanhou_price}}元</view>
    					<view class="coupon-price"><view class="coupon-price-left">{{item.coupon_price}}</view>  <view class="coupon-price-right">元券</view></view> 
    				</view>
    			</view>
    		</view>
    	</view>
    </view>
</template>

<script>
export default {
    name: 'goods-list',
    props: {
        goodslist: {
            type: Array
        }
    },
    data () {
        return {

        }
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

<style scoped >
   .goods-list {
		width: 100%;
		overflow: hidden;
		background: #f3f4f5;
	}
	.goods-item{
		float: left; 
		width: 50%;
		border-radius: 10upx;
	}
	.goods-item:nth-child(odd)  .goods-item-wrapper {
		margin-right: 5upx;
	}
	  
	.goods-item:nth-child(even)  .goods-item-wrapper {
		margin-left: 5upx;
	}

	.goods-item-wrapper {
		background: #fff;
		margin-bottom: 10upx;
		border-radius:10rpx;
		overflow:hidden;
		box-shadow: 0px 0px 5px rgba(7,17,27,.2);
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
	.desc {
		height: 150upx;
		padding: 0 15upx;
	}
	.desc .title {
		height: 50upx;
		line-height: 50upx;
		font-size: 30upx;
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
	.row-price .goods-sales{
		float: right; 
		text-align: right;
	}
	.row-coupon {
		height: 42upx;
		line-height: 42upx;
		font-size: 28upx;
		color: #ff1f1f;
	}
	.row-coupon	.coupon-price{
		width: 50%;
		float: right;
		text-align: right;
		overflow: hidden;
	}
	.row-coupon .coupon-price-left {
		display:inline-block;
		background: #fff;
		color:#ff1f1f;
		min-width:50upx;
		border: 1px solid #ff1f1f;
		text-align: center;
		border-top-left-radius: 10upx;
		border-bottom-left-radius: 10upx;
	}
	.row-coupon .coupon-price-right {
		display:inline-block;
		background:#ff1f1f;
		color:#fff;
		border: 1px solid #ff1f1f;
		border-top-right-radius: 10upx;
		border-bottom-right-radius: 10upx;
	}
	.row-coupon	.quanhou{
		width: 50%;
		float: left;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

</style>
