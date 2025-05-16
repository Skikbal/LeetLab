import z from "zod";

const ProblemSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  difficulty: z.enum(["Easy", "Medium", "Hard"]),
  tags: z.array(z.string()).min(1, "Please enter at least one tag"),
  constraints: z
    .string()
    .min(1, "Constraints must be at least 10 characters long"),
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
  examples: z.object({
    JAVASCRIPT: z.object({
      input: z.string().min(1, "Input is required"),
      output: z.string().min(1, "Output is required"),
      explanation: z.string().optional(),
    }),
    PYTHON: z.object({
      input: z.string().min(1, "Input is required"),
      output: z.string().min(1, "Output is required"),
      explanation: z.string().optional(),
    }),
    JAVA: z.object({
      input: z.string().min(1, "Input is required"),
      output: z.string().min(1, "Output is required"),
      explanation: z.string().optional(),
    }),
  }),
  codesnippets: z.object({
    JAVASCRIPT: z.string().min(1, "Code snippet is required"),
    PYTHON: z.string().min(1, "Code snippet is required"),
    JAVA: z.string().min(1, "Code snippet is required"),
  }),
  referencesolution: z.object({
    JAVASCRIPT: z.string().min(1, "Code snippet is required"),
    PYTHON: z.string().min(1, "Code snippet is required"),
    JAVA: z.string().min(1, "Code snippet is required"),
  }),
});

export { ProblemSchema };