# 独家折扣APP模板

> A uni-app project

# 更新历史

2019-07-09 18:14
更新在初次进入页面，只滑动右边部分，未点击左部分按钮情况下，点击第一项，并不能使得右部分滚回顶部，问题是scrollTop初始值，与点击第一项计算的0相同，所以页面就不会刷新。
``` bash
原代码为 this.scrollTop = this.arr[index]
修改为this.scrollTop == this.arr[index] ? this.scrollTop = this.scrollTop+1 : this.scrollTop = this.arr[index]
```

2019-06-27 16:44
更新部分开发者子分类数据过少不能占满一屏,增加解决方案，解决最后一项分类内容过少无法定位到该分类BUG


2019-05-14 11:48
更新部分开发者分类数据为后台异步获取，添加回调注释与调用方法


2019-04-03 10:40
更新适配此页为tab页，且去除无用参数


2019-04-02 17:40
更新延迟问题，在onReady DOM渲染后获取dom节点信息
# 效果演示

[查看完整版请戳这里](http://down.kiwifruits.cn)



##使用说明

目前demo是以屏幕1/2处为校验，如你的每一种分类内容较少，请修改为屏幕顶部为校验，

``` bash
_this.scrollHeight = e.detail.scrollTop + _this.height/2;
修改为
_this.scrollHeight = e.detail.scrollTop;

```

数据太少造成左分类无法拉到最后一项，可修改css使得每一个分类的内容区域min-height为屏幕高度

异步获取数据的请将进行一下修改
``` bash
onReady() {
	//this.getHeightList();
},
created(){
	//如果你的分类数据为后台异步获取请	将下方代码放置你的数据成功回调中
	this.$nextTick(()=>{
		this.getHeightList();
	})
},
```

##部分截图事例

<img src="https://raw.githubusercontent.com/wkiwi/wkiwi-djzk/master/demo.png" width="365" />
<img src="https://raw.githubusercontent.com/wkiwi/wkiwi-djzk/master/demo2.png" width="365" />
<img src="https://raw.githubusercontent.com/wkiwi/wkiwi-djzk/master/demo3.png" width="365" />
<img src="https://raw.githubusercontent.com/wkiwi/wkiwi-djzk/master/demo4.gif" width="365" />
<img src="https://raw.githubusercontent.com/wkiwi/wkiwi-djzk/master/demo5.png" width="365" />
