const resultsData = require('../data');

class Result {
    constructor(data){
        this.id = data.id;
        this.heading =  data.heading;
        this.url = data.url;
        this.desc = data.desc;
    }

    static get all() {
        const results = resultsData.map(result => new Result(result));
        return results;
    }

    static get random() {
        const randID = Math.floor(Math.random() * resultsData.length);
        console.log(randID)
        return resultsData[randID];
    }

    static search(str) {
        const searchResults = resultsData.filter(result => {
            return result.heading.toLowerCase().includes(str) === true || result.desc.toLowerCase().includes(str) === true;
        })

        return searchResults;
    }

    static findByID(id) {
        try {
            const resultData = resultsData.filter(result => result.id === id)[0];
            const result = new Result(resultData);
            return result;
        } catch (error) {
            throw new Error(`No result with that ID. Error: ${error}`)
        }
    }

}

module.exports = Result;