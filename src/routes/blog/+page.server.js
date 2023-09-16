import { tursoClient } from '$lib/server/turso';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
  const db = tursoClient();

//   const questions = await db.query.blogPosts.findMany({
//     with: {
//       choices: {
//         with: {
//           votes: true
//         }
//       }
//     }
//   });
  const blogPosts = await db.query.blogPosts.findMany();

  if (blogPosts !== undefined) {
    return { blogPosts };
  }

  return { blogPosts: [] };
};