const queries = require("./queries");
const cTable = require("console.table");

function viewAllByDepartment(db) {
  db.query("SELECT * FROM department", function (err, results) {
    if (err) {
      console.log(err);
    }
    console.table(results);
  });
}

function viewAllByRoles(db) {
  db.query("SELECT * FROM roles", function (err, results) {
    if (err) {
      console.log(err);
    }
    console.table(results);
  });
}

function viewAllByEmployee(db) {
  db.query("SELECT * FROM employee", function (err, results) {
    if (err) {
      console.log(err);
    }
    console.table(results);
  });
}

// async function addEmployee(db) {
//   const roleList = await db
//     .promise()
//     .query("SELECT * FROM roles", function (err, results) {
//       return results;
//     });
//   //   const employeeList = await db.query("SELECT * FROM employee", function (err, results) {
//   //       return results;
//   //     });
//   console.log(roleList);
//   //   db.query("INSERT INTO employee", function (err, results) {
//   //     if (err) {
//   //       console.log(err);
//   //     }
//   //     console.table(results);
//   //   });
// }

module.exports = {
  viewAllByDepartment,
  viewAllByRoles,
  viewAllByEmployee,
};
