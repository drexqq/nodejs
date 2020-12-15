const express = require("express");
const app = express();
const port = 3003;
const api = require("./routes/index");
const cors = require("cors");

app.use(cors());
app.use("/api", api);

app.listen(port, () => console.log(`Listening on port ${port}`));
