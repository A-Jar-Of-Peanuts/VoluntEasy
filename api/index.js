require('dotenv').config();
const express = require('express');     
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cookie_parser = require('cookie-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');


const User = require('./models/User');
const Post = require('./models/Post');
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

// Creating a new post 
app.post('/post', async (req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async(error, info) => {
    if(error) throw error;
    const {title, location, description, time, lat, lng} = req.body;
    const postDocument = await Post.create({
      title,
      location,
      description,
      time,
      lat,
      lng,
      author: info.id,
    })
    res.json(postDocument);
  })
});

app.get('/post', async(req, res) => {
  res.json(await Post.find()
  .populate('author', ['username'])
  .sort({createdAt:-1})
  .limit(20));
})

app.get('/post/:id', async(req,res) => {
  const {id} = req.params;
  const postDocument = await Post.findById(id).populate('author', ['username']);
  res.json(postDocument);
})

app.put('/update-created', async(req,res) => {
  const {user_id, post_id} = req.body;
  console.log(user_id);
  console.log(post_id);
  const user = await User.findById(user_id)
  await user.updateOne({
    username: user.username,
    password: user.password,
    eventsCreated: user.eventsCreated.push(post_id),
    eventsSubscribed: user.eventsSubscribed,
  });
  res.json(user);
})



app.listen(4000);
