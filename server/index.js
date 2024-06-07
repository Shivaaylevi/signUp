import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { signup } from "./models/signup.js";

const app=express();
app.use(express.json());
app.use(cors())

const port =8080;


mongoose.connect("mongodb://127.0.0.1:27017/signup");

app.post("/register",(req,res)=>{
    signup.create(req.body)
    .then((employess)=>res.json(employess))
    .catch((err)=>res.json(err))
})
app.post("/login",(req,res)=>{
    const {email,password}=req.body
    signup.findOne({email:email})
    .then((user)=>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("incorrect");
            }
        }else{
            res.json("no record existed");
        }
    })
})

app.listen(port,()=>{
    console.log(`App is running at port ${port}`);
})