import { boolean, varchar, serial, pgTable } from "drizzle-orm/pg-core";

export const Users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(), // ✅ PostgreSQL requires length for varchar
    email: varchar('email', { length: 255 }).notNull(),
    imageUrl: varchar('imageUrl', { length: 255 }),
    subscription: boolean('subscription').default(false)
});
