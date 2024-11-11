// 1 Import json server
const jsonServer = require('json-server')

// 2 Create server application using json server
const mediaAppServer = jsonServer.create()

// 3 Create a middleware used by json server
const middleware = jsonServer.defaults()

// 4 create router : setup router for db.json file
const router = jsonServer.router('db.json')

// 5 Applying middleware to server
mediaAppServer.use(middleware)

// 6 Applying router to server
mediaAppServer.use(router)

// 7 Define port
const PORT = 3000

// 8 Starting the server
mediaAppServer.listen(PORT,()=>{
    console.log("Media app server started on PORT" +PORT);
    
})