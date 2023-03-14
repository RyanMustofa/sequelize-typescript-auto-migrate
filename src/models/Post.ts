import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { User } from "./User";

@Table({
  tableName: "posts",
  timestamps: false,
})
export class Post extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true })
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @BelongsTo(() => User, "createdBy")
  created!: User;

  @PrimaryKey
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  createdBy!: number;
}
