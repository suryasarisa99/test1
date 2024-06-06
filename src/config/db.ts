import { connect } from "mongoose";

const collection = "sample";

const DB_URL = `mongodb+srv://suryasarisa99:${process.env.DB_PASS}@cluster0.xtldukm.mongodb.net/${collection}?retryWrites=true&w=majority`;

const dbConnection = async () => {
  return connect(DB_URL, {})
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(process.env.DB_PASS);
      console.log(err);
    });
};

export default dbConnection;
