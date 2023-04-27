-- Active: 1682041160807@@127.0.0.1@3306@enrolment
UPDATE enrolments
SET mark = 50
WHERE student_id = "a1111113" and enrolments.subject_code = "COMP SCI 1102";