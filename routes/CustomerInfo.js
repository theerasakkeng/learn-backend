const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");


//GetCustomerInfo
router.get("/CustomerInfo", async (req, res) => {
  try {
    const customer = await Customer.find();
    res.json({ status: "success",data: customer });
  } catch (err) {
    res.json({ message: err });
  }
});

//InsertCustomerInfo
router.post("/CustomerInsert", async (req, res) => {
  const customer = new Customer({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  });
  try {
    const saveCustomer = await customer.save();
    res.json(saveCustomer);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
