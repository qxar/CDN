/*$data={
    id2571489:{
        shopName:"依尔婴童装旗舰店",    //店铺名
        classify:"连身衣/爬服/哈衣",   //分类
        brand:"依尔婴 yierying",       //商标
        place:"中国",                 //产地
        tradeName:"婴儿连体衣服纯棉春秋季男宝宝绅士满月0-3-6个月1周岁新生儿礼服",//商品名
        desc:"时尚翻领搭配酷酷的领结彰显绅士气质",   //商品描述
        onsale:"99元选3件",    //促销
        showImg:[
            "6.png",
            "7.png",
            "8.png",
            "9.png",
            "5.png"
        ],
        newPrice:39.00,
        olgPrice:79.00,

        color:[         //可选
            "6.png",
            "7.png"
        ],
        size:[          //规格
            "66cm",
            "80cm",
            "90cm",
            "73cm",
            "59cm"
        ],
        scroe:5,        //评价
        Referrals:601   //推荐
    }
};*/

$id=location.search.split("?")[1].split("=")[1];
$ids="id"+$id;
console.log($ids);

/*$("#secondClass").text($data[$ids].classify).attr("href","#");
$("#thirdClass").text($data[$ids].brand);
$("#fourthClass").text($data[$ids].tradeName);
$("#bigImg").attr("src","https://cdn.jsdelivr.net/gh/qxar/CDN/mia/assets/images/details/"+$ids+"/"+$data[$ids].showImg[0]);
$("#tradeName").text($data[$ids].tradeName);
$(".brand").text($data[$ids].brand).attr("href","#");
$("#desc").text($data[$ids].desc);

for(i=0;i<$data[$ids].showImg.length;i++){
    creatSmallImg();
}
function  creatSmallImg() {
}
function creatElem(type,style,parent) {
    var elem=document.createElement(type)
}*/
$style={
    //主图下方展示小图样式
    smallBox:
        {
            width:"0.74rem",
            height:"0.74rem",
            float:"left",
            boxSizing:"border-box",
            border:"1px solid #f4f4f4",
            padding:"0.02rem",
            marginRight:"0.08rem"
        },
    //可选选框样式
    colorBox:
        {
            width:"0.45rem",
            height:"0.45rem",
            float:"left",
            boxSizing:"border-box",
            border:"1px solid #b5b5b5",
            padding:"0.02rem",
            marginRight:"0.08rem",
            marginBottom:"0.08rem",
            position:"relative",
            cursor:"pointer"
        },
    // 规格选框样式
    size:
        {
            padding:"0.08rem",
            float:"left",
            boxSizing:"border-box",
            border:"1px solid #b5b5b5",
            marginRight:"0.08rem",
            position:"relative",
            cursor:"pointer",
            fontSize:"0.09rem",
            color:"#666666"
        },
    //选中样式
    select:
        {
            width:"0.16rem",
            height:"0.16rem",
            background:"url('https://cdn.jsdelivr.net/gh/qxar/CDN/mia/assets/images/smallIco.png') no-repeat -50px -100px",
            position:"absolute",
            bottom:0,
            right:0,
            display:"none"
        }
};
/*function creatElem(type,style,parent) {
    return parent.append($(type).css(style))
}*/
//JQ加载Josn
$.getJSON("https://cdn.jsdelivr.net/gh/qxar/CDN/mia/assets/js/data.json",function (data) {
    $s=data[$ids];
    $("#secondClass").text($s.classify).attr("href","#");
    $("#thirdClass").text($s.brand);
    $("#fourthClass").text($s.tradeName);
    $("#bigImg").attr("src","https://cdn.jsdelivr.net/gh/qxar/CDN/mia/assets/images/details/"+$ids+"/"+$s.showImg[0]);
    $("#tradeName").text($s.tradeName);
    $(".brand").text($s.brand).attr("href","#");
    $("#desc").text($s.desc);
    //创建主图下方的展示小图
    for(i=0;i<$s.showImg.length;i++){
        /*$div=creatElem("<div></div>",$style.small,$(".small"));
        $smallImg=new Image();
        $smallImg.attr("src","https://cdn.jsdelivr.net/gh/qxar/CDN/mia/assets/images/details/"+$ids+"/"+$s.showImg[i]);
        $("<div></div>").append($smallImg)
        console.log($div)*/
        $div=$("<div></div>").css($style.smallBox);
        $div.attr("num",i);
        if(i===$s.showImg.length-1)$div.css({marginRight:0});
        $smallImg=new Image();
        $smallImg.setAttribute("src","https://cdn.jsdelivr.net/gh/qxar/CDN/mia/assets/images/details/"+$ids+"/"+$s.showImg[i]);
        $smallImg.style="width:100%";
        $div.on("mouseenter",mouseHandler).on("mouseleave",mouseHandler);
        $div.append($smallImg);
        if($s.showImg.length-1)$(".small").append($div);
    }
    $("#newPrice").text($s.newPrice.toFixed(2));
    $("#oldPrice").text($s.oldPrice.toFixed(2));
    if($s.onsale){
        $("#youhui").css({display:"block"});
        $("#quan").text($s.onsale);
        $("#quanTxt").text($s.onsale);
    }
    if($s.baoyou)$("#baoyou").text($s.baoyou);
    //创建“可选”项的选框
    for(i=0;i<$s.color.length;i++){
        $colorBox=$("<div></div>").css($style.colorBox);
        $colorBox.attr({"num":i,name:"color"});
        if(i===$s.color.length-1)$colorBox.css({marginRight:0});
        $colorImg=new Image();
        $colorImg.setAttribute("src","https://cdn.jsdelivr.net/gh/qxar/CDN/mia/assets/images/details/"+$ids+"/"+$s.color[i]);
        $colorImg.style="width:100%";
        $colorBox.on("mouseenter",mouseHandler1).on("mouseleave",mouseHandler1);
        $colorBox.append($colorImg);
        $select=$("<span></span>").css($style.select);
        if(i===0)$select.css({display:"block"});
        $colorBox.append($select);
        $("#color").append($colorBox);
    }
    //创建“规格”项的选框
    if($s.size){
        $("#size").css({display:"block"});
        for(i=0;i<$s.size.length;i++){
            $sizeList=$("<div></div>").css($style.size);
            $sizeList.attr({"num":i,name:"size"});
            if(i===$s.size.length-1)$sizeList.css({marginRight:0});
            $sizeList.on("mouseenter",mouseHandler2).on("mouseleave",mouseHandler2);
            $select=$("<span></span>").css($style.select);
            if(i===0)$select.css({display:"block"});
            $sizeList.text($s.size[i]);
            $sizeList.append($select);
            $("#sizeList").append($sizeList);
        }
    }

    //给所有“可选”选框加点击事件，判断点击对象并设置“点击样式”，且让其他未点击取消“点击样式”
    $("[name='color']").click(function(){
        var v=this.getAttribute("num");
        Object.assign(this.style,$style.color);
        Object.assign(this.lastElementChild.style,{display:"block"});
        $("[name='color']").each(function(){
            if(this.getAttribute("num")!==v){
                Object.assign(this.lastElementChild.style,{display:"none"})
            }
        });
    });
    //给所有“规格”选框加点击事件，判断点击对象并设置“点击样式”，且让其他未点击取消“点击样式”
    $("[name='size']").click(function(){
        var val=this.getAttribute("num");
        Object.assign(this.style,$style.color);
        Object.assign(this.lastElementChild.style,{display:"block"});
        $("[name='size']").each(function(){
            if(this.getAttribute("num")!==val){
                Object.assign(this.lastElementChild.style,{display:"none"})
            }
        });
    });










});


