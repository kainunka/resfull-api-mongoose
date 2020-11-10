// GET /data 
// GET /data/1
// POST /data 
// PUT /data/1 
// DELETE /data/1 

const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require("body-parser");

const Product = require('./model/product')

const options = {
    user: 'kainunka',
    pass: 'yukimuraseichi'
};
const version = "v1"
const port = process.env.PORT || 5000;

mongoose.connect(`mongodb+srv://${options.user}:${options.pass}@cluster0.iwbh3.mongodb.net/sampeng?retryWrites=true&w=majority`)

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get("/api/"+version+"/product", (req, res) => {
    if (!req.body) return res.sendStatus(400);

    Product.find({}, (err, results) => {
        if (err) return res.json({ status: false, message: "cannot get all product", code: err });

        if (results) {
            res.json({ status: true, message:"Successfully get product.", data: results })
        }
    })
})

app.get("/api/"+version+"/product/:id", (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const { id } = req.params

    Product.findById(id, (err, results) => {
        if (err) return res.json({ status: false, message: "cannot get product by id", code: err })
        if (results) {
            res.json({ status: true, message:"Successfully get product.", data: results })
        }
    })
})

app.delete("/api/"+version+"/product/:id", (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const { id } = req.params

    Product.findByIdAndDelete(id, (err, results) => {
        if (err) return res.json({ status: false, message: "cannot remove product", code: err })
        if (results) {
            res.json({ status: true, message: "Successfully remove product" })
            res.status(204).end()
        }
    })
})

app.put("/api/"+version+"/product/:id", (req, res) => {
    const payload = req.body
    const { id } = req.params

    Product.findByIdAndUpdate(id, { $set: payload }, (err, results) => {
        if (err) {
            res.json({ status: false, message: "cannot update product", code: err })
        } else {
            res.json({ status: true, message: "Successfully update product" })
        }
    })
})

app.post("/api/"+version+"/product", (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const product = new Product(req.body)
    product.save(req.body, (err, doc) => {
        if (err) return res.json({ status: false, message: "cannot add product", code: err });
        res.json({ status: true, message:"Successfully add product."})
    })
})

app.listen(port, () => {
    console.log("application is listening on:", port);
 })

 module.exports = app;