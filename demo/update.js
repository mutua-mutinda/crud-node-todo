const { MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'Todo';

const updateTodo = (db) => {
    const collection = db.collection('Todos');

    collection.updateOne({"Todo": "Buy Greens"},
    { $set: (
        {"Todo" : "Pratices Node + Mongodb", "Department": "Personal growth", "completed":true}
    )},
    { upsert: false },
    { returnOriginal: false}
    ).then((result) => {
        console.log('successfully updated')
        console.log(result)
    }).catch(err => console.log(err))
}

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    const db = client.db(dbName);
    updateTodo(db, () => {
        client.close();
    })
})