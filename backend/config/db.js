// create login to connect database
import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sahilpatil:33858627@cluster0.0ogbf.mongodb.net/food-del?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB Connected"));
};
