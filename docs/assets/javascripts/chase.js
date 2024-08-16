let img = document.querySelector('.img');
// 定义小图片的旋转角度
let deg = 0;
// 定义小图片位于网页左侧的位置
let imgx = 0;
// 定义小图片位于网页顶部的位置
let imgy = 0;
// 定义小图片x轴的位置
let imgl = 0;
// 定义小图片y轴的位置
let imgt = 0;
// 定义小图片翻转的角度
let y = 0;
// 定义一个计数器
let index = 0;

window.addEventListener('mousemove', function (event) {
    // 考虑滚动位置的鼠标位置计算
    imgx = event.pageX - img.offsetLeft - img.clientWidth / 2 + 40;
    imgy = event.pageY - img.offsetTop - img.clientHeight / 2;

    // 计算旋转角度
    deg = 360 * Math.atan(imgy / imgx) / (2 * Math.PI);
    index = 0;

    // 判断鼠标位置是否在图片左边，并设置翻转角度
    if (img.offsetLeft < event.pageX) {
        y = -180;
    } else {
        y = 0;
    }
});

setInterval(() => {
    // 设置小图片的旋转和翻转
    img.style.transform = "rotateZ(" + deg + "deg) rotateY(" + y + "deg)";
    index++;

    // 设置小图片的位置和速度，并判断小图片到达鼠标位置时停止移动
    if (index < 50) {
        imgl += imgx / 50;
        imgt += imgy / 50;
    }
    img.style.left = imgl + "px";
    img.style.top = imgt + "px";
}, 10);