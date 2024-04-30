const express = require("express");
const cors = require("cors");
const http = require("http");
require("dotenv").config();
require("./db/mongoConnect");
const {routesInit}=require("./routes/configRouts")

const app = express();// Initialize Express app
app.use(cors());
app.use(express.json()); // Parse JSON bodies


// Create HTTP server using Express app
const server =http.createServer(app);

routesInit(app);
// Define port number
const port = process.env.PORT || 3001

// Start server and listen for incoming requests
server.listen(port, () => {
    console.log("Server is running on port", port);
})
