const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

// Set the allowed origin to your React frontend URL
const corsOptions = {
    origin: process.env.URL, // Replace with your frontend's URL
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/database').connect()

const user = require("./routes/user");
app.use("/api/", user);

// Serve static files from the "uploads" directory
app.use('/uploads', express.static('uploads'));

const product = require("./routes/productsRoute");
app.use("/api/products", product);

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});
