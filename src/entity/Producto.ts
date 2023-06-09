import { Column, Entity, PrimaryColumn, ManyToOne} from "typeorm";
import { Proveedor } from "./Proveedor";

@Entity()
export class Producto{
    @PrimaryColumn()
    Codigo_producto:number;
    @Column({ type: "varchar", length: 200, nullable: false })
    Descripcion_producto:string;
    @Column({nullable: false})
    Precio_producto:number;
    @Column({nullable: false})
    Stock_maximo_producto:number;
    @Column({nullable: false})
    Stock_minimo_producto:number;
    @ManyToOne(() => Proveedor, (proveedor) => proveedor.productos)
    proveedor: Proveedor
}