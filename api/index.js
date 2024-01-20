const express = require('express');     
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = require('./models/User');
const app = express();

mongoose.connect("mongodb+srv://ajarofpeanuts:<Z$Ztroqy^Ns5h7yk>@cluster.zcwwmbg.mongodb.net/?retryWrites=true&w=majority")

app.get('/test', async (req,res) => {
  res.json('test ok');
});

app.post('/register', async (req, res) => {
  const{ username, password } = req.body;
  try {
    const user = await User.create({
      username,
      password
    });
    res.json(userDoc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Users must be unique
  const user = await User.findOne({username});
  const validPassword = password === user.password;

  if(validPassword) {
    jwt.sign({ username, id:user._id }, {}, (err,token) => {
      if(err) throw err;
      res.cookie('token', token).json({
        id:user._id,
        username,
      })
    })
  } else {
    res.status(400).json("Incorrect credentials");
  }
})




app.listen(4000);
