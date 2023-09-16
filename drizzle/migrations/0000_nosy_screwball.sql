CREATE TABLE `blog-posts` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`headline` text NOT NULL,
	`body` text NOT NULL,
	`created_at` integer DEFAULT (cast (unixepoch() as int)) NOT NULL
);
