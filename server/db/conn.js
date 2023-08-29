const mongoose = require('mongoose')
const DATABASE=process.env.DATABASE;


mongoose.connect(DATABASE)
        .then(()=>{console.log('app is  connected to database')})
        .catch((error)=>{'app is not connected'})