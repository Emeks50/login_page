var attempt = 2; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    const user = {
        firstName: "Emeka",
        lastName: "Okafor",
        email: "emekaicthub@gmail.com",
        password: "1234",
        age: 50,
        eyeColor: "blue"
    };




    if (username == user.email && password == user.password) {
        alert("Login successfully");
        window.location = "success.html"; // Redirecting to other page.
        return false;
    } else {
        attempt--;
        alert("incorrect username or password!");
        // Disabling fields after 3 attempts.
        //if (attempt == 0) {

        return false;
        //}
    }
}