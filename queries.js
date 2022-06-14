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

function addDepartment(db, newDepartment, startQuestions) {
  const sql = "INSERT INTO department (name) VALUES(?)";

  db.query(sql, newDepartment, (err, results) => {
    if (err) {
      console.log(err);
    }
    viewAllByDepartment(db, startQuestions);
  });
}

function addRole(db, newRole, newRoleSalary, startQuestions) {
  const sql = "INSERT INTO roles (title, salary) VALUES(?, ?)";

  db.query(sql, [newRole, newRoleSalary], (err, results) => {
    if (err) {
      console.log(err);
    }
    viewAllByRoles(db, startQuestions);
  });
}

function addEmployee(
  db,
  newEmployeeFirst,
  newEmployeeLast,
  newEmployeeRoleId,
  newEmployeeMgrId,
  startQuestions
) {
  const sql =
    "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?, ?, ?, ?)";

  db.query(
    sql,
    [newEmployeeFirst, newEmployeeLast, newEmployeeRoleId, newEmployeeMgrId],
    (err, results) => {
      if (err) {
        console.log(err);
      }
      viewAllByEmployee(db, startQuestions);
    }
  );
}

module.exports = {
  viewAllByDepartment,
  viewAllByRoles,
  viewAllByEmployee,
  addDepartment,
  addRole,
  addEmployee,
};
