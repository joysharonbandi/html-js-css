// let count =0;

// const tasks=[];
// const taskInput =document.getElementById('taskInput');
// const addBtn =document.getElementById('addBtn');
// const taskContainer =document.getElementById('taskContainer');

// function addTask() {

//     // count++;
//     // button.textContent =count;
//     const taskText = taskInput.value.trim();
//     createTaskElement({
//         text: taskText
//     })
    
// }

// function createTaskElement(task) {
//     const taskDiv = document.createElement('div');
//     console.log("inside")
//     taskDiv.textContent =task.text;
//     taskDiv.className="task-item"
//     tasksContainer.appendChild(taskDiv);
// }

// addBtn.addEventListener('click', addTask);







const textInput =document.getElementById('taskInput');
const addBtn=document.getElementById("addBtn")
const tasksContainer=document.getElementById("tasksContainer")


function addTask(){
    const value=textInput.value
    textInput.value=""

    createTaskElement(value)
    console.log(value,"value")
}

function createTaskElement (task) {
    const taskDiv = document.createElement('div');

    taskDiv.className="task-item"
    taskDiv.textContent=task
    tasksContainer.appendChild(taskDiv)

}

addBtn.addEventListener("click",addTask)