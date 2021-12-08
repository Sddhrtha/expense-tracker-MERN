const express =  require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const expensesRouter = require("./routes/expenses.js");

require('dotenv').config();


const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection establised successfully");
})



app.use("/expenses", expensesRouter);

app.use("*", (req, res) => res.status(404).json({ error: "going here"}))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});