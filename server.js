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

//magic 8 ball
app.get('/magic/:questionasked',(req,res)=>{
let magic8Ball=["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
"You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes",
 "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now",
  "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no",
  "Outlook not so good", "Very doubtful"]
  const questionAsked= req.params.questionasked
  let randomAnswer = magic8Ball[Math.floor(Math.random()*magic8Ball.length)]
  res.send(questionAsked+ "?"+ `<h1> ${randomAnswer}</h1>`)


}
)


