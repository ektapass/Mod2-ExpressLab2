const express = require('express');

// Create the Express app
const app = express();
const port = 3000;
app.get('/greeting',function(req,res){
    res.send('hello stranger')
})



app.get('/greeting/:name',function(req,res)  {
    console.log(req.params);
    
    res.send('Wow! hello there ' +   req.params.name);
  });

    
  app.listen(3000, function() {
    console.log('Listening on port 3000');
   });






// app.get('/howdy/:firstName', function(req, res) {
//     console.log(req.params);
//     console.log(req.query);
//     res.send('hello ' + req.query.title + ' ' + req.params.firstName);
//   });