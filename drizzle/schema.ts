import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

// IMPORTANT: DO NOT NAME TABLES WITH A - ONLY USE _ E.G. blog_posts
export const blogPosts = sqliteTable('blog_posts', {
	id: integer('id').primaryKey().notNull(),
	headline: text('headline').notNull(),
	shortDescription: text('short_description').notNull(),
	body: text('body').notNull(),
	createdAt: integer('created_at')
		.default(sql`(cast (unixepoch() as int))`)
		.notNull()
});
