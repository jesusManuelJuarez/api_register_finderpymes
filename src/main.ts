import express from "express";
import { dataRouter } from "./data/infrastructure/DataRouter";
import { fiscalRouter } from "./fiscal/infrastructure/FiscalRouter";
import { addressRouter } from "./address/infrastructure/AddressRouter";
import { Signale } from "signale";
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';


const app = express();



const signale = new Signale();

app.use(express.json());
const swaggerDocument = YAML.load('swagger.yaml');


// Rutas para los recursos de data fiscal, source y address
app.use("/data", dataRouter);
app.use("/fiscal", fiscalRouter);
app.use("/address", addressRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(3000, () => {
  signale.success("[Application] Server online on port 3000");
});

