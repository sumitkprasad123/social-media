const express = require("express")
const dotenv = require("dotenv")
 /* helmet is popular npm middleware for securing Express.js applications by setting various HTTP headers 
 that enhance security quickly and protect them from various common web vulnerabilities*/
const helmet = require("helmet")

// middleware that provides request logging and HTTP request/response information
const morgan = require("morgan")
const cors = require("cors")
// const multer = require("multer")
const connection = require("./db")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

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

/*
// multer for file/text uploading
// It tells Express to serve files from a specific location on your server.

const storage = multer.diskStorage({
     destination: (req,file,cb) => {
          cb(null, "public/image");
     },
     filename:(req,file,cb) => {
          cb(null,req.body.name);
     },
})

const upload = multer({ storage:storage });
app.post("/api/upload", upload.single("file"), (req,res) => {
     try{
          return res.status(200).json("File uploaded successfully");
     }catch(err){
          console.log(err)
     }
});
*/


app.listen(process.env.PORT,async() => {
   try{
        await connection
        console.log("server is connected to mongoDB")
   }catch(err){
        console.log("Can not connected to mongoDB")
        console.log(err)
   }
    console.log(`server is running on port ${process.env.PORT}`)
})