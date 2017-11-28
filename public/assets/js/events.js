// var userId = localstorage.getItem("id");

function displayEvents(){
  if(localStorage.getItem("id") === null){
    console.log("Must Sign In");
    return;
  }
  else{
    $("#id-display").html(localStorage.getItem("id"));
  }
}

function hostEvents(){
  location.href = "/host";
}

function manage(){
	// var id = localStorage.getItem("id");
	// $.ajax({
	// 	url: "/manage",
	// 	method: "GET"
	// }).then(function(data){
 //    location.href = "/manage";
 //  });
}

// <script type="text/javascript">

//   $("#see").on("click", function(){
//     var categ = $(this).data("category");
//     $("#id-display").html(categ);
// })
// </script>