const fs = require('fs');
const path = require('path');


function counter (fileJson){
    const pathToFile = path.join(__dirname, "counterHome.json");
    const counterPage = JSON.parse(fs.readFileSync(pathToFile, "utf-8"));

    counterPage.count = counterPage.count + 1;

    fs.writeFileSync(pathToFile, JSON.stringify(counterPage, null, 2));
    return counterPage
}

module.exports = { counter };

