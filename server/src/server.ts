import express from 'express';
// import * as express from 'express'

const app = express();

app.get('/users', (request, response) => {
  console.log("Users listing");

  response.json([
    "Hisson",
    "Willen",
    "Esteves",
    "Lima"
  ]);
});

app.listen(3333)
