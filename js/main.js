$(function () {
  console.log('hello');
  count = 0;
  wordsArray = ["engage", "teach", "entertain"];
  setInterval(function () {
    count++;
    $("#word").fadeOut(400, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
    });
  }, 3000);
});
