import { createTRPCRouter } from "@/server/api/trpc";
import { birthdaysRouter } from "@/server/api/routers/birthdays";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  birthdays: birthdaysRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
