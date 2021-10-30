const express = require("express");
const connectDB = require("./db/connect");
require("dotenv").config();

const tasks = require("./routes/task");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

//middleware
app.use(express.static("./public"));

app.use(express.json());

//routes
app.use("/api/v1/tasks/", tasks);

app.use(notFound);
app.use(errorHandler);

// Start Application
const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log("App is running");
        });
    } catch (error) {
        console.log(error);
    }
};
start();
