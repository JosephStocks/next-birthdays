import { createTRPCRouter, privateProcedure } from "@/server/api/trpc";
import {
  BirthdayAndIdSchema,
  BirthdayIdOnlySchema,
  BirthdaySchema,
} from "@/models/birthdays";

export const birthdaysRouter = createTRPCRouter({
  getById: privateProcedure
    .input(BirthdayIdOnlySchema)
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
    .input(BirthdaySchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.birthday.create({
        data: {
          ...input,
          userId: ctx.currentUserId,
        },
      });
    }),
  update: privateProcedure
    .input(BirthdayAndIdSchema)
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
    .input(BirthdayIdOnlySchema)
    .query(({ ctx, input }) => {
      return ctx.prisma.birthday.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
