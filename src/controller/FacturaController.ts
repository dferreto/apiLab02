import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Cabecera_factura } from "../entity/Cabecera_factura";



class FacturaController{

static getAll = async (req:Request, resp:Response)=>{

    try {
        
        const repoFact= AppDataSource.getRepository(Cabecera_factura);
        let lista;
        try {
            lista = await repoFact.find({where:{estado:true}, relations:{detalle_factura: true, vendedor: true, cliente: true}});
        } catch (error) {
            return resp.status(404).json({mensaje:"No se encontraron datos"});
        }
        if (lista.lenght !==0){
        return resp.status(200).json(lista);
    }
    } catch (error) {
        return resp.status(400).json({mensaje:"Error al cargar datos"});
    }
};

static getById = async (req:Request, resp:Response)=>{
    
    try{

        const Numero = parseInt(req.params["Numero"]);

    if(!Numero){

        return resp.status(404).json({mensaje: 'No se indica el Número'});
    }
    
    const facturasRepo=AppDataSource.getRepository(Cabecera_factura);

    let factura
    try{

        factura= await facturasRepo.findOneOrFail({where:{Numero}, relations:{detalle_factura: true, vendedor: true, cliente: true}});

    }catch(error){
        return resp.status(404).json({mensaje: 'No se encontro la factura con ese Número'});
    }

    return resp.status(400).json({factura});

    }catch(error){
        return resp.status(400).json({mensaje:error}); 
    }
};

static add = async (req:Request, resp:Response)=>{

    // try{
    //     //DESTRUCTURING

    //     const {Numero, Fecha, Codigo_producto, stock, fechaIngreso}=req.body;

    //     //validación de datos de entrada

    //     if(!id){

    //         return resp.status(404).json({mensaje: 'Debe indicar el ID'});

    //     }

    //     if(!nombre){

    //         return resp.status(404).json({mensaje: 'Debe indicar el nombre del producto'});

    //     }

    //     if(!precio){

    //         return resp.status(404).json({mensaje: 'Debe indicar el precio'});

    //     }

    //     if(precio<0){

    //         return resp.status(404).json({mensaje: 'Debe indicar un precio mayor a 0'});

    //     }

    //     if(!stock){

    //         return resp.status(404).json({mensaje: 'Debe indicar el stock del producto'});

    //     }

    //     if(stock<0){

    //         return resp.status(404).json({mensaje: 'El stock debe ser mayor a 0'});

    //     }

    //     //validación de reglas de negocio
    //     const facturasRepo=AppDataSource.getRepository(Cabecera_factura);
    //     const fac= await facturasRepo.findOne({where:{id}});

    //     if(pro){
    //         return resp.status(400).json({mensaje: "El producto ya existe en la base de datos"});

    //     }

    //     const fecha= new Date;
    //     let producto= new Producto;
    //     producto.id=id;
    //     producto.nombre=nombre;
    //     producto.precio=precio;
    //     producto.stock=stock;
    //     producto.fechaIngreso= fecha;
    //     producto.estado=true;


    //     //validar con class validator
    //     const errors= await validate(producto, {validationError: {target: false, value: false}});
    //     if(errors.length > 0){
    //         return resp.status(400).json(errors)
    //     }

    //     await productosRepo.save(producto);
    //      return resp.status(200).json({ mensaje: 'Producto Creado' });


    //     }catch(error){
    //         return resp.status(400).json({mensaje: error});
    //     }


};

static update = async (req:Request, resp:Response)=>{};


static delete = async (req: Request, resp: Response) => {
    try {
    const Numero = parseInt(req.params['Numero']);
    if (!Numero) {
    return resp.status(404).json({ mensaje: 'Debe indicar el número de factura' });
    }
        const facturasRepo = AppDataSource.getRepository(Cabecera_factura);
        let fac: Cabecera_factura;
    
        try {
            fac = await facturasRepo.findOneOrFail({ where: { Numero, estado: true } });
        } catch (error) {
            return resp.status(404).json({ mensaje: 'No se encuentra esa factura con ese número' });
        }
        fac.estado=false;
        try {

            await facturasRepo.save(fac);
            return resp.status(200).json({ mensaje: 'Se eliminó correctamente' });
        } catch (error) {
            return resp.status(400).json({ mensaje: 'No se pudo eliminar' });
        }
    } catch (error) {
        return resp.status(400).json({ mensaje: 'No se pudo eliminar' });
    }




}

}

export default FacturaController;