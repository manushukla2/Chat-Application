import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
import { app, server } from './socket/socket.js';
import path from "path";


const __dirname = path.resolve();
const PORT= process.env.PORT || 5000;
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))

})

app.get("/",(req,res)=>{
    res.send("Hello !!");
})


app.get("/update",async(req,res)=>{
    try {
        const Users= require('./models/user.model.js');
        const allUser=await Users.find();
        Promise.all(allUser.map(async(user)=>{
            user.profilePic="https://www.w3schools.com/howto/img_avatar.png";
            await user.save();
        }))

        return res.status(200).json({message:"Profile Pic Updated"});
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"});
    }
})



server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});