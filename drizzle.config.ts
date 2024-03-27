import type { Config } from "drizzle-kit";
export default {
  schema: "./src/db/drizzle/schema.ts",
  out: "./src/drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL!,
  },
} satisfies Config;
