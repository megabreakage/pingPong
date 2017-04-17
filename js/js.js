
$(document).ready(function() {
  $("#userInput form").submit(function(event) {

    var arr = [];
    var num = parseInt($("input#number").val());

    for(var i=1; i<=num; i++){
      arr.push([i]);
    }

    for(var j = 0; j < arr.length; j++){

      if (arr[j]%3 === 0 && arr[j]%5 === 0) {
        $(".result").append("<li>PingPong</li>");
      }
      else if (arr[j]%5 === 0) {
        $(".result").append("<li>Pong</li>");
      }
      else if (arr[j]%3 === 0){
        $(".result").append("<li>Ping</li>");
      }
      else {
        $(".result").append("<li>"+arr[j]+"</li>");
      }
    }

    $(".footer").show();
    // $("#output").show();

    event.preventDefault();
  });
});
