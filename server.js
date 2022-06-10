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
        return queries.viewAllByDepartment(db, startQuestions);
      }
      if (startAnswer === "View All Roles") {
        return queries.viewAllByRoles(db, startQuestions);
      }
      if (startAnswer === "View All Employees") {
        return queries.viewAllByEmployee(db, startQuestions);
      }
      if (startAnswer === "Add Department") {
        inquirer
          .prompt([
            {
              type: "Input",
              message: "Please enter a Department Name",
              name: "newDepartment",
            },
          ])
          .then(({ newDepartment }) => {
            return queries.addDepartment(db, newDepartment, startQuestions);
          });
      }
      if (startAnswer === "Add a Role") {
        inquirer
          .prompt([
            {
              type: "Input",
              message: "Please enter a Role Name",
              name: "newRole",
            },
            {
              type: "Input",
              message: "Please enter a Role Salary",
              name: "newRoleSalary",
            },
          ])
          .then(({ newRole, newRoleSalary }) => {
            return queries.addRole(db, newRole, newRoleSalary, startQuestions);
          });
      }
      if (startAnswer === "Add Employee") {
        inquirer
          .prompt([
            {
              type: "Input",
              message: "Please enter a Employee First Name",
              name: "newEmployeeFirst",
            },
            {
              type: "Input",
              message: "Please enter a Employee Last Name",
              name: "newEmployeeLast",
            },
            {
              type: "list",
              message: "Please Choose an Role ID",
              choices: ["1", "2", "3", "4"],
              name: "newEmployeeRoleId",
            },
            {
              type: "list",
              message: "Please Choose an Manager ID",
              choices: ["1", "2", "3", "4"],
              name: "newEmployeeMgrId",
            },
          ])
          .then(
            ({
              newEmployeeFirst,
              newEmployeeLast,
              newEmployeeRoleId,
              newEmployeeMgrId,
            }) => {
              return queries.addEmployee(
                db,
                newEmployeeFirst,
                newEmployeeLast,
                newEmployeeRoleId,
                newEmployeeMgrId,
                startQuestions
              );
            }
          );
      }
    });
}

startQuestions();
