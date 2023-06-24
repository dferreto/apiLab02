import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Cabecera_factura } from "./Cabecera_factura";
import { Producto } from "./Producto";

@Entity()
export class Detalle_factura{

    @PrimaryColumn({unique: true, nullable: false })
    numero: number;
  
    @PrimaryColumn({unique: true, nullable: false })
    codigo_producto: number;

    @ManyToOne(() => Cabecera_factura, cabecera_factura => cabecera_factura.detalle_factura)
    @JoinColumn({ name: 'numero' })
    cabecera_factura: Cabecera_factura;

    @Column()
    cantidad: number;

    @ManyToOne(() => Producto, producto => producto.detalle_factura)
    @JoinColumn({ name: 'codigo_producto' })
    producto: Producto;

 
}
