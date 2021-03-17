/*
var bool=false;
$(".r-bottom").on("click",function () {
    bool=true;
    animation();
    console.log("qwqeqeq")
});
function animation() {
    if(!bool)return;
    requestAnimationFrame(animation);
    if($(document).scrollTop()<=0){
        bool=false;
        return;
    }
    $(document).scrollTop($(document).scrollTop()-80);
}
*/
// 为你推荐版块
var wntjList=document.getElementById("wntjList");
var dpjhList=document.getElementById("dpjhList");
var wntjData=[
    {id:2571489,icon:"2571489.png",title:"依尔婴 yierying 婴儿连体衣服纯棉春秋季男宝宝绅士",desc:"时尚翻领搭配酷酷的领结彰显绅士气质",isSelf:false,newPrice:39.00,oldPrice:79.00,sellNum:91952},
    {id:2778099,icon:"2778099.png",title:"依尔婴 yierying 婴儿连体衣服春秋季纯棉",desc:"条纹卡通图案，宝宝穿起来萌萌哒",isSelf:false,newPrice:39.00,oldPrice:98.00,sellNum:12332},
    {id:2636097,icon:"2636097.png",title:"艾维诺 Aveeno 婴儿宝宝燕麦舒缓润肤乳面霜 可擦脸 141g",desc:"天然燕麦，持久滋润24小时油腻，不含酒精或香料，不会堵塞幼细的毛孔。可以减少因湿疹宝宝的皮肤干燥,特别的温和,适用于新生儿和敏感肌肤的婴儿,可以每天使用。(限定：2019.07-2019.09随机发货)",isSelf:true,newPrice:999.00,oldPrice:79.00,sellNum:12332},
    {id:2675840,icon:"2675840.png",title:" 艾维诺 Aveeno 婴儿宝宝天然燕麦缓解湿疹泡澡粉",desc:"天然燕麦 缓解湿疹 无香低敏",isSelf:false,newPrice:95.00,oldPrice:158.00,sellNum:91952},
    {id:2636097,icon:"2636097.png",title:"艾维诺 Aveeno 婴儿宝宝燕麦舒缓润肤乳面霜 可擦脸 141g",desc:"天然燕麦，持久滋润24小时油腻，不含酒精或香料，不会堵塞幼细的毛孔。可以减少因湿疹宝宝的皮肤干燥,特别的温和,适用于新生儿和敏感肌肤的婴儿,可以每天使用。(限定：2019.07-2019.09随机发货)",isSelf:false,newPrice:999.00,oldPrice:79.00,sellNum:12332},
    {id:2675840,icon:"2675840.png",title:" 艾维诺 Aveeno 婴儿宝宝天然燕麦缓解湿疹泡澡粉",desc:"天然燕麦 缓解湿疹 无香低敏",isSelf:false,newPrice:95.00,oldPrice:158.00,sellNum:91952},
    {id:2636097,icon:"2636097.png",title:"艾维诺 Aveeno 婴儿宝宝燕麦舒缓润肤乳面霜 可擦脸 141g",desc:"天然燕麦，持久滋润24小时油腻，不含酒精或香料，不会堵塞幼细的毛孔。可以减少因湿疹宝宝的皮肤干燥,特别的温和,适用于新生儿和敏感肌肤的婴儿,可以每天使用。(限定：2019.07-2019.09随机发货)",isSelf:false,newPrice:999.00,oldPrice:79.00,sellNum:12332},
    {id:2571489,icon:"2571489.png",title:"依尔婴 yierying 婴儿连体衣服纯棉春秋季男宝宝绅士",desc:"时尚翻领搭配酷酷的领结彰显绅士气质",isSelf:false,newPrice:39.00,oldPrice:79.00,sellNum:91952},
    {id:2636097,icon:"2636097.png",title:"艾维诺 Aveeno 婴儿宝宝燕麦舒缓润肤乳面霜 可擦脸 141g",desc:"天然燕麦，持久滋润24小时油腻，不含酒精或香料，不会堵塞幼细的毛孔。可以减少因湿疹宝宝的皮肤干燥,特别的温和,适用于新生儿和敏感肌肤的婴儿,可以每天使用。(限定：2019.07-2019.09随机发货)",isSelf:true,newPrice:999.00,oldPrice:79.00,sellNum:12332},
    {id:2675840,icon:"2675840.png",title:" 艾维诺 Aveeno 婴儿宝宝天然燕麦缓解湿疹泡澡粉",desc:"天然燕麦 缓解湿疹 无香低敏",isSelf:false,newPrice:95.00,oldPrice:158.00,sellNum:91952}

];

