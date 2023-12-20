import fastify, { FastifyInstance } from 'fastify'
const app:FastifyInstance= fastify({
  logger: true
})
app.listen(
    {
        port:3100
    },
  ()  => console.log("server connecté")
)