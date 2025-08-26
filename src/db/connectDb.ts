import { connect } from "mongoose";

const connectDb = async () => {
  try {
    const { connection } = await connect(
      "mongodb+srv://shaikha:sCGdUIX6BQj3At3k@cluster0.sectmds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(connection.host);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDb;
