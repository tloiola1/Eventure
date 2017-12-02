// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#userValidate").on("click", function(event) {
    // localStorage.clear();
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var user = {
      email: $("#userEmail").val().trim()
    }
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
});
console.log(window.location.href);
// var canvas = document.getElementById('canvas');
// var context = canvas.getContext('2d');
// if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//     navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
//         video.src = window.URL.createObjectURL(stream);
//     });
// }
// document.getElementById("snap").addEventListener("click", function() { 
//   context.drawImage(video, 0, 0, 500, 300);
//   $("#video").hide();
//   $("#snap").hide();
//   console.log(video.src);
// });