const express = require('express'),
      mongoose = require('mongoose'),
      methodOverride = require('method-override'),
      engine = require('ejs-mate'),
      morgan = require('morgan'),
      secret = require('./config/secret'),
      bodyParser = require('body-parser');

const app = express();

app.use(morgan('common'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

mongoose.connect(secret.database, {
    useNewUrlParser: true
});

require('./routes/main')(app);

app.listen(secret.port, ()=>{
    console.log("App is on port " + secret.port);
})