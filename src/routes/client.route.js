const { Router } = require("express");
const {
  getClients,
  addClient,
  deleteClient,
  updateClient,
} = require("../controllers/client.controller");
const router = Router();

router.get("/api/clients", getClients);
router.post("/api/clients/register", addClient);
router.delete("/api/clients/delete/:id", deleteClient);
router.put("/api/clients/update", updateClient);

module.exports = router;
