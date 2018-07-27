const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const projectModel = require("./data/helpers/projectModel");
const actionModel = require("./data/helpers/actionModel");

const server = express();

//middleware
server.use(express.json());
server.use(helmet());
server.use(cors({}));

//routing/endpoints

//projectModel
server.get("/api/projects", (req, res) => {
  projectModel
    .get()
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.get("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  projectModel
    .get(id)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.get("/api/projects/:id/actions", (req, res) => {
  const { id } = req.params;
  projectModel
    .getProjectActions(id)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.post("/api/projects", (req, res) => {
  const project = req.body;
  projectModel
    .insert(project)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.put("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  projectModel
    .update(id, changes)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.delete("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  projectModel
    .remove(id)
    .then(response => {
      res.json({ response });
    })
    .catch(error => {
      return error;
    });
});

//actionModel
server.get("/api/actions", (req, res) => {
  actionModel
    .get()
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.get("/api/actions/:id", (req, res) => {
  const { id } = req.params;
  actionModel
    .get(id)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.post("/api/actions", (req, res) => {
  const action = req.body;
  actionModel
    .insert(action)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      return error;
    });
});

server.delete("/api/actions/:id", (req, res) => {
  const { id } = req.params;
  actionModel
    .remove(id)
    .then(response => {
      res.json({ response });
    })
    .catch(error => {
      return error;
    });
});

server.listen(8000, () => console.log("\n=== API running... ===\n"));
