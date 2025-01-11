import express from "express";
import { User } from "./Models/User.js";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';

mongoose.connect('mongodb://localhost:27017/registration');

const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', async (req, res) => {
    try {
      const { name, email, contact, gender, password } = req.body;
      const newUser = new User({ name, email, contact, gender, password });
      await newUser.save();
      res.status(200).send({ message: 'User registered successfully!' });
      console.log(req.body);
    } catch (error) {
      res.status(500).send({ message: 'Error registering user', error });
    }
  });


  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(400).send({ message: 'User not found' });
      }
  
      
      if (user.password != password) {
        return res.status(400).send({ message: 'Invalid password' });
      }
  
      res.status(200).send({ message: 'Logged in successfully!',name:user.name});

  
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error logging in', error });
    }
  });

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})