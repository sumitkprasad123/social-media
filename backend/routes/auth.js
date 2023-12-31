const express = require("express")
const router = express.Router()
const User = require("../model/user")
const bcrypt = require('bcrypt');


// New user Register
router.post("/register", async(req,res) => {

   try{
        // generate password
        const salt = await bcrypt.genSalt(5)
        const hashPassword = await bcrypt.hash(req.body.password,salt)

        // create new users
        const newUser = new User({
              username:req.body.username,
              email:req.body.email,
              password:hashPassword,
        });
        
        // save user and respond
        const user = await newUser.save();
        res.status(200).json(user)
   }catch(err){
        return  res.status(400).json(err)
   }
})


// Login existing user
router.post("/login",async(req,res) => {
   try{
      const user = await User.findOne({email:req.body.email});
         if(!user){
            return res.status(404).json("user not found")
         }
   
      const validPassword = await bcrypt.compare(req.body.password,user.password)
         if(!validPassword){
            return res.status(400).json("wrong password")
         }
      
      res.status(200).json(user)
   }catch(err){
      res.status(500).json(err);
   }
});

module.exports = router;