var dpjhData=[
    {
        headImg:"head-myjz.jpg",
        shopName:"蜜芽匠作",
        saleStyle:"拼团",
        shopList:[
            
    {id:2571489,icon:"2571489.png",title:"依尔婴 yierying 婴儿连体衣服纯棉春秋季男宝宝绅士",desc:"时尚翻领搭配酷酷的领结彰显绅士气质",isSelf:false,newPrice:39.00,oldPrice:79.00,sellNum:91952},
    {id:2571489,icon:"2571489.png",title:"依尔婴 yierying 婴儿连体衣服纯棉春秋季男宝宝绅士",desc:"时尚翻领搭配酷酷的领结彰显绅士气质",isSelf:false,newPrice:39.00,oldPrice:79.00,sellNum:91952},
    {id:2571489,icon:"2571489.png",title:"依尔婴 yierying 婴儿连体衣服纯棉春秋季男宝宝绅士",desc:"时尚翻领搭配酷酷的领结彰显绅士气质",isSelf:false,newPrice:39.00,oldPrice:79.00,sellNum:91952},
    {id:2571489,icon:"2571489.png",title:"依尔婴 yierying 婴儿连体衣服纯棉春秋季男宝宝绅士",desc:"时尚翻领搭配酷酷的领结彰显绅士气质",isSelf:false,newPrice:39.00,oldPrice:79.00,sellNum:91952},
    {id:2571489,icon:"2571489.png",title:"依尔婴 yierying 婴儿连体衣服纯棉春秋季男宝宝绅士",desc:"时尚翻领搭配酷酷的领结彰显绅士气质",isSelf:false,newPrice:39.00,oldPrice:79.00,sellNum:91952},
    {id:2778099,icon:"2778099.png",title:"依尔婴 yierying 婴儿连体衣服春秋季纯棉",desc:"条纹卡通图案，宝宝穿起来萌萌哒",isSelf:false,newPrice:39.00,oldPrice:98.00,sellNum:12332},
    {id:2778099,icon:"2778099.png",title:"依尔婴 yierying 婴儿连体衣服春秋季纯棉",desc:"条纹卡通图案，宝宝穿起来萌萌哒",isSelf:false,newPrice:39.00,oldPrice:98.00,sellNum:12332},
    {id:2778099,icon:"2778099.png",title:"依尔婴 yierying 婴儿连体衣服春秋季纯棉",desc:"条纹卡通图案，宝宝穿起来萌萌哒",isSelf:false,newPrice:39.00,oldPrice:98.00,sellNum:12332},
    {id:2778099,icon:"2778099.png",title:"依尔婴 yierying 婴儿连体衣服春秋季纯棉",desc:"条纹卡通图案，宝宝穿起来萌萌哒",isSelf:false,newPrice:39.00,oldPrice:98.00,sellNum:12332},
    {id:2778099,icon:"2778099.png",title:"依尔婴 yierying 婴儿连体衣服春秋季纯棉",desc:"条纹卡通图案，宝宝穿起来萌萌哒",isSelf:false,newPrice:39.00,oldPrice:98.00,sellNum:12332},
       
        ]
    },
    {
        headImg:"head-myjz.jpg",
        shopName:"蜜芽匠作",
        saleStyle:false,
        shopList:[
            {
                id:2942633,
                icon:"2942633.jpg",
                title:"眼罩",
                newPrice:24.9,
                oldPrice:49.9,
                saleStyle2:"99元选5件",
            },
            {
                id:2942633,
                icon:"2942633.jpg",
                title:"眼罩",
                newPrice:24.9,
                oldPrice:49.9
            },
            {
                id:2942633,
                icon:"2942633.jpg",
                title:"眼罩",
                newPrice:24.9,
                oldPrice:49.9,
                saleStyle2:"99元选5件",
            },
            {
                id:2942633,
                icon:"2942633.jpg",
                title:"眼罩",
                newPrice:24.9,
                oldPrice:49.9,
                saleStyle2:"99元选5件",
            },
            {
                id:2942633,
                icon:"2942633.jpg",
                title:"眼罩",
                newPrice:24.9,
                oldPrice:49.9,
                saleStyle2:"99元选5件",
            },
            {
                id:2942633,
                icon:"2942633.jpg",
                title:"眼罩",
                newPrice:24.9,
                oldPrice:49.9,
                saleStyle2:"99元选5件",
            },
            {
                id:2942633,
                icon:"2942633.jpg",
                title:"眼罩",
                newPrice:24.9,
                oldPrice:49.9,
                saleStyle2:"99元选5件",
            },
            {
                id:2942633,
                icon:"2942633.jpg",
                title:"眼罩",
                newPrice:24.9,
                oldPrice:49.9,
                saleStyle2:"99元选5件",
            },
            {
                id:2942633,
                icon:"2942633.jpg",
                title:"眼罩",
                newPrice:24.9,
                oldPrice:49.9,
                saleStyle2:"99元选5件",
            },
        ]
    }
];
// 为你推荐数据
var wntjStyle={
    divWrap:{width:"2.19rem",border:"1px solid #e5e5e5",float:"left",marginTop:"-1px",marginLeft:"-1px",cursor:"pointer"},
    img:{width: "100%"},
    h3:{fontSize:"0.12rem",color:"#222",fontWeight:900,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},
    h4:{fontSize:"0.12rem",color:"#555",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginBottom:"0.08rem"},
    isSelfTrue:{fontSize:"0.11rem",border:"1px solid #d9849a",color:"#d9849a",padding:"0 1px",borderRadius:"2px",lineHight:"0.11rem"},
    isSelfFalse:{fontSize:"0.11rem",border:"1px solid #c2c2c2",color:"#c2c2c2",padding:"0 1px",borderRadius:"2px",lineHight:"0.11rem"},
    divCon:{boxsizing:"border-box",padding:"0.05rem 0.14rem 0.08rem 0.14rem"},
    priceBox:{margin:"0.03rem 0 0.03rem"},
    newSymbol:{fontSize:"0.1rem",color:"#fa4bb4"},
    newPrice:{fontSize:"0.16rem",fontWeight:700,color:"#fa4bb4"},
    oldPrice:{textDecoration:"line-through",color:"#999",fontSize:"0.09rem",marginLeft:"0.04rem"},
    sellNum:{fontSize:"0.11rem",color:"#666"}

};
var dpjhStyle={
    divWrap:{width:"100%",padding:"0.26rem 0.2rem 0.2rem",boxSizing:"border-box",border:"1px solid #e5e5e5",backgroundColor:"#fff",marginBottom:"0.2rem"},
    logoWrap:{width:"100%"},
    logo:{cursor:"pointer",width:"0.78rem",height:"0.78rem",border:"1px solid #f4f4f4",borderRadius:"0.07rem",float:"left"},
    logoImg:{width:"100%",borderRadius:"0.07rem"},
    h3:{cursor:"pointer",fontSize:"0.18rem",color:"#666",lineHeight:"0.8rem",marginLeft:"0.16rem",float:"left"},
    saleStyle:{marginTop:"0.22rem",float:"right",padding:"0.1rem 0.21rem",borderRadius:"0.18rem",fontSize:"0.12rem",color:"#f72283",border:"1px solid #faa8cd"},
    itemWrap:{cursor:"pointer",width:"2.1rem",float:"left",position:"relative"},//width:"1.97rem"
    shopImage:{width:"100%"},
    posiBox:{position:"absolute",top:"1.5rem",textAlign:"center",width:"100%"},
    saleStyle2:{backgroundColor:"#fff",opcity:"0.9",display:"inline-block",padding:"0.06rem 0.1rem",borderRadius:"0.15rem",border:"1px solid #fab0d1",color:"#f7388f"},
    title:{height:"0.4rem",overflow:"hidden",fontSize:"0.14rem",lineHeight:"0.2rem"},
    newPrice1:{fontSize:"0.22rem",fontWeight:"900",color:"#fa4b9b"},
    symbolCNY:{fontSize:"0.11rem",color:"#fa4b9b"},
    oldPrice1:{textDecoration:"line-through",color:"#999",fontSize:"0.13rem"}
};
//创建大版块里的小模块==============================
function creatShopBoardItem(data,style) {
    var itemWrap=document.createElement("div");
    Object.assign(itemWrap.style,style.itemWrap);
    var shopImg=new Image();
    shopImg.src="assets/images/index/"+data.icon;
    Object.assign(shopImg.style,style.shopImage);
    itemWrap.appendChild(shopImg);
    var posiBox=document.createElement("div");
    Object.assign(posiBox.style,style.posiBox);
    var saleStyle2=document.createElement("a");
    saleStyle2.setAttribute("href","#");
    saleStyle2.textContent=data.saleStyle2;
    if(data.saleStyle2){
        Object.assign(saleStyle2.style,style.saleStyle2);
    }
    posiBox.appendChild(saleStyle2);
    itemWrap.appendChild(posiBox);
    var title=document.createElement("h4");
    title.textContent=data.title;
    Object.assign(title.style,style.title);
    itemWrap.appendChild(title);
    var symbolCNY=document.createElement("span");
    symbolCNY.textContent="￥";
    Object.assign(symbolCNY.style,style.symbolCNY);
    itemWrap.appendChild(symbolCNY);
    var newPrice1=document.createElement("i");
    newPrice1.textContent=data.newPrice;
    Object.assign(newPrice1.style,style.newPrice1);
    itemWrap.appendChild(newPrice1);
    var oldPrice1=document.createElement("em");
    oldPrice1.textContent="￥"+data.oldPrice;
    Object.assign(oldPrice1.style,style.oldPrice1);
    itemWrap.appendChild(oldPrice1);
    itemWrap.addEventListener("mouseover",function () {
        shopImg.style.opacity=0.7;
    });
    itemWrap.addEventListener("mouseout",function () {
        shopImg.style.opacity=1;
    });
    itemWrap.obj=data;
    itemWrap.addEventListener("click",clickHandlers);
    return itemWrap;
}



