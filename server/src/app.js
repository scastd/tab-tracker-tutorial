const express = require('express');
const bodyParser = require('body-parser'); // Process JSON easily
const cors = require('cors'); // Easily parse JSON
const morgan = require('morgan'); // Any client can hit our server

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello world!'
  });
});


app.listen(process.env.PORT || 8081);
