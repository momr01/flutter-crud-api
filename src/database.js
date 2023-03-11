const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://momr01:Heartstopper01@cluster0.koly3.mongodb.net/RestApiFlutter?retryWrites=true&w=majority";

const dbConnection = async () => {
  try {
    console.log("Conectando DB...");
    await mongoose.connect(MONGODB_URI, {
      //useCreateIndex: true,
      //useFindAndModify: false,
      useNewUrlParser: false,
      useUnifiedTopology: true,
    });
    console.log("Conectado!");
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  dbConnection,
};
