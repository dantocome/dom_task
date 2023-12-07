document.addEventListener("DOMContentLoaded",()=>{
//    const elementTotoggle = document.getElementById("elementTotoggle");
//    const toggleButton = document.getElementById("toggleButton");

//    toggleButton.addEventListener("click",()=>{
//     if(elementTotoggle.style.textDecoration=="none"){
//         elementTotoggle.style.textDecoration = "line-through";
//         // toggleButton.classList.toggle("mybtn");
//     }else{
//         elementTotoggle.style.textDecoration = "none";
//     }

//    });
});

document.addEventListener("DOMContentLoaded", ()=>{
    const to_do = document.querySelector(".to_do");
    to_do.addEventListener("Done", (event)=>{
        event.preventDefault();
        myTodoList();
    })
})

function myTodoList(){
    const elementTotoggle = document.getElementById("elementTotoggle");
    const toggleButton = document.getElementById("toggleButton");
    if(elementTotoggle.style.textDecoration=="none"){
        elementTotoggle.style.textDecoration = "line-through";
        toggleButton.classList.add("mybtn");
    }else{
        elementTotoggle.style.textDecoration = "none";
    }

   
}