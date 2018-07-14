
var chose = document.getElementById("chose");
var first =[];//省
var second = [];//市
var third = [];//区
var selectedIndex = [0,0,0]//默认选中地区
var checked = [0,0,0]//已选选项

function creatList(obj, list){
    obj.forEach(function(item, index, arr){
    var temp = new Object();
    temp.text = item.name;
    temp.value = index;
    list.push(temp);
    // list数组中对象有text和value
    })
  }
//jiangcity中的所有省级name放到list中
creatList(city,first);//省
//根据省级而判断是否生成城市
if(city[selectedIndex[0]].hasOwnProperty('sub')) {
    creatList(city[selectedIndex[0]].sub,second) //市
} else {
    //没有就为空,效果就是不显示
    second = [{text: '', value: 0}];
};
if(city[selectedIndex[0]].sub[selectedIndex[1]].hasOwnProperty('sub')) {
    creatList(city[selectedIndex[0]].sub[selectedIndex[1]],third)//区
} else {
    third = [{text: '',value: 0}];
}
//生成picker对象
var picker = new Picker({
    data:[first,second,third],//分三列
    selectedIndex:selectedIndex,//初始的selectedIndex
    title:'地址选择'//picker上的title
});
//在chose中填入选择结果

picker.on('picker.select',function(selectedVal,selectedIndex){
    //selectedVal指的是first,second,third中的value值,可以用这个来表示选的地点,用以传参
    //这里的selectedVal,selectedIndex分别是数组//感觉这两数组是一致的//乃实际需要的每列的参数
    // 数组每一项代表每列中元素的index
    // first,second,third是分别代表省,市,区的数组
    console.log(selectedVal,selectedIndex);
    var text1=first[selectedIndex[0]].text;
    var text2=second[selectedIndex[1]].text;
    var text3=third[selectedIndex[2]]?third[selectedIndex[2]].text:'';
    chose.innerHTML = text1 + ' ' + text2 + ' ' + text3;
});

picker.on('picker.change',function(index,selectedIndex){
    //传入index和selectedIndex两个数,不是数组
    // index是列,selectedIndex是index
    //index判断是哪列,selectedIndex是每列中的index
    console.log(index,selectedIndex)
    if(index===0) {
        firstChange();
    } else if(index===1) {
        secondChange()
    }    
    function firstChange() {
        //第一列发生变化,2,3列都得重置,23列都是以第一个元素开头的
        second =[];
        third=[];
        checked[0]=selectedIndex;//省的index
        var firstCity = city[selectedIndex];
        if(firstCity.hasOwnProperty('sub')) {
            creatList(firstCity.sub,second);//生成第二列,默认为第一个
            var secondCity = city[selectedIndex].sub[0]
            if(secondCity.hasOwnProperty('sub')) {
                creatList(secondCity.sub,third)//生成第三列,默认为第一个
            } else {
                third = [{text:'',value:0}], //第三列为空
                checked[2]=0 //
            }
        } else {
            second = [{text:'',value:0}] //第二列为空
            checked[1]=0;
            checked[2]=0;
        }
        // 选择省时将所有数据渲染出来
        picker.refillColumn(1,second);
        picker.refillColumn(2,third);
        picker.scrollColumn(1,0);//1代表第二列,0代表第一个
        picker.scrollColumn(2,0);//2代表第三列,0代表第一个
    }
    function secondChange() {
        third=[];
        checked[1]=selectedIndex;
        var first_index =  checked[0];//省
        if(city[first_index].sub[selectedIndex].hasOwnProperty('sub')) {
            var secondCity = city[first_index].sub[selectedIndex];
            creatList(secondCity.sub,third);
            picker.refillColumn(2,third);
            picker.scrollColumn(2,0);
        } else {
            third = [{text:'',value:0}]
        };

    };
});
picker.on('picker.valuechange',function(selectedVal,selectedIndex) {
    console.log(selectedVal);//参数同picker.change
    console.log(selectedIndex);
})
chose.addEventListener('click',function() {
    picker.show();
})

