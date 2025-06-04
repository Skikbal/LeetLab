import z from "zod";

const ProblemSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]),
  tags: z.array(z.string()).min(1, "Please enter at least one tag"),
  companyTags: z.array(z.string()).min(1, "Please enter at least one tag"),
  constraints: z
    .array(z.string())
    .min(1, "Please enter at least one constraint"),
  hints: z.string().optional(),
  editorial: z.string().optional(),
  testcases: z
    .array(
      z.object({
        input: z.string().min(1, "Input is required"),
        output: z.string().min(1, "Output is required"),
      }),
    )
    .min(1, "Please enter at least one testcase"),
  examples: z
  .array(
    z.object({
      input: z.string().min(1, "Input is required"),
      output: z.string().min(1, "Output is required"),
      explanation: z.string().optional(),
    }),
  )
  .min(1, "Please enter at least one example"),
  codesnippets: z.object({
    JAVASCRIPT: z.string().min(1, "Code snippet is required"),
    PYTHON: z.string().min(1, "Code snippet is required"),
    JAVA: z.string().min(1, "Code snippet is required"),
  }),
  referencesolutions: z.object({
    JAVASCRIPT: z.string().min(1, "Code snippet is required"),
    PYTHON: z.string().min(1, "Code snippet is required"),
    JAVA: z.string().min(1, "Code snippet is required"),
  }),
});

const playlistValidator = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
});
export { ProblemSchema, playlistValidator };
