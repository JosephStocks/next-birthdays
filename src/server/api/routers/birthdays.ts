import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "@/server/api/trpc";

export const birthdaysRouter = createTRPCRouter({
  getAll: privateProcedure.query(({ ctx }) => {
    return ctx.prisma.birthday.findMany({
      where: { userId: ctx.currentUser.id },
    });
  }),
});
