import 'dotenv/config'; 
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
// if (!process.env.DATABASE_URL) {
//     throw new Error("Missing DATABASE_URL environment variable");   // If you need DATABASE_URL in client-side React components, Next.js hides non-public env variables by default.
//     // To expose it, rename it to:
//   }
//   console.log("DATABASE_URL:", process.env.DATABASE_URL);

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle({ client: sql });