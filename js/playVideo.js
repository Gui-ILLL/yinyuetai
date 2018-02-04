

// 获取页面传入的值并播放指定的视频

var url = decodeURIComponent(window.location.search);
var srcUrl = url.split("=")[1];
document.getElementById("myvideo").src="../res/"+srcUrl;


// 当点击右侧的菜单栏时，通过play_showed类结合css突出选中的菜单效果
// 点击后被点击的对象滑动到顶端，并将对应的视频路径传入到video标签
// 让浏览器再次获取视频并播放


$(".playContent .playmenu li").click(function () {
    if(!$(this).hasClass("play_showed")) {
        $('.playContent .playmenu ul').animate({
            scrollTop: $(this).offset().top - $('.playContent .playmenu ul').offset().top
            + $('.playContent .playmenu ul').scrollTop()
        }, 500);

        $(".playContent .playmenu .play_showed").removeClass("play_showed");
        $(this).addClass("play_showed");

        var src = "../res/mv"+($(this).index()+1)+".mp4";
        $("#myvideo").attr("src",src);
        var sourceDom = $("<source src=\""+ src +"\">");
        $("#myvideo").append(sourceDom);
        $("#myvideo")[0].play();
    }
})