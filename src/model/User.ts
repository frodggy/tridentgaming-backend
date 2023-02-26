import * as z from 'zod'


const UserModel = z.object({
    id: z.string().uuid(),
    stripe_id: z.string(),
    name: z.string(),
    email: z.string().max(255),
    password: z.string().min(8).max(1000)
})

type User = z.infer<typeof UserModel>;

export { User, UserModel }