import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, } from "typeorm";
import { Cliente } from "./Cliente";
import { Vendedor } from "./Vendedor";
import { Detalle_factura } from "./Detalle_factura";


@Entity()
export class Cabecera_factura{
    @PrimaryGeneratedColumn({type: "int"})
    Numero:number;

    @Column({nullable: false, type: "date"})
    Fecha:Date;

    @ManyToOne(() => Cliente, (cliente) => cliente.cabecera_facturas, {cascade:true})
    @JoinColumn({name:"Ruc_cliente"})
    cliente: Cliente;

    @ManyToOne(() => Vendedor, (vendedor) => vendedor.cabecera_facturas, {cascade:true})
    @JoinColumn({name:"Codigo_vendedor"})
    vendedor: Vendedor;

    @OneToMany(() => Detalle_factura, (detalle_factura) => detalle_factura.cabecera_factura, {cascade:["insert", "update", "remove"]})
    detalle_factura: Detalle_factura[];

    @Column({default: true})
    estado:boolean;
}

