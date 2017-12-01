// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".user-form").on("submit", function(event) {
    localStorage.clear();
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
        // console.log(newUser);
        localStorage.setItem("id", newUser.id);
        // sessionStorage.setItem("name", newUser.name);
        // $("#name-display").html(localStorage.getItem("id"));
        location.href = "/events";
    });
  });
});