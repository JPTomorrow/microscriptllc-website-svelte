import { relations, sql } from 'drizzle-orm';
import { index, integer, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core';

export const blogPosts = sqliteTable(
  'blog-posts',
  {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    headline: text('headline').notNull(),
    body: text('body').notNull(),
    createdAt: integer('created_at')
      .notNull()
      .default(sql`(cast (unixepoch() as int))`)
  }
);