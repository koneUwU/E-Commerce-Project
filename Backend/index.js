const express = require('express')
const app = express()
app.use(express.json())

const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
app.use(cors())

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database connect successful!"))
    .catch((err) => console.log(err))

const userRoute = require('./routes/user')
app.use('/api/users', userRoute)

const authRoute = require('./routes/auth')
app.use('/api/auth', authRoute)

const productRoute = require('./routes/product')
app.use('/api/products', productRoute)

const cartRoute = require('./routes/cart')
app.use('/api/carts', cartRoute)

const orderRoute = require('./routes/order')
app.use('/api/orders', orderRoute)

const stripeRoute = require("./routes/stripe");
app.use("/api/checkout", stripeRoute);

port = 5000
app.listen(process.env.PORT || port, () => {
    console.log(`Backend server is running at port ${process.env.PORT || port}`)
})