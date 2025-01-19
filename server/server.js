import express from 'express';
import dotenv from "dotenv";
import {connectDB} from './config/db.js';
import productRoutes from './routes/productroutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use("/api/products", productRoutes)

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:"+PORT);

});