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

function addRole(db, newRole, startQuestions) {
  const sql = "INSERT INTO roles (title) VALUES(?)";

  db.query(sql, newRole, (err, results) => {
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
  const first = "INSERT INTO employee (first_name) VALUES(?)";
  const last = "INSERT INTO employee (last_name) VALUES(?)";
  const role = "INSERT INTO employee (role_id) VALUES(?)";
  const mgr = "INSERT INTO employee (mgr_id) VALUES(?)";

  db.query(
    first,
    last,
    role,
    mgr,
    newEmployeeFirst,
    newEmployeeLast,
    newEmployeeRoleId,
    newEmployeeMgrId,
    (err, results) => {
      if (err) {
        console.log(err);
      }
      viewAllByEmployees(
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

module.exports = {
  viewAllByDepartment,
  viewAllByRoles,
  viewAllByEmployee,
  addDepartment,
  addRole,
  addEmployee,
};
