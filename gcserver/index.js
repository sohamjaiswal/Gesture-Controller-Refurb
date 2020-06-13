const app = require('express')()
const http = require('http').createServer(app)
const socketio = require('socket.io')(http)

const port = 8080

app.get('/', (req,res)=>{
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // res.header("Access-Control-Allow-Headers", "Content-Type");
  // res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.send('Root route.')
})

socketio.on("connection", (userSocket) => {
    console.log("Client connected!")
    userSocket.on("move", (data) => {
        console.log('move ->', data)
    })

    userSocket.on("rotate", (data) => {
        console.log('rotate ->', data)
    })

    userSocket.on("zoom", (data) => {
        console.log('zoom ->', data)
    })

    userSocket.on("planet", (data) => {
        console.log('change planet')
    })
})


http.listen(port,() => console.log(`GC Server listening on port ${port}`))
