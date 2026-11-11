-- Databases week 1 homework
-- SQLPlay Live: https://luisfff.github.io/sqlplay/

-- Challenge 1: Count all tasks in the database
SELECT COUNT(*) FROM task;

-- Challenge 2: Count tasks without valid due dates (NULL or unparseable)
SELECT COUNT(*) FROM task WHERE datetime(due_date) IS NULL;

-- Challenge 3: Return all columns of tasks marked Done
SELECT * FROM task WHERE status_id = 3;

-- Challenge 4: Return all columns of tasks not marked Done
SELECT * FROM task WHERE status_id != 3;

-- Challenge 5: Return every task, most recently created first
SELECT * FROM task ORDER BY created DESC;

-- Challenge 6: Return the single most recently created task
SELECT * FROM task ORDER BY created DESC LIMIT 1;

-- Challenge 7: Tasks whose title or description contains 'database'
SELECT title, due_date FROM task WHERE title LIKE '%database%' OR description LIKE '%database%';

-- Challenge 8: Every task's id and title, ordered by id
SELECT id, title FROM task ORDER BY id ASC;

-- Challenge 9: Tasks with status_id 2 (In progress)
SELECT id, title FROM task WHERE status_id = 2 ORDER BY id ASC;

-- Challenge 10: Tasks with no due date
SELECT id, title FROM task WHERE due_date IS NULL ORDER BY id ASC;

-- Challenge 11: Tasks ordered by title A to Z
SELECT id, title FROM task ORDER BY title ASC;

-- Challenge 12: The five tasks with the highest ids, highest first
SELECT id, title FROM task ORDER BY id DESC LIMIT 5;

-- Challenge 13: Unassigned tasks
SELECT id, title FROM task WHERE user_id IS NULL ORDER BY id ASC;

-- Challenge 14: Rename task 1 to 'Wash the laundry'
UPDATE task SET title = 'Wash the laundry' WHERE id = 1;

-- Challenge 15: Mark a task as done
UPDATE task SET status_id = 3 WHERE id = 22;

-- Challenge 16: Assign a task to a user
UPDATE task SET user_id = 11 WHERE id = 23;

-- Challenge 17: Set a task's status
UPDATE task SET status_id = 1 WHERE user_id IS NULL;

-- Challenge 18: Delete task 35 only
DELETE FROM task WHERE id = 35;

-- Challenge 19: Remove the Personal tag (tag_id 2) from task 1
DELETE FROM task_tag WHERE task_id = 1 AND tag_id = 2;

-- Challenge 20: Create the task_note table
CREATE TABLE task_note (
  id INTEGER PRIMARY KEY,
  task_id INTEGER NOT NULL,
  note TEXT NOT NULL,
  FOREIGN KEY (task_id) REFERENCES task(id)
);