const mongoose = require('mongoose')
const schema = mongoose.Schema
const mongooseUniqueValidator = require('mongoose-unique-validator')

const product = new schema({
    name: { type: String },
    description: { type: Object },
    detail: { type: String },
    photoURL: { type: String },
    thumbnailURL: { type: String},
    album: { type: Object },
    createdAt: { type: Number},
    modifiedAt: { type: Number},
    category: { type: Object },
    stock: { type: Number },
    status: { type: String },
    price: { type: Number },
    comment: { type: Object },
    promotion: { type: Object },
    colorLabel: { type: Object }
})

product.plugin(mongooseUniqueValidator)
module.exports = mongoose.model('Product', product)