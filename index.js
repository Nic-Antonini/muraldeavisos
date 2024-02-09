const PORT = 2000;
const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api');

app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, "public")))
app.listen(PORT, () => {
    console.log("SERVER RUNNING ON PORT", PORT);
});

