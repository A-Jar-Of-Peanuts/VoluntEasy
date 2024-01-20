const express = require('express');

const app = express();

app.get('/test', async (req,res) => {
  res.json('test ok');
});


app.listen(4000);
