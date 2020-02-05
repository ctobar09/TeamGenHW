const inquirer = require('inquirer');
const fs = require('fs');


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
    console.log(questions)
  

  fs.writeFile('output/team.html', questions, function (err) {
    if (err) throw err;
    console.log('Updated!');
    
  })
});

module.exports = {questions};