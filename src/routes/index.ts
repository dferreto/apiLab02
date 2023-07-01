import { Router } from "express";
import productos from "./productos";
import proveedores from "./proveedores";
import vendedores from "./vendedores";
import clientes from "./clientes";
import facturas from "./facturas";




const routes = Router();

routes.use('/Producto', productos);
routes.use('/Proveedor', proveedores);
routes.use('/Vendedor', vendedores);
routes.use('/Cliente', clientes);
routes.use('/Factura', facturas);



export default routes;