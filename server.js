require("dotenv").config();
const mysql = require("mysql2");
const inquirer = require("inquirer");
const queries = require("./queries");

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);

function startQuestions() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please Choose an Option",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add a Role",
          "Add Employee",
          "Update Employee Role",
        ],
        name: "startAnswer",
      },
    ])
    .then(({ startAnswer }) => {
      if (startAnswer === "View All Departments") {
        return queries.viewAllByDepartment(db);
      }
      if (startAnswer === "View All Roles") {
        return queries.viewAllByRoles(db);
      }
      if (startAnswer === "View All Employees") {
        return queries.viewAllByEmployee(db);
      } else console.log("nope");
    });
}

startQuestions();

