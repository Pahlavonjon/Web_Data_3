-- Active: 1682041160807@@127.0.0.1@3306@enrolment
SELECT given_name, family_name 
FROM Students
WHERE student_id IN
(SELECT DISTINCT student_id 
FROM Enrolments
WHERE Enrolments.subject_code = "COMP SCI 2207");

