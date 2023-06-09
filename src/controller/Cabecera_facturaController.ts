import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Cabecera_factura } from "../entity/Cabecera_factura";




class Cabecera_facturaController{


    static getCabecera_facturas = async (req:Request, resp:Response)=>{

        try{

            const facturasRepo=AppDataSource.getRepository(Cabecera_factura);

        const listaFacturas = await facturasRepo.find();

        if(listaFacturas.length==0){

            return resp.status(404).json({mensaje:'No se encontró resultados'});
        }

        return resp.status(200).json({listaFacturas});

        } catch(error){
            return resp.status(400).json({mensaje:error});
        }
        
    }

     



}
        



export default Cabecera_facturaController;