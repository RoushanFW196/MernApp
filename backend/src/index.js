//require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({
  path: "",
});

import connectDB from "./db/index.js";
connectDB();

console.log('hello world44')