numbers = [];

function AddNumber(){
  event.preventDefault()
  let num = document.getElementById("UserInput").value ;
  numbers.push(num)
  console.log(numbers)

 document.getElementById("UserInput").value = " " ;
}


function Even(){
  event.preventDefault();
  let even = numbers.filter((i) => i %2 === 0)
  document.getElementById("even").value = even.join(", ")
}

function Odd(){
  event.preventDefault();
  let odd  = numbers.filter((num) => num % 2 !== 0);
  document.getElementById("odd").value = odd.join(", ")
}

function Reset(){
  event.preventDefault();
  document.getElementById("even").value = " "
  document.getElementById("odd").value = " "
}