const title = document.querySelector(".title");
const layout01 = document.querySelector(".layout01");
const layout02 = document.querySelector(".layout02");
const layout03 = document.querySelector(".layout03");

function close(){
   if(layout01.style.display == "block") {
      title.style.display = "none"
   } else if(layout02.style.display == "block") {
      title.style.display = "none"
   } else if(layout03.style.display == "block") {
      title.style.display = "none"
   } else{
      title.style.display = "block";
   }
}
setInterval(function(){
   close();
},0)