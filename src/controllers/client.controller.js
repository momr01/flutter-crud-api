const clientService = require("../services/client.service");

const getClients = async (req, res) => {
  res.json({
    clients: await clientService.getClients(),
  });
};

const addClient = async (req, res) => {
  console.log(req.body);
  res.json({
    client: await clientService.addClient(req.body),
  });
};

const deleteClient = async (req, res) => {
  res.json({
    client: await clientService.deleteClient(req.params.id),
  });
};

const updateClient = async (req, res) => {
  res.json({
    client: await clientService.updateClient(req.body),
  });
};

module.exports = { getClients, addClient, deleteClient, updateClient };
