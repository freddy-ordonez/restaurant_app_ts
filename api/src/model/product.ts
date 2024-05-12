import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from "sequelize";
import Restaurant from "./restaurant";
import { sequelize } from "../data/connectionSqlServer";

export default class Product extends Model<
  InferAttributes<Product>,
  InferCreationAttributes<Product>
> {
  declare id: CreationOptional<Number>;
  declare name: string;
  declare description: string;
  declare price: number;

  declare idRestaurant: ForeignKey<Restaurant["id"]>;

  declare restaurant: NonAttribute<Restaurant>;
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    },
    idRestaurant: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
            model: Restaurant,
            key: "id"
        }
    }
}, { sequelize, modelName: "Product" });
