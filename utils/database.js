import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      dbName: "share_prompt",
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("mongo connected");
  } catch (error) {
    console.log(error);
  }
};
