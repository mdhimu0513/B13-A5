

const loadLessons=()=>{
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications")
    .then((res)=> res.json())
    .then((json)=> displayLesson(json.data));

};
loadLevelWord=(id)=>{
    console.log(id);
    const url= `https://phi-lab-server.vercel.app/api/v1/lab/issues/${id}/words`;
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>displayLevelWord(data));
    
};

const displayLevelWord=(words)=>{
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML="";
}
const displayLesson = (lessons)=>{
 const levelContainer = document.getElementById("level-container");
 levelContainer.innerHTML = "";
for(let lesson of lessons){
    console.log(lesson);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML=`<button onclick="loadLevelWord(${lesson.id})" id="level-container" class="bg-blue-500 text-white px-4 py-2 rounded-lg">All-${lesson.id}</button>
    `;
    levelContainer.appendChild(btnDiv);

}
};
loadLessons();