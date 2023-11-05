const express = require("express")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const mongoose = require('mongoose');
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const cors = require("cors")

const app = express()
dotenv.config()


// middleware
app.use(express.json())
app.use(helmet());
app.use(morgan("common"))
app.use(cors())

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)



app.listen(process.env.PORT,async() => {
   try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("server is connected to mongodb")
   }catch(err){
        console.log("Can not connected to mongodb")
        console.log(err)
   }
    console.log(`server is running on port ${process.env.PORT}`)
})