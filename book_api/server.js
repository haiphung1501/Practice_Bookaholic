const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require("morgan");
const dotenv = require("dotenv");
const bookRoute = require("./routes/book");
const userRoute = require("./routes/user")

const app = express();
dotenv.config();

mongoose.connect((process.env.MONGODB_URL), () => {
    console.log("Connected to MongoDB");
});

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(3000, () => {
    console.log("Book API running on port 3000! ")
});

