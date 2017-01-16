"use strict";

import * as tasks from './tasks.controller';
import http from 'http';
import express from 'express';
import bodyparser from 'body-parser';



var app = express();
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json()); 

var server = http.createServer(app);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/tasks/new', tasks.create);

app.get('/tasks/', tasks.show);

app.get('/tasks/:id', tasks.show);

app.delete('/tasks/:id', tasks.cancel);


app.application = server.listen(3000, '0.0.0.0', function() {
    console.log('Express server listening on %d', 3000);
  });

exports = module.exports = app;

