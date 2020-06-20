const {MongoClient, ObjectID} = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'Todo';



const retrieveTodos = (db) => {
    const collection = db.collection('Todos');

    collection.find({}).toArray().then((result) => {
        console.log(`you have ${result.length} todos`);
        console.log(result);
    }).catch(err => console.log(err))
}

MongoClient.connect(url,{ useUnifiedTopology: true }, (err, client) => {
    console.log('connected');
    const db = client.db(dbName);
    retrieveTodos(db,() => {
        client.close();
    })
})