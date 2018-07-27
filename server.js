const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const actionModel = require("./data/helpers/actionModel");
const projectModel = require("./data/helpers/projectModel");

const server = express();

//middleware
server.use(express.json());
server.use(helmet());
server.use(cors({}));

//routing/endpoints

server.listen(8000, () => console.log("\n=== API running... ===\n"));
