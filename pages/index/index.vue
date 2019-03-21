<template>
	<view class="page-body">
		<back-top></back-top>
		<view class="someone-buy">
			<someone-buy :type = "1"></someone-buy>
		</view>
		<view class="search-wrapper">
			<view class="search" >
				<view class="uni-icon uni-icon-search"></view>
				<view class="placeholder">输入您需要的商品名称</view>
			</view>
		</view>
		<view class="swiper-wrapper">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item class="swiper-item" v-for="(item,index) of banner" :key="index" @click="subject(item)">
					<img :src="item.cms_image" >
				</swiper-item>
				<swiper-item class="swiper-item">
					<img src="http://img.kiwifruits.cn/index/lunbo-1.jpg" >
				</swiper-item>
			</swiper>
		</view>
		<view class="marquee-box">
			<view class="marquee-title">独家快报</view>
			<view class="marquee">欢迎来到【独家折扣】,这里每天汇总最新购物优惠券,实时更新优惠券信息,让您享受白菜价网购的快感,先领优惠券再下单享受折上折,各种大额优惠券让您领到手软,更有购物反独家币活动与代理分销活动呦！</view> 
		</view>
		<view class="banner">
			<view class="left" @click="channel('淘抢购')" ><img src="http://img.kiwifruits.cn/index/taoqianggou.jpg" mode="widthFix"></view>
			<view class="right">
				<view class="top"   @click="channel('聚划算')" ><img src="http://img.kiwifruits.cn/index/juhuasuan.jpg" mode="widthFix"></view>
				<view class="bottom">
					<view class="bottom-left"  @click="channel('每日上新')" ><img src="http://img.kiwifruits.cn/index/newgoods.jpg" mode="widthFix"></view>
					<view class="bottom-right" @click="channel('9快9包邮')" ><img src="http://img.kiwifruits.cn/index/9kuai9.jpg" mode="widthFix"></view>
				</view>
			</view>
		</view>
		<view class="scroll-wrapper">
			<view class="title">
				<view class="h1-title">大家都在领</view>
			</view>
			<scroll-view-x :goodslist="deserveList"></scroll-view-x>
		</view>
		<view class="title">
			<view class="h1-title">每日精选</view>
			<text class="fr">每15分钟更新</text>
		</view>
		<goods-list :goodslist="goodslist"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list.vue';
	import scrollViewX from '../../components/scroll-view-x.vue';
	import someoneBuy from '../../components/someone-buy.vue';
	import backTop from '../../components/back-top.vue';
	import goodsData from '../../common/goodsData.js';
	export default {
		data() {
			return {
				goodslist:[], //商品数据
				refreshing: false, //初次加载标志位
				fetchPageNum: 1, //页码
				inviteCodeMask:false ,//是否弹出绑定邀请码提示框
				userinfo:null,//用户信息
				banner:[],//专题banner
				deserveList:[],//大家都在领
			}
		},
		onShow() {
			
		},
		onLoad() {
			this.goodslist = goodsData;
			this.deserveList = goodsData.slice(0,12);
		},
		onReachBottom() {
			uni.showToast({
				title: "我也是有底线的",
				icon: "none",
			})
		},
		onPullDownRefresh() {

		},
		computed: {

		},
		methods: {
			channel(text){
				uni.showToast({
					title: text,
					icon: "none",
				})
			}
		},
		components: {
			goodsList,
			someoneBuy,
			scrollViewX,
			backTop
		}
	}
</script>

<style scoped>
	.page-body {
		width: 750upx;
		overflow: hidden;
		font-size: 30upx;
		background: #f1f1f1;
	}
	.someone-buy{
		
	}
	.search-wrapper {
		position: absolute;
		z-index: 10;
		top: 15upx;
		left: 50upx;
		width: 550upx;
		height: 50upx;
		line-height: 50upx;
		padding: 10upx 50upx;
		border: 1px solid #f1f1f1;
		border-radius: 50upx;
		background: rgba(255,255,255,.8);
	}
	.search {
		color: #888;
		font-size: 30upx;
		display: flex;
	}
	.uni-icon {
		flex: 0 0 60upx;
	}
	.placeholder {
		flex: 1;
	}
	.swiper {
		width: 750upx;
		height: 313upx;
	}
	.swiper-item {
		width: 750upx;
		display: block;
	}
	.swiper-item img {
		width: 750upx;
		display: block;
		height: 313upx;
	}
	.title {
		height: 100upx;
		background: #fff;
	}
	.h1-title {
		display: inline-block;
		height: 50upx;
		width: 150upx;
		line-height: 50upx;
		margin: 25upx 0;
		border-top-right-radius: 50upx;
		border-bottom-right-radius: 50upx;
		padding: 0 20upx;
		background:linear-gradient(to right,#ff8300,#ff5100);
		color: #fff;
		font-size: 30upx;
		box-shadow: 5px 10px 20px rgba(255,81,0,.4);
	}
	.title .fr {
		float: right;
		line-height: 100upx;
		margin-right: 30upx;
		font-size:20upx;
		color: #ccc;
	}
	.banner {
		width: 750upx;
		height: 430upx;
		overflow: hidden;
		display: flex;
	}
	.banner img {
		width: 100%;
	}
	.banner>.left {
		flex: 4;
		/* margin-right: 10upx; */
		border-right: 2px solid #f2f2f2;
		overflow: hidden;
	}
	.banner>.right {
		flex: 7;
	}
	.right .top{
		width: 100%;
		/* margin-bottom: 7upx; */
		border-bottom: 2px solid #f2f2f2;
		overflow: hidden;
	}
	.right .bottom{
		display: flex;
		width: 100%;
	}
	.right .bottom .bottom-left{
		flex: 6;
		/* margin-right: 5upx; */
		overflow: hidden;
		border-right: 1px solid #f2f2f2;
	}
	.right .bottom .bottom-right{
		flex: 6;
		/* margin-left: 5upx; */
		/* border-left: 1px solid #f2f2f2; */
		overflow: hidden;
	}
	.mask{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: rgba(7, 17, 27, 0.5);
		z-index: 499;
	}
	.marquee-box{
		width: 100%;
		overflow: hidden;
		position: relative;
		background: #fff;
		margin: 8upx 0;
	}
	.marquee-title{
		position:absolute;
		padding:10upx 20upx;
		color: #ff5100;
		top:0;
		left:0;
		z-index: 3;
		background: #fff;
		font-size: 24upx;
	}
	.marquee{
		padding:10upx 20upx;
		color: #000;
		display: inline-block;
		white-space: nowrap;
		animation: 20s wordsLoop linear infinite normal;
		font-size: 24upx;
	}
	@keyframes wordsLoop {
		0% {
			transform: translateX(750upx);
			-webkit-transform: translateX(750upx);
		}
		100% {
			transform: translateX(-100%);
			-webkit-transform: translateX(-100%);
		}
	}
	.scroll-wrapper{
		height:525upx;
		margin: 8upx 0;
		background: #fff;
	}
	.scroll-title{
		
	}

</style>
