// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#userValidate").on("click", function(event) {
    // localStorage.clear();
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var user = {
      email: $("#userEmail").val().trim()
    };
    console.log(user);
    // Send the POST request.
    $.ajax({
      url:"/api/find/user",
      method: "GET",
      data: user
    }).then(
      function(userValidation) {
        // console.log("userValidation ***************************************");
        // console.log(userValidation);
        // localStorage.setItem("id", newUser.id);
        // sessionStorage.setItem("name", newUser.name);
        // $("#name-display").html(localStorage.getItem("id"));
        // location.href = "/eventsToHost";
    });
  });

  $("#camera").on("click", function(){
     $("#canvas").hide();
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');
      var localStream;
      $('#video').attr("autoplay", "true");

      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
              video.src = window.URL.createObjectURL(stream);
              localStream = stream;
          });
      }

      document.getElementById("snap").addEventListener("click", function() {
        
        $("#canvas").show();

        context.drawImage(video, 0, 0, 380, 280);
        $("#video").hide();
        localStream.getVideoTracks()[0].stop();
      });

      document.getElementById("retake").addEventListener("click", function() {
        $("#video").show();
        $("#canvas").hide();
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
              video.src = window.URL.createObjectURL(stream);
              localStream = stream;
          });
      });

  });

  $("#submitpicture").on("click", function(res, callback){
    $.ajax({
      url: "/api/get/img",
      method: "POST",
      data: window
    }).then(function(answer){
      console.log("**********************");
      console.log(answer);
    });
  });

});

//App folder name: socialtvt
//App Key:  3f7p32exzuxysf4
//App Secret: c6stmyg6aydj64g
//token: EtE_0DzV-AcAAAAAAAADHAZ8rRB0huzoKTaJPx8VnxHVQmYH7yzVvVr989u9DFFk