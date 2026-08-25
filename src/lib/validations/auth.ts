import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "E-posta gerekli.")
    .email("Geçerli bir e-posta girin."),
  password: z.string().min(8, "Şifre en az 8 karakter olmalı."),
});

export const registerSchema = z
  .object({
    email: z
      .string()
      .min(1, "E-posta gerekli.")
      .email("Geçerli bir e-posta girin."),
    password: z.string().min(8, "Şifre en az 8 karakter olmalı."),
    confirmPassword: z.string().min(1, "Şifre tekrarını girin."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Şifreler eşleşmiyor.",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "E-posta gerekli.")
    .email("Geçerli bir e-posta girin."),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
