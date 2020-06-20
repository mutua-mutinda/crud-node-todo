const { MongoClient, objectID} = require('mongodb')

const url = 'mongodb://localhost:27017/';

const dbName = 'Todo'

const insertTodo = (db) => {
    //get the Todo collection
    const collection = db.collection('Todos');
    const dataField = [
        {Todo: "Finish up assignment", Department: "Commerce", completed: true},
        {Todo: "Enroll units", Department: "Computer science", completed: true},
        {Todo: "Buy meat", Department: "Butchery", completed: false},
        {Todo: "Buy Greens", Department: "Mama mboga", completed: false},
    ]
    //insert Todos
    collection.insertMany(dataField).then((result) => {
        console.log(`you have inserted ${result.insertedCount} Todos`);
        // console.log(result.ops)
    }).catch((err) => {
        console.log(err)
    })    
}

MongoClient.connect(url,{ useUnifiedTopology: true }, (err, client) => {
    console.log('connected')
    const db = client.db(dbName);
    insertTodo(db,() => {
        client.close();
    })
})