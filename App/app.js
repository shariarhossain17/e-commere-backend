const express = require('express');
const app = express()
const cors = require('cors');




app.use(cors());
app.use(express.json())


const useRouter = require('../route/product.route')

app.use('/api/v1/product',useRouter)



module.exports = app