const express = require("express");
const path = require("path");
const api = require("./routes/notes")
const htmlRoutes = require("./routes/htmlroute")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);
app.use("/", htmlRoutes);

app.use(express.static("public"));

app.listen(PORT, () =>
    console.log(`App is listening at http://localhost:${PORT}`)
);