const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'Todo';


const deleteTodos = (db) => {
    const collection = db.collection('Todos');
    
    collection.deleteMany({ }).then((res) => {
        console.log(`you have successfully deleted ${res.deletedCount} todos`);
    }).catch(err => console.log(err));
}

MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
    console.log('connected');
    const db = client.db(dbName);
    deleteTodos(db, () => {
        client.close();
    })
})