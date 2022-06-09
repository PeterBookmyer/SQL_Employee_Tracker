USE employees_db;

INSERT INTO department (name)
VALUES ("Engineering"),
("Sales"),
("Finance"),
("Legal");


INSERT INTO roles (title, salary, department_id)
VALUES ("Software Engineer", 75000, 1),
("Sales Rep", 110000, 2),
("Analyst", 92000, 3),
("General Council", 130000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jerry", "Smith", 1, NULL),
("Greg", "Alan", 3, NULL),
("Bobby", "Jones", 2, 1),
 ("Ted", "Roberts", 2, 2),
("Chris", "Scott", 1, 1),
("Pablo", "Saez", 3, 1);