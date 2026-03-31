arr = ["audi", "bmw" ,"Thar" , "Honda city"];

function Search(){
  event.preventDefault();
  let UseInput =  document.getElementById("UserInput").value ;
  let found = false;
  for(let i=0;i<arr.length;i++){
    if(arr[i].toLowerCase() === UseInput){
      document.getElementById("output").textContent = "found : " + arr[i];
      found = true
      break
    }
  }

  if(!found){
    document.getElementById("output").textContent = "Not found  " 
  }
}