const express = require('express')
const     app = express()

app.set("port", process.env.PORT || 3000)

app.use("public", express.static("public") )

app.get("/", (req, res)=> res.sendFile(__dirname + "/public/index.html") )

app.listen( app.get("port"), _ => console.log(`on port ${process.env.port || 3001}`) )
