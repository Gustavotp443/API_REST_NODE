import dotenv from "dotenv";
dotenv.config();

import './database'

import express  from "express";
import routes from "./routes/index.js"


const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

routes(app);

export default app;
