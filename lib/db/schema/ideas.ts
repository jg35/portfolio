import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";

export const ideas = pgTable("ideas.ideas", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const stolenIdeas = pgTable("ideas.stolen_ideas", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  ideaId: integer("idea_id")
    .references(() => ideas.id)
    .notNull(),
  stolenBy: integer("stolen_by")
    .references(() => users.id)
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
