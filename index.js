import express from "express";
import { connectDB } from "./db/connection.js";
import { appRouter } from "./src/app.router.js";
import dotenv from "dotenv";
dotenv.config();  //path
const app = express()
const port = process.env.PORT;


connectDB();

appRouter(app,express);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))