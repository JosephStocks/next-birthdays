import { z } from "zod";

export const DaySchema = z.object({
  year: z.number(),
  month: z.number(),
  day: z.number(),
});

export const BirthdaySchema = z.object({
  birthday: DaySchema,
  firstName: z.string().min(1),
  lastName: z.string().min(1).optional(),
});

export const BirthdayIdOnlySchema = z.object({
  id: z.string().cuid(),
});

export const BirthdayAndIdSchema = BirthdaySchema.merge(BirthdayIdOnlySchema);

export type Birthday = z.infer<typeof BirthdaySchema>;
export type BirthdayId = z.infer<typeof BirthdayIdOnlySchema>;
export type BirthdayAndId = z.infer<typeof BirthdayAndIdSchema>;

export const NamesOnlySchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2).optional(),
});

export type NamesOnly = z.infer<typeof NamesOnlySchema>;
