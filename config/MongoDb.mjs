import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();


const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://AMEER:TestingPuprpose@cluster0.boegp.mongodb.net/abcdatabase?retryWrites=true&w=majority"//"mongodb+srv://admin:admin1234@shoeshop.ine39qq.mongodb.net/?retryWrites=true&w=majority"
      ,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;

// "mongodb+srv://AMEER:882292@cluster0.boegp.mongodb.net/abcdatabase?retryWrites=true&w=majority",
