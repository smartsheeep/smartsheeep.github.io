var roan = 0;
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function (event) { //监听设备陀螺仪
        if (-45 < event.beta && event.beta < 45)
            roan = ((event.beta) + 45) / 2;
        $("#blue-flower").css({
            "left": parseInt($('#blue-flower').css("left")) - 5
        });
    });

} else {
    M.toast({
        html: '你的浏览器不支持哦~用移动端试试吧！',
        classes: 'rounded'
    });
}