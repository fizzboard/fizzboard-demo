import { z } from "zod";


export const DemoProfileRoleEnum = z.enum(["DisplayAdmin", "MessagePoster"]);

export type DemoProfileRole = z.infer<typeof DemoProfileRoleEnum>;


export const UserProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  demoRole: DemoProfileRoleEnum,
  demoTitle: z.string(),
});

export type UserProfile = z.infer<typeof UserProfileSchema>;
