SET SQL_SAFE_UPDATES = 0;
DELETE FROM enrolments
WHERE student_id = "a1111112";

DELETE FROM students
WHERE student_id = "a1111112";