//鼠标移入移出改变边被侦听对象样式
//主图下方的展示小图
function mouseHandler(e) {
    if(e.type==="mouseenter"){
        Object.assign(this.style,{border:"1px solid #f450a2"});
        // $("#bigImg").attr("src","https://cdn.jsdelivr.net/gh/qxar/CDN/mia/assets/images/details/"+$ids+"/"+$s.showImg[this.getAttribute("num")]);//使用不同组的图片
        $("#bigImg").attr("src",this.firstElementChild.src);//使用同一组图片
    }else if(e.type==="mouseleave"){
        Object.assign(this.style,{border:"1px solid #f4f4f4"});
    }
}
//"可选"
function mouseHandler1(e) {
    if(e.type==="mouseenter"){
        Object.assign(this.style,{border:"1px solid #f450a2"});
    }else if(e.type==="mouseleave"){
        Object.assign(this.style,{border:"1px solid #b5b5b5"});
    }
}
//"规格"
function mouseHandler2(e) {
    if(e.type==="mouseenter"){
        Object.assign(this.style,{border:"1px solid #f450a2",color:"#f450a2"});
    }else if(e.type==="mouseleave"){
        Object.assign(this.style,{border:"1px solid #b5b5b5",color:"#000"});
    }
}
//计数按钮（原生js）

var numMinus=document.getElementById("numMinus");
var numAdd=document.getElementById("numAdd");
var numChange=document.getElementById("numChange");


numMinus.addEventListener("click",function () {
    if(Number(numChange.textContent)<=2) {
        numChange.textContent = 1;
        numMinus.style.background = "url('https://cdn.jsdelivr.net/gh/qxar/CDN/mia/assets/images/smallIco.png') no-repeat 0 -150px";
    }else {
        numChange.textContent = Number(numChange.textContent) - 1;

        numAdd.style.background = "url('https://cdn.jsdelivr.net/gh/qxar/CDN/mia/assets/images/smallIco.png') no-repeat -50px -150px";
    }
});

numAdd.addEventListener("click",function () {

    if(Number(numChange.textContent)>=98) {
        numChange.textContent = 99;
        numAdd.style.background = "url('https://cdn.jsdelivr.net/gh/qxar/CDN/mia/assets/images/smallIco.png') no-repeat -150px -150px";
    }else {
        numChange.textContent=Number(numChange.textContent)+1;
        numMinus.style.background ="url('https://cdn.jsdelivr.net/gh/qxar/CDN/mia/assets/images/smallIco.png') no-repeat -100px -150px";
    }




});