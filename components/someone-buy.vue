<template>
    <view class="someone-buy" :class="showAndHide">
    	<img class="avator" :src="src" alt="">
			<text class="username">{{data[index].virtualUser.userName}}</text>
			<text class="content">{{data[index].description}}</text>
    </view>
</template>

<script>
export default {
    name: 'someone-buy',
    props: {
        datalist: {
            type: Array
        },
				type:{
					type:Number
				}
    },
    data () {
        return {
						showAndHide:"",
						src:'',
						time:null,
						index: 0,
						data: [{
										"virtualUser": {
											"userName": "So***1",
											"md5": "08c284e9da33c8e1d15b5d612191d803419423116"
										},
										"description": "刚刚获得1.16元返利！"
									}, {
										"virtualUser": {
											"userName": "栗****妮",
											"md5": "08bd64864f8a032491d02919b98c8af9e6a438030"
										},
										"description": "刚刚获得2.46元返利！"
									}, {
										"virtualUser": {
											"userName": "恋****梦",
											"md5": "02dc54425120c4f6302fbab9a710a987007367b2f"
										},
										"description": "刚刚获得3.64元返利！"
									}, {
										"virtualUser": {
											"userName": "小****宝",
											"md5": "07206404a647a634ca384b43c6b4d4086d9413215"
										},
										"description": "刚刚获得2.33元返利！"
									}, {
										"virtualUser": {
											"userName": "秋凉***求",
											"md5": "0954df54c1baa4814199e0640dcac9dcd7b6a348b"
										},
										"description": "刚刚获得1.31元返利！"
									}, {
										"virtualUser": {
											"userName": "青与***欣",
											"md5": "0ddc5452512bc4f6202fbcb9a750a989007347b2f"
										},
										"description": "刚刚获得4.83元返利！"
									}, {
										"virtualUser": {
											"userName": "我身***佛",
											"md5": "07206404a247a634cd384543c9b4d2086b9413215"
										},
										"description": "刚刚获得2.20元返利！"
									}, {
										"virtualUser": {
											"userName": "命运***律",
											"md5": "0f206544a94ea434d1384543c2e4d10a607c4b837"
										},
										"description": "刚刚获得2.84元返利！"
									}, {
										"virtualUser": {
											"userName": "老李***田",
											"md5": "07206404a247ac34c6384243c0b4df08679413215"
										},
										"description": "刚刚获得2.35元返利！"
									}, {
										"virtualUser": {
											"userName": "茉****莉",
											"md5": "06c28649d93dc4e1f25b50612171d10d4e3df9338"
										},
										"description": "刚刚获得2.11元返利！"
									}, {
										"virtualUser": {
											"userName": "韶m***c",
											"md5": "0cc28659d93cc4e1825b536121d1d1004e3dc9338"
										},
										"description": "刚刚获得3.17元返利！"
									}, {
										"virtualUser": {
											"userName": "li***1",
											"md5": "0bc28659d933c4e1725b586121c1d1074e3d29338"
										},
										"description": "刚刚获得6.89元返利！"
									}, {
										"virtualUser": {
											"userName": "王再***姣",
											"md5": "04c28649d93ac4e1625b5a612141d1044e3d19338"
										},
										"description": "刚刚获得3.90元返利！"
									}, {
										"virtualUser": {
											"userName": "发威***猫",
											"md5": "0286f4db9c0fb16d6b5ae9d45acab5f28cb40a79b"
										},
										"description": "刚刚获得4.38元返利！"
									}, {
										"virtualUser": {
											"userName": "汉口***雀",
											"md5": "07206404a447ac34cc384f43c8b4dd08689413215"
										},
										"description": "刚刚获得5.59元返利！"
									}, {
										"virtualUser": {
											"userName": "小鲁***-",
											"md5": "0b206544a947a434a1384443c234d107607c7b837"
										},
										"description": "刚刚获得0.56元返利！"
									}, {
										"virtualUser": {
											"userName": "星星***✨",
											"md5": "02c28659d935c4e1d25b51612161d1014e3d89338"
										},
										"description": "刚刚获得2.72元返利！"
									}, {
										"virtualUser": {
											"userName": "囿于***歌",
											"md5": "08c285e9dc33c6e1d15b5a612791d103469423116"
										},
										"description": "刚刚获得2.41元返利！"
									}, {
										"virtualUser": {
											"userName": "lo***花",
											"md5": "08c28649d939c4e1825b546121b1d10d4e3de9338"
										},
										"description": "刚刚获得4.99元返利！"
									}, {
										"virtualUser": {
											"userName": "不识***端",
											"md5": "0cc28659d933c4e1d25b50612181d1004e3d49338"
										},
										"description": "刚刚获得7.98元返利！"
									}],
        }
    },
    components: {
				
    },
		onShow:function(){
			this.int();

		},
		onUnload:function(){
			clearTimeout(this.time);
		},
		onHide:function(){
			clearTimeout(this.time);
		},
    methods: {
			int:function(){
				let _this = this;
				let data = _this.data;
				let count = _this.data.length;
				_this.src = 'https://ts.market.mi-img.com/thumbnail/webp/w66q80/FoundApp/'+_this.data[0].virtualUser.md5;
				setTimeout(()=>{
					_this.showAndHide = 'show';
				},4000)
				_this.time = setInterval(()=>{
					_this.showAndHide = '';
					_this.index < count-1 ? _this.index++ : _this.index=0;
					// console.log(_this.index);
					_this.src = 'https://ts.market.mi-img.com/thumbnail/webp/w66q80/FoundApp/'+_this.data[_this.index].virtualUser.md5;
					setTimeout(()=>{
						_this.showAndHide = 'show';
					},4000)
				},10000)
			}
    }
}
</script>

<style scoped >
  .someone-buy{
		opacity: 0;
		position: fixed;
		top: 180upx;
		left: 30upx;
		z-index:100;
		background: rgba(0,0,0,.6);
		padding: 4upx 10upx;
		border-radius: 30upx;
	}
	.avator{
		display: inline-block;
    width: 40upx;
    height: 40upx;
    border-radius: 40upx;
    background: #666;
    overflow: hidden;
		vertical-align: middle;
	}
	.username,.content{
		font-size: 20upx;
		color: #fff;
		padding-left: 10upx;
		line-height: 48upx;
	}
	.someone-buy.show{
		z-index: 20;
		animation-name: fadeIn; /*动画名称*/
		animation-duration: 6s; /*动画持续时间*/
		animation-iteration-count: 1; /*动画次数*/
		animation-delay: 0s; /*延迟时间*/
	}
	@-webkit-keyframes fadeIn {
		0% {
		opacity: 0; 
		top: 160upx;
		}
		20% {
		opacity: 1; 
		top: 180upx;
		}
		80% {
		opacity: 1; 
		top: 180upx;
		}
		100% {
		opacity: 0; 
		top: 200upx;
		}
	}
</style>
