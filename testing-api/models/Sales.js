const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const SalesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("Sales", SalesSchema)
