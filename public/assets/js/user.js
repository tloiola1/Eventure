// Make sure we wait to attach our handlers until the DOM is fully loaded.
// sessionStorage.clear();
$(function() {
  $(".user-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newUser = {
      name: $("#user_name").val().trim(),
      email: $("#user_email").val(),
      password: $("#user_password").val()
    };
    // Send the POST request.
    $.ajax({
      url:"/api/create/user",
      method: "POST",
      data: newUser
    }).then(
      function(newUser) {
        // console.log("User_Form ***************************************");
        console.log(newUser);
        // sessionStorage.setItem("id", newUser.id);
        // sessionStorage.setItem("name", newUser.name);
        // $("#name-display").html(sessionStorage.getItem("name"));
        location.href = "/events";
    });
  });
});