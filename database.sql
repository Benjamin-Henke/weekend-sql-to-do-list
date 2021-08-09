CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (300),
	"completed" BOOLEAN DEFAULT FALSE
	);

INSERT INTO "tasks"
	("task", "completed")
VALUES
	('Mow the lawn', false),
	('Wash the car', false),
	('Dust livingroom', false);
	
SELECT * FROM "tasks" ORDER BY "completed", "id" LIMIT 100;

-- LIMITS are very important and need to be added
-- Especially with production databases, can slowdown the processes