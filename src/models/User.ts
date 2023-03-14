import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "users",
})
export class User extends Model {
  @Column({ primaryKey: true, type: DataType.INTEGER })
  id!: number;
  @Column({ type: DataType.STRING })
  name!: string;
  @Column({ type: DataType.STRING })
  username!: string;
  @Column({ type: DataType.STRING })
  email!: string;
  @Column({ type: DataType.STRING })
  password!: string;
}
