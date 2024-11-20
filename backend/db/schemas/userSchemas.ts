
import { relations } from "drizzle-orm";
import { pgTable, text, varchar, uuid } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull().unique(),
  email: varchar('email', { length: 100 }).notNull().unique(),
  password: varchar('password', { length: 50 }).notNull()
});

// Definimos a regra de 1-1, ou seja, um usuario so pode ter um character no jogo
// tal qual um character, so pode pertencer a um usuario
export const usersRelations = relations(users, ({ one }) => ({
  userCharacter: one(userCharacter)
}))

export const userCharacter = pgTable('user_character', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id),
  username: text('username'),
  level: text('level'),
  element: text('element'), //retirar
})

export const userCharacterrelations = relations(userCharacter, ({ one }) => ({
  user: one(users, {fields: [userCharacter.userId], references: [users.id]})
}))