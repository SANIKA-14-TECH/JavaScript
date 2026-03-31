

function countVowels(){
   let res = document.getElementById("exampleInputEmail1").value  
  vowels = "aeiouAEIOU";

let count = 0;
for(let i=0;i<res.length;i++){
  if(vowels.includes(res.charAt(i))){
    count++;
  }
}

document.getElementById("Result").textContent = "vowels counts : " +count;

}


function longestWord(){
  str = document.getElementById("exampleInputEmail1").value
    let res = str.split("  ");
    let longestWord = "";
    for(let i=0;i<str.length;i++){
      if(res[i].length > longestWord.length){
        longestWord = res[i];
      }
    }

    document.getElementById("Result").textContent = longestWord;
}




// count spaces 
function CountSpaces(){
    str = document.getElementById("exampleInputEmail1").value
    let count = 0
    for(let i=0;i<str.length;i++){
      if(str.charAt(i) == " "){
        count++;
      }
    }
     document.getElementById("Result").textContent = count;
}


// function pallindrome
function pallindrome(){
    str = document.getElementById("exampleInputEmail1").value
    let res  = ""
    for(let i = str.length;i>=0;i--){
        res += str.charAt(i);
    }

  

      document.getElementById("Result").textContent = str == res ?"true":"false"
}


// reverse caharacter 
function Reverse(){
   str = document.getElementById("exampleInputEmail1").value
   let res = ""
   for(let i = str.length ; i>= 0 ; i--){
      res += str.charAt(i);
   }
     document.getElementById("Result").textContent = res;
}


// function to lower case
function LowerCase(){
  str = document.getElementById("exampleInputEmail1").value
  let res = ""
  for(let i=0;i<str.length;i++){
    res += str.charAt(i).toLowerCase();
  }

   document.getElementById("Result").textContent = res;
}


// 
function Capitalize(){
   str = document.getElementById("exampleInputEmail1").value
   let res = "";
   for(let i=0;i<str.length;i++){
    res += str.charAt(i).toUpperCase();
   }
   document.getElementById("Result").textContent = res;
}


function TiltleCase(){
   let  str = document.getElementById("exampleInputEmail1").value
   let res = "";
   for(let i=0;i<str.length;i++){
    if(i == 0 || str.charAt(i - 1) == " " ){
      res += str.charAt(i).toUpperCase();
    }else{
      res += str.charAt(i).toLowerCase();
    }
   }
    document.getElementById("Result").textContent = res;
}


function Extract(){
  let str = document.getElementById("exampleInputEmail1").value
  let res = "";
  for(let i=0;i<str.length;i++){
    if(str.charAt(i) == " "){
      break;
    }
    res+=str.charAt(i);
 }

 document.getElementById("Result").textContent = res ;
}



function Hypen(){
  let str = document.getElementById("exampleInputEmail1").value
  let res = ""
  for(let i=0;i<str.length;i++){
      res += str.charAt(i).replace(" " ,"_");
  }
  document.getElementById("Result").textContent = res;
}

function CountLines(){
  let str = document.getElementById("exampleInputEmail1").value;
  let count = 0;
  for(let i=0;i<str.length;i++){
    if(str.charAt(i) === "\n"){
      count++;
    }
  }

  if(str.length > 0){
    count++;
  }

  document.getElementById("Result").textContent = count;
}


function Sorted(){
  let str = document.getElementById("exampleInputEmail1").value
  let res =  str.split(" ").sort().join(" ")
  document.getElementById("Result").textContent = res;
}