const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5945b25bf63f93840a1bab74')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59458902c394c6804dd902b4')
  }, {
    $set: {
      name: 'HimchanOrigin'
    },
    $inc : {
      age: 1
    }
  }, {
    returnOriginal: 'HimchanYoon22'
  }).then((result) => {
    console.log(result);
  });



  //db.close

});
