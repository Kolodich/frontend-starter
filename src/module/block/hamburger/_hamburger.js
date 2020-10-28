const hamburgers = document.querySelectorAll(".hamburger");
if(hamburgers.length>0){
 hamburgers.forEach(hamburger => {
  hamburger.addEventListener("click", ()=>{
   hamburger.classList.toggle("hamburger_active");
  })
 });
}