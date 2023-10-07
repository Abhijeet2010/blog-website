import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connection sucss");
  } catch (error) {
    throw new Error("connection Failed");
  }
};
export default connect;