//创建大板块========================================
function creatShopBoard(obj) {
    var divWrap=document.createElement("div");
    divWrap.className="clearfix";
    Object.assign(divWrap.style,dpjhStyle.divWrap);
    var logoWrap=document.createElement("div");
    logoWrap.className="clearfix";
    Object.assign(logoWrap.style,dpjhStyle.logoWrap);
    var logo=document.createElement("div");
    Object.assign(logo.style,dpjhStyle.logo);
    var logoImg=new Image();
    logoImg.src="assets/images/index/"+dpjhData[i].headImg;
    Object.assign(logoImg.style,dpjhStyle.logoImg);
    var h3=document.createElement("h3");
    h3.textContent=dpjhData[i].shopName;
    h3.addEventListener("mouseout",mouseHandler);
    h3.addEventListener("mouseover",mouseHandler);
    Object.assign(h3.style,dpjhStyle.h3);
    var saleStyle=document.createElement("a");
    saleStyle.setAttribute("href","#");
    saleStyle.textContent="正在参加"+dpjhData[i].saleStyle+"活动>";
    Object.assign(saleStyle.style,dpjhStyle.saleStyle);


    logo.appendChild(logoImg);
    logoWrap.appendChild(logo);
    logoWrap.appendChild(h3);
    if(dpjhData[i].saleStyle){
        logoWrap.appendChild(saleStyle);
    }

    divWrap.appendChild(logoWrap);
    for(j=0;j<dpjhData[i].shopList.length;j++){
        var divss=creatShopBoardItem(dpjhData[i].shopList[j],dpjhStyle);
        divWrap.appendChild(divss)
    }
    return divWrap;
}

