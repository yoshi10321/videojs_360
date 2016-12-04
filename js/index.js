// var player = videojs('example-video');
var player = videojs('videojs-panorama-player', {}, function () {
    window.addEventListener("resize", function () {
        var canvas = player.getChild('Canvas');
        canvas.handleResize();
    });
});

// player.play();

player.panorama({
    clickAndDrag: true,
    callback: function () {
      player.play();
    }
});