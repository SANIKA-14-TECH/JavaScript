
  tasks = []
  Dates = []

  function Add(){
  let Input = document.getElementById("task")
  newValue = Input.value
  let DateValue = document.getElementById("date")
  newDateValue = DateValue.value
  tasks.push(newValue)
  Dates.push(newDateValue)
  renderTasks();
  Input.value = ""
  DateValue.value = ""
  }


  //  <div class="col-sm cuStomtxt2">${item.date}</div>

  function renderTasks(){
    let ShowElement = tasks.map((item ,i)=>`
    <div class="row mt-4">
      <div class="col-sm cuStomtxt tasks">${item}</div>
      <div class="col-sm cuStomtxt tasks">${Dates[i]}</div>
      <div class="col-sm cuStomtxt2">
      <button class="btn btn-danger kg-button" onClick="Delete(${i})">Delete</button>
      </div>
    
    </div>
    `).join(" ");
  

    document.getElementById("tasks").innerHTML = ShowElement;
  }


  function Delete(i){
    tasks.splice(i,1);
    renderTasks()
  }