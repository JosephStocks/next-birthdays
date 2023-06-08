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
      const {
        firstName,
        lastName,
        birthday: { year, month, day },
      } = input;
      return await ctx.prisma.birthday.create({
        data: {
          firstName,
          lastName,
          birthday: new Date(year, month - 1, day),
          userId: ctx.currentUserId,
        },
      });
    }),
  update: privateProcedure
    .input(BirthdayAndIdSchema)
    .mutation(({ ctx, input }) => {
      const {
        id,
        birthday: { year, month, day },
        firstName,
        lastName,
      } = input;
      return ctx.prisma.birthday.update({
        where: {
          id,
        },
        data: {
          birthday: new Date(year, month, day),
          firstName,
          lastName,
        },
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
