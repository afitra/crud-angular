const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const { ObjectId } = mongoose.Schema
const VisitorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  remark: {
    type: String,
    required: true,
  },
  npwp: {
    type: String,
    required: true,
  },
  costumer_category: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  expedition: {
    type: String,
    required: true,
  },

  sales_id: {
    type: ObjectId,
    ref: "Sales",
  },
})

module.exports = mongoose.model("Visitor", VisitorSchema)
