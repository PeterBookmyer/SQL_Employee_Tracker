# SQL_Employee_Tracker
Description:  User Story - AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

Acceptance Criteria - GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

Installation: This application can be installed with a few easty steps - 1st: open up your mysql shell and source the schema.sql as well as the seeds.sql.  This will create the database as well as the tables of data.  You can then exit the shell.  2nd you can run node server.js in your terminal to launch the application.

Usage: Once launched, a user can navigate thru terminal questions to view by department, view by role, or view employees.  This will display a table of data using console.table in your terminal.  A user can also choose to add a department, a role, an employee (work in progress), or update an existing employee role (work in progress)


License: No licenses were used

Contributing: Peter Bookmyer - Developer with the help of TAs and Tutor, Rebecca.  Classmates (Ted, Kris, Nate, Luke) were also helpful in completing this application.

Tests: No tests were preformed


Questions?
github username - PeterBookmyer

link to screencastify - https://drive.google.com/file/d/1sS30GG37C6z3z7jAELXxnX1wTqpYucz1/view

repo link - https://github.com/PeterBookmyer/SQL_Employee_Tracker