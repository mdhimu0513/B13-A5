console.log("Hello World!");



document.getElementById("login-btn").addEventListener("click", function() {
    const userInput = document.getElementById("input-user").value;
    // const inputUser = userInput.value;
    console.log(userInput);

    const pinInput = document.getElementById("input-pin").value;
    // const inputPin = pinInput.value;
    console.log(pinInput);



    if (userInput === "admin" && pinInput === "admin123") {
        alert("Login successful!");

        // window.location.replace("/home.html");
        window.location.assign("/home.html");

    }else {
        alert("Login failed! Please check your username and password.");
        return;
    }
});