import { z } from 'zod'

export const usernameSchema = z
  .string()
  .min(3)
  .max(24)
  .regex(/^[a-z0-9_]+$/, 'Use lowercase letters, numbers, underscore')

export const urlSchema = z
  .string()
  .url()
  .refine((u) => /^https?:\/\//.test(u), 'Must start with http(s)://')

export const createAccountSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(200),
  username: usernameSchema,
})

export const createLinkSchema = z.object({
  title: z.string().min(1).max(60),
  url: urlSchema,
})
