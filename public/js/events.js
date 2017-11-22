
$(document).ready(function() {


  $("#events").on("click", function(event){

  	console.log("*************************");


		var userData = {
		name: $("#user_name").val(),
		email: $("#user_email").val(),
		password: $("#user_password").val()

		};
		
    	console.log(userData);




    // $.ajax({
    //   url: "/api/create/user",
    //   method: "POST",
    //   data: userData
    // }).then(function(user){
    //   console.log(user);
    // });
  });
});

