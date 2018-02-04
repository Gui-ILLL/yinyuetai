
// 板块一的左右移动效果
var pi=1;
$(".after").click(function () {
    pi++;
    if (pi <= 3)
    {
        $(this).parent().find(".inner").animate({
            "left": "-=1450px"
        }, 1000);
        if (pi == 2)
            $(this).parent().find(".before").css("display", "block");
        if (pi == 3)
            $(this).parent().find(".after").css("display", "none");
    }
    else {
        pi = 3;
    }
})

$(".before").click(function () {
    pi--;
    if (pi >= 1)
    {
        $(this).parent().find(".inner").animate({
            "left": "+=1450px"
        }, 1000);
        if (pi == 2)
            $(this).parent().find(".after").css("display", "block");
        if (pi == 1)
            $(this).parent().find(".before").css("display", "none");
    }
    else {
        pi = 3;
    }
})


// 板块一中小图片的移动效果
$(".x_before").click(function () {
    $(this).parent().find(".x_next").stop(true,true);
    $(this).parent().find(".x_next").css("left","470px");
    $(this).parent().find(".x_next").css("z-index","3");
    $(this).parent().find(".x_next").animate({
          "left": "-=470px"
      },500);
     var now=$(this).parent().find("span:not(.x_next)");
    now.animate({
        "left": "-=470px"
    },500);
    $(this).parent().find(".x_next").removeClass("x_next");
     now.addClass("x_next");
})

$(".x_after").click(function () {
    $(this).parent().find(".x_next").stop(true,true);
    $(this).parent().find(".x_next").css("left","-470px");
    $(this).parent().find(".x_next").css("z-index","3");
    $(this).parent().find(".x_next").animate({
        "left": "+=474px"
    },500);
    var now=$(this).parent().find("span:not(.x_next)");
    now.animate({
        "left": "+=470px"
    },500);
    $(this).parent().find(".x_next").removeClass("x_next");
    now.addClass("x_next");
})



// 版块三中鼠标悬停效果
$(".partition_three li div").mouseenter(function () {
    if(! $(this).hasClass("p3_played")){
        $(this).parent().find(".p3_played").removeClass("p3_played");
        $(this).addClass("p3_played");
    }
})


// 版块四中鼠标悬停效果
var imgUrl=["../images/音悦台首页/11精品悦单模块/a1.jpg","../images/音悦台首页/11精品悦单模块/a2.jpg","../images/音悦台首页/11精品悦单模块/a3.jpg",
    "../images/音悦台首页/11精品悦单模块/a4.jpg","../images/音悦台首页/11精品悦单模块/a5.jpg","../images/音悦台首页/11精品悦单模块/a6.jpg"];
var p4_user=[
            ["../images/音悦台首页/11精品悦单模块/b1.jpg","新沙洞扛把子","5.0","26"],
            ["../images/音悦台首页/11精品悦单模块/b2.jpg","新沙洞扛把子","4.0","24"],
            ["../images/音悦台首页/11精品悦单模块/b3.jpg","我是一粒米","12.0","36"],
            ["../images/音悦台首页/11精品悦单模块/b4.jpg","小丸子_","9.0","16"],
            ["../images/音悦台首页/11精品悦单模块/b5.jpg","小丸子_","3.0","28"],
            ["../images/音悦台首页/11精品悦单模块/b6.jpg","你和我的距离","1.0","15"]
        ];
$(".partition_four li").mouseenter(function () {
    var index=$(this).index();
    if(index!=6)
        $(this).parents().find(".bigimg").css({"display":"block","left":((index-1)*250)+"px"});
    else
        $(this).parents().find(".bigimg").css({"display":"block","left":((index-2)*250)+"px"});
    $(this).parents().find(".bigimg img+img").attr("src",imgUrl[index-1]);
    $(this).parents().find(".bigimg div img").attr("src",p4_user[index-1][0]);
    $(this).parents().find(".bigimg span").text(p4_user[index-1][1]);
    $(this).parents().find(".bigimg p").text(p4_user[index-1][2]+"万");
    $(this).parents().find(".bigimg p+p").text("收录："+p4_user[index-1][3]+"首");
})

$(".partition_four .bigimg").mousemove(function () {
    $(this).parents().find(".bigimg").css("display","block");
})

$(".partition_four .bigimg").mouseleave(function () {
    $(this).parents().find(".bigimg").css("display","none");
})