const api = require("../api.js")


class Employee 
{
    constructor(name, id, role, title) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.role = 'Employee';
    }

    getName(){
       name = this.name;
    }

    getTitle(){
        title = this.title;
    }

    getID(){
        return this.id;
    }

    getEmail(){
       return this.email;

    }
    getRole(){      
        return this.role;
    }
  
    };

    class Manager extends Employee {
        constructor(name, id, role, title) {
          super(name, id, role, title);
          this.officeNum = officeNum;
        }
        getRole(){
        
            return (questions.name("role"));
        }
      }

    class Engineer extends Employee {
        constructor(name, id, role, title) {

        }

    //    getUser();
    }
 


console.log(Manager)