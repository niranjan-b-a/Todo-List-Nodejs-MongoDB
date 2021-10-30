const mongoose = require("mongoose");

// const connectionString =
//     "mongodb+srv://niranjan:Niru2015@nodeprojects.uni2p.mongodb.net/taskManager?retryWrites=true&w=majority";

const connectDB = (url) => {
    return mongoose.connect(url, {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;
