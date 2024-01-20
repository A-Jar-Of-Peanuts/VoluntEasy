const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://ajarofpeanuts:<Z$Ztroqy^Ns5h7yk>@cluster.zcwwmbg.mongodb.net/?retryWrites=true&w=majority")

app.get('/test', async (req,res) => {
  res.json('test ok');
});

app.post('')





app.listen(4000);
