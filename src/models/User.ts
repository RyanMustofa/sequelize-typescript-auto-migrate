import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Post } from "./Post";

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

  @HasMany(() => Post, "createdBy")
  post?: Post[];
}
