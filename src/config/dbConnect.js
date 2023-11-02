import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.gssk2ux.mongodb.net/roadmapdb?retryWrites=true&w=majority"
);

let db = mongoose.connection;

export default db;
