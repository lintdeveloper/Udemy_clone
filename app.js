const express = require('express'),
      mongoose = require('mongoose'),
      methodOverride = require('method-override'),
      morgan = require('morgan'),
      bodyParser = require('body-parser');

const app = express();

app.use(morgan('common'));
mongoose.connect('mongodb://localhost/udemy_clone', {
    useNewUrlParser: true
});

bodyParser.urlencoded({extended: true});

app.get('/', (req, res)=>{
    res.send('Welcome');
});

app.listen(3000, ()=>{
    console.log("App is on port 3000");
})