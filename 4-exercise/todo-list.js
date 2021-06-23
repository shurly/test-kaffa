let db = [];

//Database Local Storage 
const getDB = () => JSON.parse(localStorage.getItem('list')) ?? [];
const setDB = (db) => localStorage.setItem('list', JSON.stringify(db));

//Create Task
const createTask = (tasks, status, index) => {
    const task = document.createElement('label');
    task.classList.add('item');
    task.innerHTML = `
        <input type="checkbox" ${status} data-index=${index}>
        <div>${tasks}</div>
        <input type="button" class="btn btn-sm" value="X" data-index=${index}>  
    `
    document.getElementById('list').appendChild(task);
}

//Update Screen with new data 
const render = () => {
    //Clear Tasks 
    const list = document.getElementById('list');
    while (list.firstChild) {
        list.removeChild(list.lastChild);
    }

    const db = getDB();
    db.forEach((task, index) => createTask(task.task, task.status, index));
}

//Information insert through added input 
const insertTask = (et) => {
    const key = et.key;

    if (key === 'Enter') {
        const db = getDB();
        db.push({ 'task': et.target.value, 'status': '' });
        setDB(db);
        render();
        et.target.value = '';
    }
}

//Action to modify checked status or delete from database, getting the index from each task 
const clickTask = (et) => {
    const el = et.target;
    console.log(el.type);

    //Button delete task 
    if (el.type === 'button') {
        const index = el.dataset.index;
        const db = getDB();
        db.splice(index, 1);
        setDB(db);
        render();
    }

    // Change the status: checked/not checked
    else if (el.type === 'checkbox') {
        const index = el.dataset.index;
        const db = getDB();
        db[index].status = db[index].status === '' ? 'checked' : '';
        setDB(db);
        render();
    }
}

document.getElementById('newTask').addEventListener('keypress', insertTask);
document.getElementById('list').addEventListener('click', clickTask);

render();




