const { app } = require("./app");
const { dbConnection } = require("./database");

async function main() {
  //Primero nos conectamos a la base de datos
  await dbConnection();

  //Ahora iniciamos el servidor
  await app.listen(4002);
}

main();
