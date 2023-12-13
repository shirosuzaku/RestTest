const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;

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

app.post('/image/:id',(req,res)=>{
    const {id} = req.params
    const {imgUri} = req.body

    if(!imgUri){
        res.status(418).send({message: 'url needed'})
    }

    res.send({
        image: `image ${imgUri} with id ${id}`
    })
})
