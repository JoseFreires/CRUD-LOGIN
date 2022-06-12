require('dotenv').config()
const express = require('express');
const db = require('./src/config/configDB')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()
const cors = require("cors")

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}))

app.use(express.json())

const port = 4000
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})
//Conexão com Banco - Login
db.on('error', console.log.bind(console, 'Banco não conectado'))
db.once('open', () =>{
    console.log('Banco conectado')
})

//Importando o modelo do banco
const User = require('./src/models/modelsDB')

app.post('/cadastro', async(req, res) => {
    const {name, email, password, confirmpassword}= req.body

    if(!name){
        return res.status(422).json({msg: 'o nome é obrigatório!'})
    }

    if(!email){
        return res.status(422).json({msg: 'o email é obrigatório!'})
    }

    if(!password){
        return res.status(422).json({msg: 'o senha é obrigatório!'})
    }

    if(password !== confirmpassword){
        return res.status(422).json({msg: 'o senha não é identica!'})
    }

    const userExists = await User.findOne({ email: email})

    if(userExists){
        return res.status(422).json({msg: 'Por favor, utilize outro e-mail'})
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const user = new User({
        name,
        email, 
        password: passwordHash
    })

    try{
        await user.save()

        res.status(201).json({msg:'Usuário criado com sucesso!'})

    }catch(error){
        res.status(500).json({msg:'Aconteceu um erro no servidor, tente novamente mais tarde',})
    }
})

app.post('/login', async(req, res) =>{
    const {email, password} = req.body

    if(!email){
        return res.status(422).json({msg: 'o email é obrigatório!'})
    }

    if(!password){
        return res.status(422).json({msg: 'o senha é obrigatório!'})
    }

    const user = await User.findOne({ email: email})

    if(!user){
        return res.status(422).json({msg: 'Usuário não encontrado!'})
    }

    const checkPassword = await bcrypt.compare(password, user.password)

    if(!checkPassword){
        return res.status(422).json({msg: 'senha invalida'})
    }

    try{
        const secret = process.env.SECRET
        
        const token = jwt.sign(
            {
                id: user._id,
            },
            secret
        )
        res.status(200).json({msg: 'Autenticação realizada com sucesso',token})
    }catch(error){
        res.status(500).json({msg:'Aconteceu um erro no servidor, tente novamente mais tarde', },)
    }
})

// Crud Aluno



app.post('/create', async(req, res) => {
    const {name, email, password}= req.body

    if(!name){
        return res.status(422).json({msg: 'o nome é obrigatório!'})
    }

    if(!email){
        return res.status(422).json({msg: 'o email é obrigatório!'})
    }

    if(!password){
        return res.status(422).json({msg: 'o senha é obrigatório!'})
    }

    const userExists = await Useralunos.findOne({ email: email})

    if(userExists){
        return res.status(422).json({msg: 'Por favor, utilize outro e-mail'})
    }


    const user = new Useralunos({
        name,
        email, 
        password
    })

    try{
        await user.save()

        res.status(201).json({msg:'Usuário criado com sucesso!'})

    }catch(error){
        res.status(500).json({msg:'Aconteceu um erro no servidor, tente novamente mais tarde',})
    }
})


const Useralunos = require('./src/models/modelsDbCrud')

app.get('/aluno/cadastros', async (req, res) =>{
    try {
        const data = await Useralunos.find()
        res.status(201).json(data)
    } catch(error){
        console.log(error.message)
    }
})

app.get('/aluno/cadastros/:id', async (req, res) =>{
    console.log(req.params.id)
    try {
        const data = await Useralunos.findOne({_id: req.params.id})
        console.log(data)
        res.status(201).json(data)
    } catch(error){
        console.log(error.message)
    }
})

app.put('/aluno/update/:id', async (req, res) =>{
    try {
        console.log(req.params.id)
        const data = await Useralunos.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true})
        res.status(201).json(data)
    } catch(error){
        console.log(error.message)
    }
})

app.delete('/aluno/delete/:id', async(req, res) =>{
    try{
         await Useralunos.deleteOne({_id: req.params.id})
        res.status(201).json({message:'Deletado com sucesso'})
    } catch(error){
        console.log(error.message)
    }
})
