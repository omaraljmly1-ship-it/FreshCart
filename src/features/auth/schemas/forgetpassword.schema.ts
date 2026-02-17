import { z } from "zod";

export const forgotPasswordSchema = z.object({
    email: z.string().nonempty("Please enter your email").pipe(z.email("Invalid email address")),
});
export const verifyResetCodeSchema = z.object({
    resetCode: z.string().nonempty("Please enter your reset code").pipe(z.string().length(6, "Invalid reset code")),
});
export type forgotPasswordFormTypes = z.infer<typeof forgotPasswordSchema>;
export type verifyResetCodeFormTypes = z.infer<typeof verifyResetCodeSchema>;