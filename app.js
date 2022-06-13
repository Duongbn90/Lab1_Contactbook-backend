const express = require("express");
const cors = require("cors");
const contactsRouter = require("./routes/contact.route");
var bodyParser = require('body-parser');
const ApiError = require("./api-error");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({message: "Chao mung den voi ung dung quan ly danh ba!"});
});

app.post("/login", (req, res) => {
    res.json({message: req.body.username});
});

app.use("/api/contacts", contactsRouter);
app.use((req, res, next) => {
    return next(new ApiError(404, "Resource Not found"));
});

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});
module.exports = app;