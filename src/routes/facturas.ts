import { Router } from "express";
import FacturaController from "../controller/FacturaController";




const routes = Router();

routes.get('', FacturaController.getAll);
routes.get('/:Numero', FacturaController.getById);
routes.delete('/:Numero', FacturaController.delete);



export  default routes;