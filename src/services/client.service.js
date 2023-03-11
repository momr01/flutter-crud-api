const clientModel = require("../models/client.model");

class ClientService {
  ClientService() {}

  async getClients() {
    try {
      return await clientModel.find();
    } catch (error) {
      return error;
    }
  }

  async addClient(client = new clientModel()) {
    try {
      var clientSaved;
      await clientModel.create(client).then((value) => (clientSaved = value));

      return clientSaved;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteClient(id) {
    console.log(id);
    var clientDeleted;
    try {
      await clientModel
        .findOneAndRemove({
          _id: id,
        })
        .then((value) => {
          clientDeleted = value;
        });

      return clientDeleted;
    } catch (error) {
      console.log(error);
    }
  }

  async updateClient(newClient) {
    var clientUpdated;
    try {
      await clientModel
        .findOneAndUpdate(
          {
            _id: newClient._id,
          },
          newClient
        )
        .then((value) => (clientUpdated = newClient));

      return clientUpdated;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ClientService();
