var playedIndex = 0;
var nextIndex = 0;
var timer;


// 将每个导航标签和栏目的对象存入二维数组中

var lead=[
    [$(".lead div").eq(0),$("#fri")],
    [$(".lead div").eq(1),$("#fun")],
    [$(".lead div").eq(2),$("#hot")],
    [$(".lead div").eq(3),$("#now")],
    [$(".lead div").eq(4),$("#Vrank")],
    [$(".lead div").eq(5),$("#self")],
    [$(".lead div").eq(6),$("#bet")],
    [$(".lead div").eq(7),$("#like")],
];

//这里是导航栏的特效
// 1.点击导航栏时，页面会跳转到元素的位置
// 2.将现在突出的栏清空，将点击栏的突出（使用showedclass结合css样式表实现效果）

    $(".lead div").click(function () {
        $("html,body").animate({scrollTop: lead[$(this).index()][1].offset().top}, 700);
        $(".lead .showed").removeClass("showed");
        $(this).addClass("showed");
    })

// 当页面翻动时根据页面的高度实时的调整导航栏，使对应的小标签突出

$(window).scroll(function(){
    for(var i=0;i<8;i++)
    {
        if($(window).scrollTop()<=540) {
            i--;
            break;
        }
        if(i<7&&$(window).scrollTop()>=lead[i][1].offset().top&&$(window).scrollTop()<=lead[i+1][1].offset().top)
            break;
    }
    i++;
    if(i<0)
        i=0;
    else if(i>7)
        i=7;

    if(i!=$(".lead .showed").index()){
        $(".lead .showed").removeClass("showed");
        lead[i][0].addClass("showed");
    }
})


//小飞人的特效
// 当页面滑动到指定位置以下时（1000），小飞人从下方出现
// 点击小飞人时，页面自动回到顶部，同时小飞人飞向顶端消失，再回到底部隐藏

var fly=$(".flyboy");


$(window).scroll(function(){
    if(parseInt(fly.css("top"))==-120)
    {
        fly.css("top","100%");
    }
    if($(window).scrollTop()>=1000)
    {
        if(parseInt(fly.css("top"))>=$(window).height()) {

            fly.animate({
                "top": "75%"
            }, 500)
        }
    }
    else {
        fly.stop(true, true);
        if(parseInt(fly.css("top"))<$(window).height()&&parseInt(fly.css("top"))>0) {
            fly.animate({
                "top": "100%"
            }, 500);
        }
    }
})

fly.click(function () {
    $("html,body").animate({scrollTop:0}, 700);
    fly.animate({
        "top": "-120px"
    }, 500)
})



//轮播栏的特效
// 没有点击时，每隔3000毫秒自动切换到下一张图片，并通过played类结合css设置文字的特效
// 当鼠标悬停在某一文字时，当前图片淡出，指定的图片出现

function play(){
    clearTimeout(timer);
    if(playedIndex==9)
           nextIndex=0;
       else
           nextIndex=playedIndex+1;
       carousel_flash(playedIndex,nextIndex);
       playedIndex++;
       if(playedIndex>=10)
       {
           playedIndex=0;
       }
    timer=setTimeout("play()",3000);
}
setTimeout("play()",3000);

$(".carousel_menu a").mouseenter(function () {
    clearTimeout(timer);
    var activeIndex = $(".carousel_menu .played").index();
    playedIndex=$(this).index();
    if(activeIndex!=playedIndex)
    {
        carousel_flash(activeIndex,playedIndex);
    }
})

$(".carousel_menu").mouseleave(function () {
    setTimeout("play()",3000);
})

function carousel_flash(played,next) {
    $(".carousel img").eq(played).stop(true);
    $(".carousel img").eq(next).stop(true);
    $(".carousel img").eq(played).animate({"opacity":0},800);
    $(".carousel img").eq(next).animate({"opacity":1},800);
    $(".carousel_menu .played").removeClass("played");
    $(".carousel_menu a").eq(next).addClass("played");
}


