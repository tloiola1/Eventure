var email = localStorage.getItem("email");
console.log("first: " + email);
var name;
var dob;
var aboutMe; // ????

$.get("/profile/" + email, function (data) {
    console.log(data);
    name = data.name;
    dob = moment(data.dob).format("LL");
    //  Capitlize the name if its nots allready done so
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    name = capitalize(name);
    $("#profile-name").text(name);
    $("#dob").text("DOB: " + dob);

});








