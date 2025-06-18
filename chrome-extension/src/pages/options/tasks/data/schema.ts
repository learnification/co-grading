import { z } from "zod";

export const taskSchema = z.object({
  taskId: z.string(),
  course: z.object({
    id: z.number(),
    name: z.string(),
    course_code: z.string(),
  }),
  assignment: z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
  }),
  status: z.string(),
  submissionIds: z.array(z.number()),
  date: z.date(),
});

export type Task = z.infer<typeof taskSchema>;
