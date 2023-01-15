const getAllUser = require('./docs/user/notId.json');
const ById =  require('./docs/user/ById.json')

module.exports = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Node js crud users",
            version: "v1"
        },
        servers: [
            {
              url: "http://localhost:5000",
            },
          ],
          
          paths: {
            tags: [{name: "user"}],
            "/api/user": getAllUser,
            "/api/user/{id}":ById
          }
    },
    apis: []
    };