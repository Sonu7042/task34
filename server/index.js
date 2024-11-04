const express = require("express");
const mongoConnect = require("./db");
const userModel = require("./mogoSchema");
const cors= require('cors')

mongoConnect();

const app = express();
app.use(express.json());
app.use(cors())





app.post("/save", async (req, res) => {
  try {
    const user = req.body;
    const data = await userModel.create(user);

    res.status(200).json({
      message: "Data save is  successfull",
      error: false,
      success: true,
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
});



app.get('/', async(req, res)=>{
    try{

        const data= await userModel.find()
        res.status(200).json({
            message: "Data is got  successfull",
            success:true,
            error:false,
            data:data
        })
    }
    catch(err){
        console.log(err)
    }

})


app.listen(9000, () => {
  console.log("server is running on port 9000");
});
