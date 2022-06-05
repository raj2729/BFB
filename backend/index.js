const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/config");
// const Pusher = require('pusher');
// const generatePDF = require("./generatePdf");
var axios = require("axios");
const bodyParser = require("body-parser");

const dataRouter = require("./routes/dataRouter");
const userRouter = require("./routes/userRouter");
const ngoRouter = require("./routes/ngoRouter");
const programRouter = require("./routes/programRouter");
const phoneCallRoutes = require("./routes/phoneCallRoutes");

const enrollmentRouter = require("./routes/enrollmentyROutes");
// Routes

dotenv.config();

// Connecting to mongodb server
connectDB();

// express application
const app = express();

// Body Parser middleware, no need to install body-parser package
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// allow CORS
app.use(cors());

//Port
const PORT = 8080 || process.env.PORT;

app.use("/data", dataRouter);
app.use("/user", userRouter);
app.use("/ngo", ngoRouter);
app.use("/program", programRouter);
app.use("/enrollment", enrollmentRouter);
app.use("/phoneCall", phoneCallRoutes);

app.get("/", function (req, res) {
  res.send("StackUnderFlow backend is working");
  console.log("StackUnderFlow backend is working");
});
const server = app.listen(8080, () => {
  console.log(`Server is running on port ${PORT}.`);
});
