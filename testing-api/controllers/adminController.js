const Admin = require("../models/Admin"),
  Visitor = require("../models/Visitor"),
  Sales = require("../models/Sales"),
  bcrypt = require("bcryptjs"),
  date = require("date-and-time")
module.exports = {
  actionSignIn: async (req, res) => {
    try {
      const { username, password } = req.body

      const admin = await Admin.findOne({ username: username })
      if (!admin) {
        res.status(500).json({
          status: false,
          message: "User yang anda masukan tidak ada!!",
        })
      }
      const isPasswordMatch = await bcrypt.compare(password, admin.password)
      if (!isPasswordMatch) {
        res.send("Password yang anda masukan tidak cocok!!")
      }
      req.session.user = {
        id: admin.id,
        username: admin.username,
      }

      res.status(201).json({ status: true, message: "anda berhasil login" })
    } catch (err) {
      res.status(500).json({ status: false, message: err.message })
    }
  },

  actionLogout: (req, res) => {
    req.session.destroy()
    res.status(201).json({ status: true, message: "anda berhasil logout" })
  },
  actionAddVisitor: async (req, res) => {
    try {
      const {
        name,
        pic,
        city,
        remark,
        npwp,
        costumer_category,
        address1,
        address2,
        contact,
        region,
        province,
        expedition,
        sales_id,
      } = req.body
      const sales = await Sales.findOne({ _id: sales_id })

      const newVisitor = {
        name,
        pic,
        city,
        remark,
        npwp,
        costumer_category,
        address1,
        address2,
        contact,
        region,
        province,
        expedition,
        sales_id: sales._id,
      }

      const visitor = await Visitor.create(newVisitor)
      res.status(201).json({ status: true, visitor })
    } catch (err) {
      res.status(500).json({ status: false, message: err.message })
    }
  },
  getQueue: async (req, res) => {
    try {
      var queue = await Visitor.find().estimatedDocumentCount()
      // queue += 1

      if (queue < 10) {
        queue = `A00${queue}`
      } else if (queue < 100) {
        queue = `A0${queue}`
      } else {
        queue = `A${queue}`
      }

      const time = date.format(new Date(), "DD/MM/YYYY , HH:mm:ss")

      res.status(201).json({ status: true, time, queue })
    } catch (err) {
      res.status(500).json({ status: false, message: err.message })
    }
  },
  getVisitor: async (req, res) => {
    try {
      const visitor = await Visitor.find().populate({
        path: "sales_id",
      })
      const sales = await Sales.find()

      res.status(201).json({ status: true, visitor, sales })
    } catch (err) {
      res.status(500).json({ status: false, message: err.message })
    }
  },
  getVisitor: async (req, res) => {
    try {
      const visitor = await Visitor.find().populate({
        path: "sales_id",
      })
      const sales = await Sales.find()

      res.status(201).json({ status: true, visitor, sales })
    } catch (err) {
      res.status(500).json({ status: false, message: err.message })
    }
  },
  getOneVisitor: async (req, res) => {
    try {
      const id = req.params.id,
        visitor = await Visitor.findOne({
          _id: id,
        })
      const sales = await Sales.find()
      res.status(201).json({ status: true, visitor, sales })
    } catch (err) {
      res.status(500).json({ status: false, message: err.message })
    }
  },
  editVisitor: async (req, res) => {
    try {
      const { id } = req.params,
        {
          name,
          pic,
          city,
          remark,
          npwp,
          costumer_category,
          address1,
          address2,
          contact,
          region,
          province,
          expedition,
          sales_id,
        } = req.body,
        visitor = await Visitor.findOne({ _id: id }).populate({
          path: "sales_id",
        })
      console.log(visitor)
      var editedVisitor = JSON.parse(JSON.stringify(visitor))
      visitor.name = name
      visitor.pic = pic
      visitor.city = city
      visitor.remark = remark
      visitor.npwp = npwp
      visitor.costumer_category = costumer_category
      visitor.address1 = address1
      visitor.address2 = address2
      visitor.contact = contact
      visitor.region = region
      visitor.province = province
      visitor.expedition = expedition
      visitor.sales_id = sales_id

      await visitor.save()

      res.status(201).json({ status: true, visitor: editedVisitor })
    } catch (err) {
      res.status(500).json({ status: false, message: err.message })
    }
  },
  deleteVisitor: async (req, res) => {
    try {
      const { id } = req.params
      const visitor = await Visitor.findOne({ _id: id })

      await visitor.remove()
      res
        .status(200)
        .json({ status: true, message: "visitor has been deleted" })
    } catch (err) {
      res.status(500).json({ status: false, message: err.message })
    }
  },
}