function mouseHandler(e) {
    if(e.type==="mouseover"){
        this.style.color="#fa4b9b";
    }else if(e.type==="mouseout"){
        this.style.color="#000";
    }
}
//===============================================
for(i=0;i<dpjhData.length;i++){
    var divs=creatShopBoard(dpjhData[i]);
    dpjhList.appendChild(divs)
}
function clickHandlers() {
    location.href="html/details.html?id="+this.obj.id
}










//==================================================
function creatShopItem(obj) {
    var divWrap=document.createElement("div");
    divWrap.className="clearfix";
    Object.assign(divWrap.style,wntjStyle.divWrap);
    var img=new Image();
    img.src="assets/images/index/"+obj.icon;
    Object.assign(img.style,wntjStyle.img);
    divWrap.appendChild(img);

    var divCon=document.createElement("div");
    Object.assign(divCon.style,wntjStyle.divCon);
    var h3=document.createElement("h3");
    h3.textContent=obj.title;
    Object.assign(h3.style,wntjStyle.h3);
    var h4=document.createElement("h4");
    h4.textContent=obj.desc;
    Object.assign(h4.style,wntjStyle.h4);
    var isSelf=document.createElement("span");
    if(obj.isSelf){
        isSelf.textContent="自营";
        Object.assign(isSelf.style,wntjStyle.isSelfTrue);
    }else if(!obj.isSelf){
        isSelf.textContent="非自营";
        Object.assign(isSelf.style,wntjStyle.isSelfFalse);
    }
    var priceBox=document.createElement("div");
    var newSymbol=document.createElement("span");
    var newPrice=document.createElement("i");
    var oldPrice=document.createElement("em");
    var sellNum=document.createElement("span");
    Object.assign(priceBox.style,wntjStyle.priceBox);
    newSymbol.textContent="￥";
    Object.assign(newSymbol.style,wntjStyle.newSymbol);
    newPrice.textContent=obj.newPrice.toFixed(2);
    Object.assign(newPrice.style,wntjStyle.newPrice);
    oldPrice.textContent="￥"+obj.oldPrice.toFixed(2);
    Object.assign(oldPrice.style,wntjStyle.oldPrice);
    sellNum.textContent=Math.floor(Math.random()*5000)+8000+"人已购买";
    Object.assign(sellNum.style,wntjStyle.sellNum);

    priceBox.appendChild(newSymbol);
    priceBox.appendChild(newPrice);
    priceBox.appendChild(oldPrice);

    divCon.appendChild(h3);
    divCon.appendChild(h4);
    divCon.appendChild(isSelf);
    divCon.appendChild(priceBox);
    divCon.appendChild(sellNum);

    divWrap.appendChild(divCon);
    divWrap.title=obj.desc;
    divWrap.addEventListener("mouseover",function () {
        h3.style.color="#fa4b9b";
        img.style.opacity=0.7;
    });
    divWrap.addEventListener("mouseout",function () {
        h3.style.color="#000";
        img.style.opacity=1;
    });
    divWrap.obj=obj;
    divWrap.addEventListener("click",clickHandler);
    return divWrap;
}

for(i=0;i<wntjData.length;i++){
    var div=creatShopItem(wntjData[i]);
    wntjList.appendChild(div)
}

function clickHandler(e) {
    location.href="html/details.html?id="+this.obj.id

}
