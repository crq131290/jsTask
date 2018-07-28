// var myscroll; //myscroll是全局变量，可以在任意地方调用
// function loaded(){
//            myscroll=new IScroll(".food-left",{            
//                 scrollbars: true,
//                 bounce: false,
//                 mouseWheel:true,
//                 click:true         
//            });
//            console.log( myscroll)
//         }
// window.addEventListener("DOMContentLoaded",loaded,false);//dom加载事件



// onload事件调用
var myscroll;
function loaded() {
    setTimeout(function(){
        myscroll = new IScroll(".food-left",
                        {            
                            scrollbars: true,
                            bounce: false,
                            mouseWheel:true,
                            click:true,
                            momentum:false        
                        });
        console.log(myscroll);
    },1000)
}
window.addEventListener("load",loaded,false)
// 这种情况下iScroll会在页面资源（包括图片）
// 加载完毕100ms之后得到初始化，这应该是一种比较安全的调用iScroll的方式。
// 出现滑动屏幕时，整个页面滑动的兼容性问题，解决办法如下：
// document.addEventListener('touchmove', function (e) {
//      e.preventDefault(); console.log("滑动")
//     }, false);
// 配置参数
//     hScroll                 false 禁止横向滚动 true横向滚动 默认为true
// vScroll                 false 精致垂直滚动 true垂直滚动 默认为true
// hScrollbar            false隐藏水平方向上的滚动条
// vScrollbar            false 隐藏垂直方向上的滚动条
// fixedScrollbar      在iOS系统上，当元素拖动超出了scroller的边界时，滚动条会收缩，设置为true可以禁止滚动条超出
//                           scroller的可见区域。默认在Android上为true， iOS上为false
// fadeScrollbar  　  false 指定在无渐隐效果时隐藏滚动条
// hideScrollbar  　  在没有用户交互时隐藏滚动条 默认为true
// bounce            　启用或禁用边界的反弹，默认为true
// momentum     　 启用或禁用惯性，默认为true，此参数在你想要保存资源的时候非常有用
// lockDirection       false取消拖动方向的锁定， true拖动只能在一个方向上（up/down 或者left/right）

// 通用方法
// refresh     在DOM树发生变化时，应该调用此方法

setTimeout(function () { myScroll.refresh(); }, 0); //未定义？？
