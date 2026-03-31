let Names = []

function AddName(){
  event.preventDefault();
  let names2 = document.getElementById("value").value
  Names.push(names2);
 console.log(Names)
  document.getElementById("value").value = " ";
}

function Sort(){
  event.preventDefault();
  Names.sort()
  document.getElementById('output').value = Names.join(", ");
}

function Reset(){
  event.preventDefault();
  document.getElementById("value").value = "";
  document.getElementById("output").value = "";
}