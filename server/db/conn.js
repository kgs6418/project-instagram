const mongoose = require('mongoose')
const DATABASE=process.env.DATABASE;


mongoose.connect("mongodb+srv://gs201082:gs201082@cluster0.znqwadq.mongodb.net/instadata")
        .then(()=>{console.log('app is  connected to database')})
        .catch((error)=>{'app is not connected'})
