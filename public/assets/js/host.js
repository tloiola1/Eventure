// Make sure we wait to attach our handlers until the DOM is fully loaded.
// sessionStorage.clear();
$(function() {
  $(".host-event-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var userId = $("#user_id").val().trim();
    var name = $("#event_name").val().trim();
    var category = $("#category").val().trim();
    var description = $("#description").val().trim();

    var newEvent = {
      userId,
      name,
      category,
      description
    };
    // Send the POST request.
    $.ajax({
      url:"/api/create/event",
      method: "POST",
      data: newEvent
    }).then(
      function(_newEvent) {
        // sessionStorage.setItem("id", newUser.id);
        // sessionStorage.setItem("name", newUser.name);
        // $("#name-display").html(sessionStorage.getItem("name"));
        location.href = "/";
    });
  });
});