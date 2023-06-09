import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, } from "typeorm";
import { Cliente } from "./Cliente";
import { Vendedor } from "./Vendedor";
import { Producto } from "./Producto";


@Entity()
export class Cabecera_factura{
    @PrimaryColumn({unique: true })
    Numero:number;
    @Column({nullable: false, type: "date"})
    Fecha:Date;
    @ManyToOne(() => Cliente, (cliente) => cliente.cabecera_facturas)
    cliente: Cliente
    @ManyToOne(() => Vendedor, (vendedor) => vendedor.cabecera_facturas)
    vendedor: Vendedor
    @ManyToMany(() => Producto)
    @JoinTable()
    detalle: Producto[]
    
}

