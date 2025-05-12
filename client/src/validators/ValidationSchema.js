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

export { SignupSchema, LoginSchema };
