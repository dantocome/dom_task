document.addEventListener("DOMContentLoaded",()=>{
   const elementTotoggle = document.getElementById("elementTotoggle");
   const toggleButton = document.getElementById("toggleButton");

   toggleButton.addEventListener("click",()=>{
    if(elementTotoggle.style.textDecoration=="none"){
        elementTotoggle.style.textDecoration = "line-through";
        // toggleButton.classList.toggle("mybtn");
    }else{
        elementTotoggle.style.textDecoration = "none";
    }

   });
});