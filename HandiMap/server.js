const express = require("express");
const path = require("path");
const { sequelize } = require("./models");
const estRoutes = require("./routes/establishments");
const searchRoutes = require("./routes/search");
const questRoutes = require("./routes/questionnaire");
const noteRoutes = require("./routes/notes");
const notesRouter = require("./routes/notes");

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Sync without dropping existing tables
sequelize.sync();

// Routes
app.use("/", searchRoutes);
app.use("/establishments", estRoutes);
app.use("/questionnaire", questRoutes);
app.use("/notes", noteRoutes);
app.use("/", notesRouter);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
