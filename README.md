# resfull-api-mongoose

Example Restfull api coding test.

GET /product  \
GET /product/:id \
POST /product \
PUT /product/:id \
DELETE /product/:id


**Product schema**

        {
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
        }
 

