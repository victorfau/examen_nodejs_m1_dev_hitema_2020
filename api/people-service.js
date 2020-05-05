const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        // To be implemented!
        let personIndex = this.peoples.indexOf(this.peoples.filter(person => person.id = id))
        if (personIndex === null)
            return false
        this.peoples[personIndex] = people;
        fs.writeFile(__dirname + '/people.json', JSON.stringify(this.peoples), function writeJSON(err) {
            if (err) return false;
        });
        return true
    }
    
    getPeople() {
        return this.peoples;
    }
}
