const express = require( "express" )

const app = express()

const myData = [
    {id: 1, name: "ahmad"},
    {id: 2, name: "mohammad"},
    {id: 3, name: "sara"},
    {id: 4, name: "lala"},
]

app.get( "/api/users/:id", (req, res) => {
    res.send( req.params )
} )

app.get( "/api/users", (req, res) => {
    res.send( req.query )
} )

app.get( "/api/users/:id", (req, res) => {
    const user = myData.find( item => item.id === parseInt( req.params.id ) )
    if (!user) res.send( "Not User ☹☹☹" )
    else res.send( user )
} )

const port = 8080
app.listen( port, () => {
    console.log( `listen in port : ${port}` )
} )