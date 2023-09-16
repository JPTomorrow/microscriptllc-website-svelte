// KEEPING THIS FILE INSIDE OF lib/server/ TO RESTRICT 
// ITS USE TO SERVER ENDPOINTS AND MODULES

import { type LibSQLDatabase, drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/http';
import * as schema from '../../../drizzle/schema';

export function tursoClient(): LibSQLDatabase<typeof schema> {
  const url = import.meta.env.VITE_TURSO_DB_URL?.trim();
  if (url === undefined) {
    throw new Error('VITE_TURSO_DB_URL is not defined');
  }

  const authToken = import.meta.env.VITE_TURSO_DB_AUTH_TOKEN?.trim();
  if (authToken === undefined) {
    if (!url.includes('file:')) {
      throw new Error('VITE_TURSO_DB_AUTH_TOKEN is not defined');
    }
  }

  return drizzle(
    createClient({
      url,
      authToken
    }),
    { schema }
  );
}