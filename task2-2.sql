CREATE DATABASE enrolment;

CREATE Table Students (
    student_id int,
    given_name VARCHAR(50),
    familty_name VARCHAR(50),
    program VARCHAR(50)
);

CREATE Table Subjects (
    subject_code int,
    subject VARCHAR(40),
    faculty VARCHAR(40)
);

CREATE Table Enrolments (
    student_id int,
    subject_code VARCHAR(40)
);