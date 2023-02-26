import fastify from "fastify";

export const server = fastify({ logger: true })

let start = async (port: number) => {
    await server.listen({port: port})
}

start(9000)