const mongodb = require('mongoose');
const userRouter = require('./routes/user.routes')
const swaggerJsdoc =require('swagger-jsdoc') ;
const swaggerUi = require('swagger-ui-express')
const options = require('./swagger/openapi')
async  function RootApp({app, PORT, url}) {
    mongodb.set('strictQuery', false)
await mongodb.connect(url, {})
   .then(res=> {
    console.log('database mongodb to connet')
   })
   .catch(err=> {
    console.log(err)
   });
//    console.log(options)
   await app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options), { explorer: true }))
    await app.use('/api/',userRouter)
    return await  app.listen(PORT, ()=> {
        console.log('Server running to port', PORT)
    }) 
};
module.exports = RootApp;