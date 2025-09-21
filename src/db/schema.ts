import { SQL, sql } from "drizzle-orm";
import { datetime } from "drizzle-orm/mysql-core";
import {
  integer,
  pgTable,
  serial,
  unique,
  varchar,
  index,
  customType,
  pgEnum,
  boolean,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const tsvector = customType<{
  data: string;
}>({
  dataType() {
    return `tsvector`;
  },
});

export const linksTable = pgTable("programs", {
  code: varchar({ length: 32 }).notNull().primaryKey(),
  content: text().notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
});
