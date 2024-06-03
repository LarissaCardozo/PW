//import modulo externo
import express from 'express'

// import modulo interno
import path from 'path'

// iniciei o express
const app = express()

app.use(express.static('public'))

app.get('/noticiaUm', function (req, res) {
  let end = path.resolve('./view/noticiaUm.html')
  res.sendFile(end)
})

app.get('/noticiaDois', function (req, res) {
  let end = path.resolve('./view/noticiaDois.html')
  res.sendFile(end)
})

app.get('/noticiaTres', function (req, res) {
  let end = path.resolve('./view/noticiaTres.html')
  res.sendFile(end)
})
app.get('/noticiaQuatro', function (req, res) {
  let end = path.resolve('./view/noticiaQuatro.html')
  res.sendFile(end)
})



  app.get('/html', function (req, res) {
    let end = path.resolve('./view/index.html')
    res.sendFile(end)
  })

app.listen(3000, ()=>{console.log("Funcionando na porta 3000")})