const express = require('express');
const bodyParser = require('body-parser');
const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();

module.exports = app;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const v1 = express.Router();
app.use('/api/v1', v1);


v1.put('/people/:id', async (request, response) => {
    let id = request.params.id;
    let body = request.body;
    let res = await peopleService.updatePeople(id, body);
    res === true ? response.sendStatus(200) : response.sendStatus(404);

});

v1.get('/people/:filtre', async (request, response) => {
    console.log(request.params)
    let people = await peopleService.getPeoplefiltered(request.params);
      response.send(request.params);
});

v1.get('/people', async (request, response) => {
    let people = await peopleService.getPeople();
    response.send(people);
});
