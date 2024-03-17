import { Prisma } from '@prisma/client';
import {z} from 'zod'
export {registerSchema , loginSchema}

const registerSchema = z.object({
    name: z.string().min(1).max(50),
    email: z.string().email().max(100),
    password: z.string().min(8).max(100).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    confirmPassword: z.string().min(8).max(100),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});


const loginSchema = z.object({
    email: z.string().email().max(100),
    password: z.string().max(100),
});



