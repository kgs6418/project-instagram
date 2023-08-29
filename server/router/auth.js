const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const cookieParser =require("cookie-parser");
const jwt = require('jsonwebtoken')

const authenticate = require("../middleware/authenticate")

router.use(cookieParser());

require('../db/conn.js')                        //requiring this to store data in db
const User = require('../model/userSchema.js')  //requiring this to store data in db

router.get('/',(req,res) =>{
    res.send("hello GAURAV from router")
})

//using promise: 
// router.post('/register',(req,res)=>{

//     const {name,username,email,password,bio}=req.body;

//     //validation
//     if(!name || !username || ! email || !password || !bio){
//         return res.status(422).json({error:"required field missing"})
//     }
//    //checking if the uses exist or not
//     User.findOne({email:email})
//         .then((userExist)=>{
//             if(userExist){
//                 return res.status(422).json({error:"user already exist"})
//             }
//             const user = new User({name,username,email,password,bio})
            

//             user.save().then(()=>{
//                 res.status(201).json({message:"user saved"})
//             }).catch((error)=>{
//                 res.status(500).json({error:"user not saved"})
//             })

        
//     }).catch((err)=>{
//         console.log(err)
//     })



//register route ==> using async and await:

    router.post('/register',async(req,res)=>{
        const {name,username,email,password,bio}=req.body;
    
        //validation

        if(!name || !username || ! email || !password || !bio){
            return res.status(422).json({error:"required field missing"})
        }

       //checking if the uses exist or not

       try {
            const userExist =  await User.findOne({email:email})
            if(userExist){
             return res.status(422).json({error:"user already exist"})
            }

         const user = new User({name,username,email,password,bio});

            // password hash here   ==> in userScema.js
            
            await user.save()    
            res.status(201).json({message:"user saved successfully"})
   
        } catch (error) {
             console.log(err)
       }

})

// login route:
router.post('/login',async(req,res)=>{
    try {
        let token;
        //checking for empty field
        const {username,password}=req.body

        if(!username || !password){
            return res.status(400).json({error:"please enter your the username and password"})
        }
        
        //checking for username
        const userLogin = await User.findOne({username:username});
        //if username is matched with the database  then we will match the password for that username with the entered password.
        if (userLogin) {
                    const passwordMatch = await bcrypt.compare(password,userLogin.password);

                    //jwt token generation.
                     token = await userLogin.generateAuthToken();
                    console.log(token)

                    //storing jwt token in cookie.
                    res.cookie("jwtoken",token,{
                        expires: new Date(Date.now()+25892000000),
                        httpOnly:true
                        
                    });


                    
                    if(!passwordMatch){
                         return res.status(400).json({message:"Invalid Credentials"})
                        }else{
                            return res.status(200).json({message:"login successfull"})
                        }
                
      
        } else {
            return res.status(400).json({message:" error ==> Invalid Credentials"})
        }
      
    } catch (error) {
        
    }
})


//about us page . (using middleware)

router.get('/about',authenticate,(req,res) =>{
    // console.log("hello my about")
    res.send(req.rootUser)
})

//logout page .

router.get('/logout',(req,res) =>{
    res.clearCookie('jwtoken' ,{path:'/'});
    res.status(200).send("user logout")
})



module.exports = router;