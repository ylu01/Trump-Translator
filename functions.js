/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//flags
var hasImg = 0;
function handle(e){
        if(e.keyCode === 13){
            e.preventDefault(); // Ensure it is only this code that rusn
            var text;
          
//document.getElementById("trump").src="trump.jpg";    //document.getElementById("input").innerHTML = document.getElementById("search").value;
          
text = document.getElementById("search").value;
var arr = text.split(" ");
var newArr = [];
var yourtext;
yourtext= document.createElement("p");
yourtext.setAttribute("id", "text");
document.body.appendChild(yourtext);
document.getElementById("update").innerHTML = "What you typed: " + document.getElementById("search").value + "<br>" + "What Donald Trump would have said: "+ "<br>";
          
for(var count = 0; count < arr.length; count++){
  if(arr[count] === "is" || arr[count] === "the" || arr[count] === "The" || arr[count] === "Is" || arr[count] === "by" || arr[count] === "By" || arr[count] === "A" || arr[count] === "a" || arr[count] === "am" || arr[count] === "Am"|| arr[count] === "AM" || arr[count] === "Chinese" || arr[count] === "chinese"|| arr[count] === "are" || arr[count] === "Are" || arr[count] === "My" || arr[count] === "my" || arr[count] === "I" || arr[count] === "i"){
   if(arr[count][arr[count].length-1] === "."){
     newArr.push(arr[count] + ".");
   }
   else if(arr[count][arr[count].length-1] === ","){
     newArr.push(arr[count] + ",");
   }
   else{
     newArr.push(arr[count]);
   }
}            
else if(arr[count][arr[count].length-2] + arr[count][arr[count].length-1] === "ed"){                           newArr.push("Chinad");
}
else if(arr[count][arr[count].length-3] + arr[count][arr[count].length-2]+arr[count][arr[count].length-1] === "ed."){ 
  newArr.push("Chinad.");
}
else if(arr[count][arr[count].length-3] + arr[count][arr[count].length-2]+arr[count][arr[count].length-1] === "ed,"){
  newArr.push("Chinad,");
}                               
else if(arr[count][arr[count].length-3] + arr[count][arr[count].length-2] + arr[count] [arr[count].length-1] === "ing"){
   newArr.push("Chinaing");
}
 else if(arr[count]
[arr[count].length-4] + arr[count][arr[count].length-3] + arr[count] [arr[count].length-2] + arr[count][arr[count].length-1] === "ing,"){
   newArr.push("Chinaing,");
}
 else if(arr[count][arr[count].length-4] + arr[count][arr[count].length-3] + arr[count] [arr[count].length-2] + arr[count][arr[count].length-1] === "ing."){
   newArr.push("Chinaing.");
}                              
else if(arr[count][arr[count].length-1] === ","){
   newArr.push("China,");          
    }
else if(arr[count][arr[count].length-1] === "."){
  newArr.push("China.");
}  
else{
  newArr.push("China");
}
}

//I HAVE to use document.getElementById because append will keep adding onto the text, which would be the wrong result. 
 var final = '';
 final = newArr.join(" ");
 var final1 = '"' + final + '"';
 if(hasImg === 0){
    var newImg = document.createElement("img");
    newImg.src = "trump.jpg";
    newImg.setAttribute("id", "trump");
    document.getElementById("img").appendChild(newImg);
    document.getElementById("reply").innerHTML = final1;
    hasImg = 1; //now the has image flag says yes.
  }
  else{
    document.getElementById("reply").innerHTML = final1;
    }
    }
}
/////////////////////////////////////
function trans(){
   var text;
   
          text = document.getElementById("search").value;
          var arr = text.split(" ");
          var newArr = [];
var yourtext;
yourtext= document.createElement("p");
yourtext.setAttribute("id", "text");
document.body.appendChild(yourtext);
document.getElementById("update").innerHTML = "What you typed: " + document.getElementById("search").value + "<br>" + "What Donald Trump would have said: "+ "<br>";

  
          for(var count = 0; count < arr.length; count++){
            if(arr[count] === "is" || arr[count] === "the" || arr[count] === "The" || arr[count] === "Is" || arr[count] === "by" || arr[count] === "By" || arr[count] === "A" || arr[count] === "a" || arr[count] === "am" || arr[count] === "Am"|| arr[count] === "AM" || arr[count] === "Chinese" || arr[count] === "chinese"|| arr[count] === "are" || arr[count] === "Are" || arr[count] === "My" || arr[count] === "my" || arr[count] === "I" || arr[count] === "i"){
              newArr.push(arr[count]);
            }
            else if(arr[count][arr[count].length-2] + arr[count][arr[count].length-1] === "ed"){
                               newArr.push("Chinad");
                               }
            else if(arr[count][arr[count].length-3] + arr[count][arr[count].length-2] + arr[count] [arr[count].length-1] === "ing"){
                               newArr.push("Chinaing");
                               }
                               
            else{
              newArr.push("China");
              
            }
          }


          
          var final = '';
          final = newArr.join(" ");
          
           var final1 = '"' + final + '"';
 //document.getElementById("reply").innerHTML = final1;
//document.getElementById("trump").src="trump.jpg";  

  if(hasImg === 0){
    var newImg = document.createElement("img");
    newImg.src = "trump.jpg";
    newImg.setAttribute("id", "trump");
    document.getElementById("img").appencChild(newImg);
    document.getElementById("reply").innerHTML = final1;
    hasImg = 1; //now the has image flag says yes.
  }
  else{
    document.getElementById("reply").innerHTML = final1;
    }
  

 //document.getElementById("reply").innerHTML = final1;
//the rabbit jumped over the freaking wall 
}

