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
	
SELECT * FROM "tasks";