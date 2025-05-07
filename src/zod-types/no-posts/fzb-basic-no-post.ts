import { z } from "zod";


export const FzbBasicNoPostDataSchema = z.object({

});

export type FzbBasicNoPostData = z.infer<typeof FzbBasicNoPostDataSchema>;
