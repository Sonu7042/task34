const mongoose= require('mongoose')


const link= "mongodb+srv://sonu:sonu12345@cluster0.nm1ge.mongodb.net/"


const mongoConnect= async()=>{
    try{
         await mongoose.connect(link)
         console.log("db is connected")
    }
    catch(err){
        console.log("this is  error",err)

    }

}


module.exports = mongoConnect
