// require('dotenv').config()
// const User = require("../models/modelsDB");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken")

// const cadastrar = async(req, res)=>{
//     const {name, email, password, confirmpassword}= req.body

//     if(!name){
//         return res.status(422).json({msg: 'o nome é obrigatório!'})
//     }

//     if(!email){
//         return res.status(422).json({msg: 'o email é obrigatório!'})
//     }

//     if(!password){
//         return res.status(422).json({msg: 'o senha é obrigatório!'})
//     }

//     if(password !== confirmpassword){
//         return res.status(422).json({msg: 'o senha não é identica!'})
//     }

//     const userExists = await User.findOne({ email: email})

//     if(userExists){
//         return res.status(422).json({msg: 'Por favor, utilize outro e-mail'})
//     }

//     const salt = await bcrypt.genSalt(12)
//     const passwordHash = await bcrypt.hash(password, salt)

//     const user = new User({
//         name,
//         email, 
//         password: passwordHash
//     })

//     try{
//         await user.save()

//         res.status(201).json({msg:'Usuário criado com sucesso!'})

//     }catch(error){
//         res.status(500).json({msg:'Aconteceu um erro no servidor, tente novamente mais tarde',})
//     }
// }

// const logar = async(req, res)=>{
//     const {email, password} = req.body

//     if(!email){
//         return res.status(422).json({msg: 'o email é obrigatório!'})
//     }

//     if(!password){
//         return res.status(422).json({msg: 'o senha é obrigatório!'})
//     }

//     const user = await User.findOne({ email: email})

//     if(!user){
//         return res.status(422).json({msg: 'Usuário não encontrado!'})
//     }

//     const checkPassword = await bcrypt.compare(password, user.password)

//     if(!checkPassword){
//         return res.status(422).json({msg: 'senha invalida'})
//     }

//     try{
//         const secret = process.env.SECRET
        
//         const token = jwt.sign(
//             {
//                 id: user._id,
//             },
//             secret
//         )
//         res.status(200).json({msg: 'Autenticação realizada com sucesso',token})
//     }catch(error){
//         res.status(500).json({msg:'Aconteceu um erro no servidor, tente novamente mais tarde', },)
//     }
// }
// module.exports = {
//     cadastrar,
//     logar
// }