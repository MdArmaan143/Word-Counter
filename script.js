let textbox = document.querySelector("#textbox");
let char = document.querySelector("#char");
let word = document.querySelector("#word");


textbox.addEventListener("input",function(){
   let text = this.value;
   let character = text.length;

   char.innerHTML = character; 
    text = text.trim();
   let words = text.split(" ");
   let cleanList = words.filter(function(elm){
    return elm != "";
   })
   word.innerHTML = cleanList.length;


})
