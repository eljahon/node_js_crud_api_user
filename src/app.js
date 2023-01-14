const mongodb = require('mongoose');
const routerUser = require('./routes/router.user')
async  function RootApp({app, PORT, url}) {
    mongodb.set('strictQuery', false)
   const connet= await mongodb.connect(url, {})
   .then(res=> {
    console.log('database mongodb to connet')
   })
   .catch(err=> {
    console.log(err)
   });
   
    await app.use('/api/',routerUser)
    return await  app.listen(PORT, ()=> {
        console.log('Server running to port', PORT)
    }) 
};
module.exports = RootApp;