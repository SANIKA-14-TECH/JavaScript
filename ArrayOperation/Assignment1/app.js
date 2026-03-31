marks = [];

function AddMark(){
  event.preventDefault();
  let UserInput = document.getElementById("UseInput").value;
  console.log(UserInput)
  marks.push(UserInput);
  
   document.getElementById("UseInput").value = "" 

}
 


function Calculate(){
  event.preventDefault()
  let total = 0;
  let highest = marks[0];
  let lowest = marks[0];

  let avg =0

  for(let i=0;i<marks.length;i++){
   total+=marks[i] * 1;
  

  if(marks[i] > highest){
     highest = marks[i];
  }

  if(marks[i] < lowest){
    lowest = marks[i];
  }

   avg = total / marks.length;
}

document.getElementById("total").textContent = "Total Marks : " + total;

document.getElementById("avg").textContent = "Avearge Marks : "+ avg

document.getElementById("high").textContent = "Highest Marks : " + highest

document.getElementById("low").textContent = "lowest Marks : " + lowest
}



function Reset(){
  event.preventDefault();
  marks = []
  document.getElementById("total").textContent = "Total marks :"
  document.getElementById("avg").textContent = "Avearge Marks:"
  document.getElementById(high).textContent = "Highest Marks:"
  document.getElementById(low).textContent = "Lowest Marks:"
}