<template>
	<view class="page-body" :style="'height:'+height+'px'">
		<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'" :scroll-top="scrollLeftTop" scroll-with-animation>
			<view class="nav-left-item" @click="categoryClickMain(index)" :key="index" :class="index==categoryActive?'active':''"
				v-for="(item,index) in classifyData">
				{{item.name}}
			</view>
		</scroll-view>
		<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation>
			<view v-for="(foods,index) in classifyData" :key="index" class="box">
				<view :id="i==0?'first':''" class="nav-right-item" v-for="(item,i) in foods.foods" :key="i" @click="cart(item.name)">
					<image :src="item.icon" />
					<view>{{item.name}}</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import classifyData from '../../common/classify.data.js';
	export default {
		data() {
			return {
				categoryList: [],
				subCategoryList: [],
				height: 0,
				categoryActive: 0,
				scrollTop: 0,
				scrollLeftTop: 0,
				scrollHeight: 0,
				name: "wkiwi",
				classifyData:classifyData,
				arr:[0,584,1168,1752,2336,2805,3274,3858,4442,4911,5380,5734,6203,6672,7017],
				leftItemHeight: 51,//此处修改也要修改css
				navLeftHeight:0,//左边nav的总高度
				diff: 0,//左边nav的总高度与视口之差
			}
		},
		onShow() {
		},
		onLoad: function () {
			let _this = this
			this.height = uni.getSystemInfoSync().windowHeight ;
			this.navLeftHeight = this.leftItemHeight * classifyData.length;
			this.diff =  this.navLeftHeight - this.height;
			setTimeout(()=> {
				let selectorQuery=uni.createSelectorQuery()
				selectorQuery.selectAll('.box').boundingClientRect(function(rects) {
					let arr = [0];
					let top = 0;
					rects.forEach(function(rect){
	// 					rect.id      // 节点的ID
	// 					rect.dataset // 节点的dataset
	// 					rect.left    // 节点的左边界坐标
	// 					rect.right   // 节点的右边界坐标
	// 					rect.top     // 节点的上边界坐标
	// 					rect.bottom  // 节点的下边界坐标
	// 					rect.width   // 节点的宽度
	// 					rect.height  // 节点的高度
						top += rect.height;
						arr.push(top)
					  })
					  console.log(arr)
					  _this.arr = arr
					}).exec()
			},1000)
		},
		methods: {
			scroll(e) {
				let _this = this
				if(this.timeoutId){
					clearTimeout(this.timeoutId);
				}
				this.timeoutId = setTimeout(function(){ //节流
					_this.scrollHeight = e.detail.scrollTop + _this.height/2;
					for (let i = 0; i < _this.arr.length;i++) {
						let height1 = _this.arr[i];
						let height2 = _this.arr[i+1];
						if (!height2 || (_this.scrollHeight >= height1 && _this.scrollHeight < height2)) {
							_this.categoryActive = i;
							(_this.diff>0) && (_this.scrollLeftTop = Math.round((_this.categoryActive * _this.diff)/(classifyData.length-1)));
							return false;
						}
					}
					_this.categoryActive = 0;
					_this.timeoutId = undefined;
				}, 10)
			},
			categoryClickMain(index) {
				this.categoryActive = index;
				this.scrollTop = this.arr[index]
			},
			cart: function (text) {
				uni.showToast({
					title: text,
					icon: "none",
				})
			}
		},
		components: {
		}
	}
</script>

<style>
	.page-body {
		display: flex;
		background: #fff;
		overflow: hidden;
	}

	.nav {
		display: flex;
		width: 100%;
	}

	.nav-left {
		width: 25%;
		background: #fafafa;
	}

	.nav-left-item {
		height: 100upx;
		border-right: solid 1px #f1f1f1;
		border-bottom: solid 1px #f1f1f1;
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-right {
		width: 75%;
	}
	.box {
		display: block;
		overflow: hidden;
		border-bottom: 20upx solid #f3f3f3;
	}
	.box:last-child {
		border: none;
	}
	.nav-right-item {
		width: 28%;
		height: 220upx;
		float: left;
		text-align: center;
		padding: 11upx;
		font-size: 28upx;
		background: #fff;
	}

	.nav-right-item image {
		width: 150upx;
		height: 150upx;
	}

	.active {
		color: #FF80AB;
		background: #fff;
		border-right: 0;
	}
	::-webkit-scrollbar {/*取消小程序的默认导航条样式*/
   width: 0;
   height: 0;
   color: transparent;
}
</style>
