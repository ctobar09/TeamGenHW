const inquirer = require('inquirer');
const fs = require('fs');
const api = require('./api');

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "list",
            name: "role",
            message: "What is your role in the company?",
            choices: ["engineer", "intern", "manager"]
        }
    ])
    .then(questions => {
        const result = {
            user: api.getUser(questions.email)
            .then((data) => {
            }),
            
        }
        return result
        })
        .then(user => {
            fs.writeFile('output/team.html', JSON.stringify(data), function (err) {
                if (err) throw err;
                console.log('Updated!');

            })
        });

// module.exports = { questions };

// console.log(questions)