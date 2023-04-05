import express from 'express';
import HelloController from './controllers/hello-controller.js';
import UserController from './controllers/users/users-controller.js';
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

mongoose.connect(CONNECTION_STRING);


const app = express()
app.use(express.json());
app.use(cors());
HelloController(app)
UserController(app)
TuitsController(app)
app.listen(4000)