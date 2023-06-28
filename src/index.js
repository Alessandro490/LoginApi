const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoute = require("./routes/user");

const app = express();
const port = process.env.Port || 3000;

//middleware
app.use(express.json());
app.use('/api', userRoute);

//Define consult routes
app.get("/", (req, res) => {
    res.send("Todo funciona bien, bienvenido Diego");
});

//MongoDBConnection
mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log("Succesfully connected to MongoDB Atlas"))
.catch((error)=> console.error(error));

app.listen(port, ()=> console.log('server listening on port', port));
