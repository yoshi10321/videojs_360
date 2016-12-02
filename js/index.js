// var player = videojs('example-video');
var player = videojs('videojs-panorama-player');

// player.play();

player.panorama({
    clickAndDrag: true,
    callback: function () {
      player.play();
    }
});