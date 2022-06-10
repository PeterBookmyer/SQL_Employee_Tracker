const queries = require("./queries");
const cTable = require("console.table");

function viewAllByDepartment(db, startQuestions) {
  db.query("SELECT * FROM department", (err, results) => {
    if (err) {
      console.log(err);
    }
    console.table(results);
    startQuestions();
  });
}

function viewAllByRoles(db, startQuestions) {
  db.query("SELECT * FROM roles", (err, results) => {
    if (err) {
      console.log(err);
    }
    console.table(results);
    startQuestions();
  });
}

function viewAllByEmployee(db, startQuestions) {
  db.query("SELECT * FROM employee", (err, results) => {
    if (err) {
      console.log(err);
    }
    console.table(results);
    startQuestions();
  });
}

async function addDepartment(db, newDepartment, startQuestions) {
  // const roleList = await db;

  console.log(newDepartment);
  db.query(
    "INSERT INTO employee WHERE id = ?",
    0,
    newDepartment,
    (err, results) => {
      if (err) {
        console.log(err);
      }
      console.table(results);
    }
  );
  startQuestions();
}

async function addRole(db, newRole, newRoleSalary, startQuestions) {
  // const roleList = await db;

  console.log(newRole, newRoleSalary);
  db.query(
    "INSERT INTO roles WHERE id = ?",
    0,
    newRole,
    newRoleSalary,
    (err, results) => {
      if (err) {
        console.log(err);
      }
      console.table(results);
    }
  );
  startQuestions();
}

async function addEmployee(
  db,
  newEmployeeFirst,
  newEmployeeLast,
  newEmployeeRoleId,
  newEmployeeMgrId,
  startQuestions
) {
  console.log(
    newEmployeeFirst,
    newEmployeeLast,
    newEmployeeRoleId,
    newEmployeeMgrId
  );
  db.query(
    "INSERT INTO employee WHERE id = ?",
    0,
    newEmployeeFirst,
    newEmployeeLast,
    newEmployeeRoleId,
    newEmployeeMgrId,
    (err, results) => {
      if (err) {
        console.log(err);
      }
      console.table(results);
    }
  );
  startQuestions();
}

module.exports = {
  viewAllByDepartment,
  viewAllByRoles,
  viewAllByEmployee,
  addDepartment,
  addRole,
  addEmployee,
};
