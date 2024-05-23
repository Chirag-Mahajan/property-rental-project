import express from 'express';
import zod from 'zod';
const router=express.Router();

import User from '../db.js'
import jwt from 'jsonwebtoken';
import JWT_SECRET from '../config.js';
router.get('/signup');
const signupSchema=zod.object({
    userName:zod.string(),
    email:zod.string().email(),
    password:zod.string(),
})

router.post('/signup',async(req,res)=>{
    const body=req.body;
    const {success}=signupSchema.safeParse(body);
    console.log(body);
    if(!success) {
        return res.json({
            message:"Incorrect Inputs"
        })
    };
    const ifExists=await User.findOne({
        userName:req.body.userName,
    });
    if(ifExists) {
        return res.json({
            message:"User Already Exists"
        })
    }
    const user=await User.create ({
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password,
    })
    const userId=user._id;
    const token=jwt.sign({
        userId,
    },JWT_SECRET);
    res.json({
        message:"User Created Successfully",
        token:token,
    })

})



const signinBody=zod.object({
    email: zod.string().email(),
    password: zod.string()
})
router.post("/signin",async(req,res)=>{
    const { success }=signinBody.safeParse(req.body);
    console.log(req.body)
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs || email already taken"
        });
    }
    const user=await User.findOne({
        email:req.body.email,
        password:req.body.password,
});
console.log(user);
              if(user){
                const token=jwt.sign({
                    userId:user._id,
                },JWT_SECRET); 

                res.json({
                   
                    token: token,
                });
                return;
              }
              res.status(401).json({
                  message: "error While logging in"
              });
       
});
export default router;