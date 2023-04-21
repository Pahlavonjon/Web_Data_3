-- Active: 1682041160807@@127.0.0.1@3306@enrolment
select given_name, family_name from Students
where student_id in (SELECT student_id FROM Enrolments
WHERE Enrolments.mark < 50 and Enrolments.subject_code = "COMP SCI 2000");





