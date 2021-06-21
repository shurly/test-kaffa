let db = [];
//Banco pelo Local Storage
const getDB = () => JSON.parse(localStorage.getItem('list')) ?? [];
const setDB = (db) => localStorage.setItem('list', JSON.stringify(db));

//Cria a tarefa
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

//Limpa as tarefas 
const clearTasks = () => {
    const list = document.getElementById('list');
    while (list.firstChild) {
        list.removeChild(list.lastChild);
    }
}

//Atualiza a tela com novos dados
const render = () => {
    clearTasks();
    const db = getDB();
    db.forEach((task, index) => createTask(task.task, task.status, index));
}

//Insere informação adicionada do input
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

//Botão deleta a tarefa 
const deleteTask = (index) => {
    const db = getDB();
    db.splice(index, 1);
    setDB(db);
    render();
}

//Modifica o status para checado ou não
const updateTask = (index) => {
    const db = getDB();
    db[index].status = db[index].status === '' ? 'checked' : '';
    setDB(db);
    render();
}

//Click que faz ação de modificar checado ou deletar, pegando o index de cada tarefa  
const clickTask = (et) => {
    const el = et.target;
    console.log(el.type);
    if (el.type === 'button') {
        const index = el.dataset.index;
        deleteTask(index);
    } else if (el.type === 'checkbox') {
        const index = el.dataset.index;
        updateTask(index);
    }
}

document.getElementById('newTask').addEventListener('keypress', insertTask);
document.getElementById('list').addEventListener('click', clickTask);

render();




