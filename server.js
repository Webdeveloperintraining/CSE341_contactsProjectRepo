const express = require('express');

const mongodb =require('./data/database') ;
const app = express();
 
const port= process.env.PORT|| 3001;
 
app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if(err){
    console.log(err);
  }
});


app.listen(port, () => {
  console.log(`Database is listening and node running on port ${port}`)});