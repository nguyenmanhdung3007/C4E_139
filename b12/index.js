
const taskList = document.getElementById('taskList');
const inputTask = document.getElementById("taskInput");
// const inputTask = document.getElementsByName

function displaytask() {

    taskList.innerHTML = "";
    
    console.log(taskList);
}

function addTask() {
   const tasks = inputTask.value.trim();

   if (tasks) {
    localStorage.setItem('task', JSON.stringify(tasks));

    displaytask();
    
   } else {
    alert("hãy nhập task");
   }
}
    