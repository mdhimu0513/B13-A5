


const loadLesson=()=>{
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res)=> res.json())
    .then((json) => displayLesson(json.data));
};

const displayLesson = (lesson)=>{
    const levelContainer = document.getElementById("level-container");
      levelContainer.innerHTML = "";
    for(const lesson of lessons){
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML=`<button class="bg-blue-500 text-white px-4 py-2 rounded-lg">All</button>
        `;
        levelContainer.appendChild(btnDiv);
    }


    

};
loadLesson();



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