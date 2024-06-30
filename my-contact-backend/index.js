const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/ErrorHandler")
const connectDB  = require("./config/dbConnection")



connectDB()
const app = express();
app.use(express.json())
app.use(errorHandler)
const port = process.env.PORT || 8000;



app.use("/api/contact", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`Server up and running at port ${port}`);
});
