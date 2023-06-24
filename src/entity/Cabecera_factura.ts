import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, } from "typeorm";
import { Cliente } from "./Cliente";
import { Vendedor } from "./Vendedor";
import { Detalle_factura } from "./Detalle_factura";


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
    @OneToMany(() => Detalle_factura, (detalle_factura) => detalle_factura.cabecera_factura)
    detalle_factura: Detalle_factura[];
}

