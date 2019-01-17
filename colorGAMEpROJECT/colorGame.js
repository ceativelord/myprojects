var colors = generateRandomColors(6);
var squares =document.querySelectorAll(".squares");
var colorDisplay= document.getElementById("colorDisplay");
var message= document.querySelector("#message");
var h1 =document.querySelector("h1");
var newColors =document.querySelector("#newColors");
var colorPicked= pickColor();
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
colorDisplay.textContent= colorPicked;

for (var i=0; i < squares.length; i++){
   squares[i].style.backgroundColor = colors[i];
   //add initial colors to squares
   squares[i].addEventListener("click" , function(){
       var clickedColor= this.style.backgroundColor;
       if(clickedColor===colorPicked){
        message.textContent = "CORRECT";
        changeColor(clickedColor);

       }
       else{
        message.textContent ="WRONG";
        this.style.backgroundColor= "#232323";

       }
   });
   
}
function changeColor(color){
    for ( var i =0; i<squares.length; i++){
    
     squares[i].style.backgroundColor = color;
    h1.style.backgroundColor = color;

    }

}
 function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
 

 }
  function generateRandomColors(num){

var arr =[];
for (var i=0; i<num; i++){
  
  arr.push(randomColors());

}

 return arr;
  }



function randomColors(){
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
    return "rgb" +"(" + r + ", " + g + ", " + b + ")" ;



}
newColors.addEventListener("click" , function(){
       changeColor();
       pickColor();
       colorPicked= pickColor();
       colorDisplay.textContent= colorPicked;
   
for (var i=0; i < squares.length; i++){
   squares[i].style.backgroundColor = colors[i];
   

   h1.style.backgroundColor = "#777786";

    

}
   generateRamdomColors();
   
});
easyButton.addEventListener("click" , function(){
     generateRandomColors(3);
     colorDisplay.textContent= colorPicked;


});
hardButton.addEventListener("click" , function(){
     generateRandomColors(6);
     colorDisplay.textContent= colorPicked;


});