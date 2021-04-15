// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("upBtn").style.display = "block";
    } else {
        document.getElementById("upBtn").style.display = "none";
    }
}
 
// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(".qrcode").hover(function() {
    $("#qrcode").show()
},
function() {
    $("#qrcode").hide()
});


