const express = require('express');

// Create the Express app
const app = express();
const port = 3000;

//greeting

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

// tip calculator

app.get('/tip/:total/:tipPercentage', (req, res) => {
	const tip = (req.params.total*req.params.tipPercentage)/100
	res.send(' your tip will be:'+tip)
});
