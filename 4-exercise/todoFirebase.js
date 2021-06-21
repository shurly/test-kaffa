firebase.initializeApp(config);


const collection = 'todo';

let database = firebase.firestore();



function addTasksDB(task, callback){
    database.collection(collection).add(task).then(function (docInsert){
        console.log('Sucesso', docInsert.id);
        callback(docInsert.id);
    }).catch(function(error){
        console.log('error', error);
        callback(false, error);
    })

}

function dataUpdate(callback){
    database.collection(collection).onSnapshot(callback);
}