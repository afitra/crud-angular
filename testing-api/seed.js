var seeder = require("mongoose-seed")
var mongoose = require("mongoose")
require("dotenv").config()
var dbUrl = null
if (process.env.ONLINE_MONGO_DB == "true") {
  dbUrl = process.env.MONGO_ONLINE_ON
} else {
  dbUrl = process.env.MONGO_ONLINE_OFF
}
console.log(dbUrl)

// Connect to MongoDB via Mongoose
seeder.connect(
  dbUrl,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  function () {
    // Load Mongoose models
    seeder.loadModels(["./models/Admin", "./models/Sales", "./models/Visitor"])

    // Clear specified collections
    seeder.clearModels(["Admin"], function () {
      // Callback to populate DB once collections have been cleared
      seeder.populateModels(data, function () {
        seeder.disconnect()
      })
    })
  }
)
var data = [
  {
    model: "Admin",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903345"),
        username: "admin",
        password: "rahasia",
      },
    ],
  },
  {
    model: "Sales",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903346"),
        name: "budi",
        id: "SLS-1",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903311"),
        name: "bejo",
        id: "SLS-2",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903322"),
        name: "imam",
        id: "SLS-3",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903333"),
        name: "mad",
        id: "SLS-4",
      },
    ],
  },
  {
    model: "Visitor",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903323"),
        name: "frans",
        pic: "this is pic",
        city: "kediri",
        remark: "this is remark",
        npwp: "123456",
        costumer_category: "this is costumer_category",
        address1: "this is address1",
        address2: "this is address2",
        contact: "628523000000",
        region: "this is region",
        province: "this is province",
        expedition: "this is expedition",

        sales_id: mongoose.Types.ObjectId("5e96cbe292b97300fc903346"),
      },
    ],
  },
]
