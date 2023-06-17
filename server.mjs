import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.mjs";
import ImportData from "./DataImport.mjs";
import productRoute from "./Routes/ProductRoutes.mjs";
import { errorHandler, notFound } from "./Middleware/Errors.mjs";
import userRouter from "./Routes/UserRoutes.mjs";
import orderRouter from "./Routes/orderRoutes.mjs";
import cors from "cors";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());
app.use(cors());

// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
