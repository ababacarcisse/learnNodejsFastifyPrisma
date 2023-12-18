// Import the framework and instantiate it
import fastifyView from '@fastify/view'
import fastify from 'fastify'
import ejs from 'ejs'
const app = fastify({
 
})
//enregistrer la nouvelle extenssion de fastify
app.register(fastifyView,{
  //moteur à utilisé
  engine:{
    ejs
  }
}
)
// Declare a route
app.get('/',  (req, res) =>{
  //retourne du html de ejs
  res.view('template/index.ejs',
  //paramettre 
 { 
  titre:"mon titre"
 }
  )
})

// Run the server!
try {
  await app.listen({ port: 3000 })
} catch (err) {
  app.log.error(err)
  process.exit(1)
}