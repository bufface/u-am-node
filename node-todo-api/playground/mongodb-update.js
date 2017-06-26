// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59504f4bc53d9f725b143c2b')
  // }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  // }).then((result) => {
  //     console.log(result);
  //   });
  
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59503299e503160cc26d621c')
  }, {
      $set: {
        name: 'Emanuel'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
  }).then((result) => {
      console.log(result);
    });

  // db.close();
});
