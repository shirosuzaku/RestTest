const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://test_user:test_pass@cluster0.0zsrp2y.mongodb.net/testdb?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// const mongoose = require('mongoose')

// const connectDB = async () => {
//     try{
//         const conn = await mongoose.connect("mongodb+srv://test_user:test_pass@cluster0.0zsrp2y.mongodb.net/testdb?retryWrites=true&w=majority")
//         console.log(`MongoDB connected: ${conn.connection.host}`)
//     }catch(err){
//         console.log(err)
//         process.exit(1)
//     }
// }

// connectDB()


app.use(express.json())

app.listen(
    PORT,
    ()=>console.log(`its live on http://localhost:${PORT}`)
)

app.get('/image',(req,res)=>{
    res.status(200).send({
        main: [
        {
            description: "some description",
            imageUri: 'http://www.github.com'
        },
        {
            description: "other description",
            imageUri: 'http://www.render.com'
        },
        {
            description: "else description",
            imageUri: 'http://location.com'
        },
    ]})
})

// app.post('/image/:id',(req,res)=>{
//     const {id} = req.params
//     const {imgUri} = req.body

//     if(!imgUri){
//         res.status(418).send({message: 'url needed'})
//     }

//     res.send({
//         image: `image ${imgUri} with id ${id}`
//     })
// })
