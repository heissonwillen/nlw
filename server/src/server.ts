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

app.post('/users', (request, response) => {
  const user = {
    name: "Heisson",
    email: "heisson@heisson.com"
  };

  return response.json(user);
});

app.listen(3333)
