import { Column, Entity, OneToMany, PrimaryColumn, } from "typeorm";
import { Cabecera_factura } from "./Cabecera_factura";



@Entity()
export class Cliente{
    @PrimaryColumn({ unique: true })
    Ruc_cliente:number;
    @Column({ type: "varchar", length: 45, nullable: false })
    Nombres_cliente:string;
    @Column({ type: "varchar", length: 45, nullable: false })
    Apellidos_cliente:string;
    @Column({ type: "varchar", length: 100, nullable: false })
    Direccion_cliente:string;
    @Column({nullable: false})
    Telefono_cliente:number;
    @OneToMany(() => Cabecera_factura, (cabecera_factura) => cabecera_factura.cliente)
    cabecera_facturas: Cabecera_factura[]
    
}