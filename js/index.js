(function() {

  function update() {

    /*--fetch time--*/
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes
    seconds = (seconds < 10 ? "0" : "") + seconds;
    /*--update clock--*/
    //$("#clockholder .clock").text(hours + ":" + minutes + ":" + seconds);
    $("#clockholder .clock").text(seconds);

    /*--return rgb value--*/
    var red = Math.round(parseInt((hours / 24) * 255)).toString(16);
    var green = Math.round(parseInt((minutes / 60) * 255)).toString(16);
    var blue = Math.round(parseInt((seconds / 60) * 255)).toString(16);

    red = (red < 10 ? "0" : "") + red;
    green = (green < 10 ? "0" : "") + green
    blue = (blue < 10 ? "0" : "") + blue;

    /*--update backdrop color--*/
    document.body.style.backgroundColor =
      "#" + red + green + blue;

    /*--calculate brightness--*/
    var luminescence =
      ((0.299 * red) + (0.587 * green) + (0.114 * blue));
    //*--set text color--*/
    if (showTime) {
      //$("#clockholder .clock").text(hours + ":" + minutes + ":" + seconds).fadeIn();
      $("#clockholder .clock").text(hours + ":" + minutes + ":" + seconds).fadeIn();
    }
    if (!showTime) {
      $("#clockholder .clock").text((red + green + blue).toUpperCase()).fadeIn();
    }
  }
  setInterval(update, 500, 400);
  update(0);

  /*initialize clock*/
  var showTime = true;
  document.body.style.fontSize = "190px";
  $(".hex-btn").fadeTo(400, 0.5);
  $(".clock-btn").fadeTo(400, 1.0);

  /*add clock button*/
  $(".clock-btn").click(function() {
    if (!showTime) {
      showTime = true;
      $(".hex-btn").fadeTo(400, 0.5);
      $(".clock-btn").fadeTo(400, 1.0);
    }
  });

  /*add hex button*/
  $(".hex-btn").click(function() {
    if (showTime) {
      showTime = false;
      $(".clock-btn").fadeTo(400, 0.5);
      $(".hex-btn").fadeTo(400, 1.0);
    }
  });

});
