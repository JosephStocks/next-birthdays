import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "@/server/api/trpc";

export const birthdaysRouter = createTRPCRouter({
  getById: privateProcedure
    .input(
      z.object({
        id: z.string().cuid(),
      })
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.birthday.findFirst({
        where: {
          userId: ctx.currentUserId,
          id: input.id,
        },
      });
    }),
  getAll: privateProcedure.query(({ ctx }) => {
    return ctx.prisma.birthday.findMany({
      where: { userId: ctx.currentUserId },
    });
  }),
  add: privateProcedure
    .input(
      z.object({
        birthday: z.date(),
        firstName: z.string().min(1),
        lastName: z.string().min(1).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.birthday.create({
        data: {
          ...input,
          userId: ctx.currentUserId,
        },
      });
    }),
  update: privateProcedure
    .input(
      z.object({
        id: z.string().cuid(),
        birthday: z.date().optional(),
        firstName: z.string().min(1).optional(),
        lastName: z.string().min(1).optional(),
      })
    )
    .mutation(({ ctx, input }) => {
      const { id, ...rest } = input;
      return ctx.prisma.birthday.update({
        where: {
          id,
        },
        data: rest,
      });
    }),
  deleteById: privateProcedure
    .input(
      z.object({
        id: z.string().cuid(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.birthday.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
