var email = localStorage.getItem("email");
console.log("first: " + email);
var name;
var dob;
var aboutMe; // ????

$.get("/profile/" + email, function (data) {
    console.log(data);
    name = data.name;
    dob = data.dob;
});










