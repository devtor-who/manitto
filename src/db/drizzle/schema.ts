import { text, pgTable, uuid } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const user = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey(),
  invitationCode: text("invitation_code") //
    .unique("user_invitation_code_unique"),
  name: text("name") //
    .notNull(),
});
export const selectUserSchema = createSelectSchema(user);

export type User = z.infer<typeof selectUserSchema>;

export const manitto = pgTable("manitto", {
  id: uuid("id").defaultRandom().primaryKey(),
  manittoFrom: text("manitto_from") //
    .unique("manitto_from_unique")
    .notNull(),
  manittoTo: text("manitto_to") //
    .unique("manitto_to_unique")
    .notNull(),
});
