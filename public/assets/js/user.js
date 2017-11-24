// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".user-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newUser = {
      name: $("#user_name").val().trim(),
      email: $("#user_email").val(),
      password: $("#user_password").val(),
      category: "Soccer"
    };
    // Send the POST request.
    $.ajax({
      url:"/api/create",
      method: "POST",
      data: newUser
    }).then(
      function(newUser) {
        // console.log("User_Form ***************************************");
        // console.log(newUser)
        // Reload the page to get the updated list
        eventToBeDisplay(newUser);
        location.href = "/events";
      }
    );
  });
});
