const express = require( "express" )
const joi = require( "joi" )
require( "dotenv" ).config()
const app = express()

app.use( express.json() )

var myData = [
    {id: 1, name: "ahmad"},
    {id: 2, name: "mohammad"},
    {id: 3, name: "sara"},
    {id: 4, name: "lala"},
]

app.get( "/api/users", (req, res) => {
    res.send( myData )
} )

app.put( "/api/users/:id", (req, res) => {
    const schema = joi.object( {
        name: joi.string().min( 4 ).max( 10 ).required(),
        id: joi.number().required()
    } )

    const {error} = schema.validate( {...req.body, id: req.params.id} )

    if (error) res.status( 400 ).send( {message: error.message} )

    const userUpdate = myData.findIndex( item => item.id === parseInt( req.params.id ) )

    if (userUpdate === -1) return res.status( 404 ).send( "not fund user" )
    myData[userUpdate].name = req.body.name
    res.send( myData[userUpdate] )
} )



const port = process.env.PORT || 8080
app.listen( port, (err) => {
    if (err) console.log( err.message )
    else console.log( `listen in port : ${port}` )
} )