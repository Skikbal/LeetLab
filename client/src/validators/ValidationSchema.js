import { z } from "zod";

const passwordValidation = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(
    /[@$!%*?&]/,
    "Password must contain at least one special character (@$!%*?&)"
  );

const SignupSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: passwordValidation,
  name: z.string().min(1, "Please enter your name"),
});

const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: passwordValidation,
});

const emailValidation = z.object({
  email: z.string().email("Please enter a valid email"),
});
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
      })
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

export { SignupSchema, LoginSchema, ProblemSchema, emailValidation };
