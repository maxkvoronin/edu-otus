const express = require('express');
const app = express();

app.get('/person/:action', (req, res) => {

  if (req.params.action === 'create') {
    console.log(`name:${req.query.name}, age:${req.query.age}`);
  }
  else {
    console.log('person');
  }
 
});

app.listen(8080);