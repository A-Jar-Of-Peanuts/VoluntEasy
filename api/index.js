require('dotenv').config();
const express = require('express');     
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cookie_parser = require('cookie-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');


const User = require('./models/User');
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000"}));
app.use(express.json());
app.use(cookie_parser());
mongoose.connect(process.env.DATABASE_URL);
const secret = process.env.SECRET;
const salt = bcrypt.genSaltSync(10);

app.get('/test', async (req,res) => {
  res.json('test ok');
});

// Registering a new user
app.post('/register', async (req, res) => {
  const{ username, password } = req.body;
  try {
    const user = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
})

// Signin in a user
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Users must be unique
  const user = await User.findOne({username});
  const validPassword = bcrypt.compareSync(password, user.password);

  if(validPassword) {
    jwt.sign({ username, id:user._id }, secret, {}, (err,token) => {
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
