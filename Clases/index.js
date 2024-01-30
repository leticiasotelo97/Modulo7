import express from 'express'
const app = express()
app.use(express.json())

//app.get('/api/', function (req, res) {
    //res.status(200).send({'mensaje': 'Hola Mundo'})
   // console.log(req.body.mensaje)
  //})

app.get('/', function (req, res) {
    res.status(200).send({'mensaje': 'Hola Mundo'})
   console.log(req.query)
  })

app.get('/api/suma', function(req,res){
    const num1=parseFloat(req.query.num1)
    const num2= parseFloat(req.query.num2)
    const suma=num1 + num2
    console.log(`el resultado es = ${suma}`)
    res.status(200).send({'resultado': suma})
})

app.get('/api/usuario/:usuario_id',function(req,res){
    res.status(200).send({'usuario':req.params.usuario_id})
    console.log(req.params)
})



app.listen(3000,()=>{
    console.log('Server running')
})