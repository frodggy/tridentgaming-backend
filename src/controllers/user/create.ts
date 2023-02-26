import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from '@prisma/client'
import { User, UserModel } from "../../model/User";
import { nanoid } from "nanoid";

interface Query {
    name: string,
    email: string,
    password: string
}

export default async function CreateUser(req: FastifyRequest<{Querystring: Query}> , rep: FastifyReply) {
    let { name, email, password }: Query = req.query

    let user: User = {
        id: nanoid(),
        email,
        name,
        stripe_id: '',
        password
    }

    let prisma = new PrismaClient();
    await prisma.$connect();


    await prisma.$disconnect();
}