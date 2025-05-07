import z from "zod";


export const UserScreenSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserScreen = z.infer<typeof UserScreenSchema>;
