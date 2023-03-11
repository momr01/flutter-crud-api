const { Schema, model } = require("mongoose");
const clientSchema = new Schema({
  name: String,
  surname: String,
  phone: String,
});

module.exports = model("Client", clientSchema);
