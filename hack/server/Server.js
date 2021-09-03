const express = require("express")
const app = express()
require("dotenv").config();


// allow parse on request body
app.use(express.json())

// import routes for api
const watsonRoutes = require("../routes/api/Watson")

// Direct client requests to /api/watson to Watson Routes
app.use("/api/watson", watsonRoutes)



// start server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("server is running on https://localhost:"+ PORT)
})