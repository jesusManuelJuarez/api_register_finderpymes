import express from "express";
import { dataRouter } from "./data/infrastructure/DataRouter";
import { Signale } from "signale";
//import { fiscalRouter } from "./fiscal/infrastructure/FiscalRouter";
//import { sourceRouter } from "./source/infrastructure/SourceRouter";

const app = express();
const signale = new Signale();

app.use(express.json());

// Rutas para los recursos de clientes y cargos
app.use("/data", dataRouter);
//app.use("/fiscal", fiscalRouter);
//app.use("/source", sourceRouter);

app.listen(3000, () => {
  signale.success("[Application] Server online on port 3000");
});

