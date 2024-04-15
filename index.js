let taskList  = [['task1','1/02/2024'],['task2','2/02/2024']]
displayTask()
function addTask(){
    let taskName = document.querySelector('#taskName').value;
    let dateField = document.querySelector('#dateField').value;
    let taskField = [taskName,dateField];
    taskList.push(taskField);
    console.log(taskList)
    document.querySelector('#taskName').value='';
    document.querySelector('#dateField').value='';
    displayTask();
}

function deleteTask(i){
    taskList.splice(i,1);
    console.log(i);
    console.log(taskList);
    displayTask();
}

function displayTask() {
    let newHtml = '';
    for (let i = 0; i < taskList.length; i++) {
        newHtml += `
        
            <span>${taskList[i][0]}</span>
            <span>${taskList[i][1]}</span>
            <button class="deleteButton" onclick="deleteTask(${i})">Delete</button>
        `;
    }
    document.querySelector('.taskListClass').innerHTML = newHtml;
}