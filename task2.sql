CREATE DATABASE enrolment;

use enrolment;

CREATE Table Students (
    student_id VARCHAR(40),
    given_name VARCHAR(50),
    family_name VARCHAR(50),
    program VARCHAR(50)
);

CREATE Table Subjects (
    subject_code VARCHAR(40),
    `subject` VARCHAR(40),
    faculty VARCHAR(40)
);

CREATE Table Enrolments (
    student_id VARCHAR(40),
    subject_code VARCHAR(40),
    mark INT
);

INSERT into Students (student_id, given_name, family_name, program)
VALUES ("a1111111", "Fang","Li","BE(Hons)(Soft)");

INSERT into Students (student_id, given_name, family_name, program)
VALUES ("a1111112", "Jane","Brown","BE(Hons)(Soft)");

INSERT into Students (student_id, given_name, family_name, program)
VALUES ("a1111113", "Bob","Smith","BCompSc");

INSERT into Students (student_id, given_name, family_name, program)
VALUES ("a1111114", "Wei","Zhang","BCompSc");



INSERT into Subjects (subject_code,`subject`,faculty)
VALUES ("COMP SCI 1102","Object Oriented Programming", "ECMS");

INSERT into Subjects (subject_code,`subject`,faculty)
VALUES ("COMP SCI 2207","Web and Database Computing", "ECMS");

INSERT into Subjects (subject_code,`subject`,faculty)
VALUES ("COMP SCI 2000","Computer Systems", "ECMS");

INSERT into Subjects (subject_code,`subject`,faculty)
VALUES ("PHIL 2039","Philosophy of Mind", "Arts");



INSERT into Enrolments (student_id,subject_code,mark)
VALUES ("a111111", "COMP SCI 1102", 62);
INSERT into Enrolments (student_id,subject_code,mark)
VALUES ("a111111", "COMP SCI 2000", 80);

INSERT into Enrolments (student_id,subject_code,mark)
VALUES ("a111112", "COMP SCI 1102", 55);

INSERT into Enrolments (student_id,subject_code,mark)
VALUES ("a111112", "COMP SCI 2207", 80);

INSERT into Enrolments (student_id,subject_code,mark)
VALUES ("a111113", "PHIL 2039", 65);

INSERT into Enrolments (student_id,subject_code,mark)
VALUES ("a111113", "COMP SCI 1102", 46);

INSERT into Enrolments (student_id,subject_code,mark)
VALUES ("a111114", "COMP SCI 2207", 67);

INSERT into Enrolments (student_id,subject_code,mark)
VALUES ("a111114", "COMP SCI 2000", 49);