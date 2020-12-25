require("dotenv").config(); // dotenv
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { protect } = require("./middleware/auth");

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// unprotected route
app.use("/api/user", require("./routes/api/user"));
app.use("/api/surrendered", require("./routes/api/surrendered_intake"));
app.use("/api/rescued", require("./routes/api/rescued_intake"));
app.use("/api/transferee",require("./routes/api/transferee_intake"))
app.use("/api/medical",require("./routes/api/medical_record"))
app.use("/api/intake",require("./routes/api/intake"))
app.use("/api/outtake",require("./routes/api/outtake"))
app.use("/api/dogs", require('./routes/api/dog'))
app.use("/api/clinic", require('./routes/api/clinic'))
app.use("/api/vaccine", require('./routes/api/vaccination'))
app.use("/api/person", require('./routes/api/person'))


app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>");
});
// routes below are protected, meaning it needs authentication and authorization
// app.use('/api',protect)

// nigger ****************************

// please put route middleware below, example
// app.use('/aaaa', require('./routes/api/aaaa'))

// routes are in the /routes/api folder, example of a route file is in routes/api/aaaa

const port = 3000;
app.listen(port, console.log(`Server listening at port ${port}`));
