// function displayEvents(_newUser){
// 	console.log("************************");
//   $("#name-display").html(sessionStorage.getItem("name"));
// };

function displayEvents(){
  if(sessionStorage.getItem("name") === null){
    console.log("Must Sign In");
    return;
  }
  else{
    console.log(sessionStorage.getItem("name"));
  }
}

function hostEvents(){
  if(sessionStorage.getItem("name") === null){
    console.log("Must Sign In");
    return;
  }
  else{
    console.log(sessionStorage.getItem("name"));
  }
}
