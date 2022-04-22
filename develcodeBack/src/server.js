const express = require("express");
const path = require('path');

 
const app = express();
const PORT = 5000;
 
app.use(express.static(path.join(__dirname, 'client'))) //___dirname substitui o ./ | 'client' é o nome da pasta onde estão os arquivos estáticos.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`)
})

app.post('/teste',(req, res)=>{
    const { id, nome, data, codigo} = req.body

    db.collection("usuario").get().then((snapshot) => {
        snapshot.forEach((doc) => {
            let aluno = doc.data();
            console.log(aluno.nome)
            console.log(aluno.notas)
            console.log(aluno.advertencias)
        })
    })
    
    console.log(id)
    console.log(nome)
    console.log(data)
    console.log(codigo)

    res.json({teste: 'teste'})
})
