import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
  UUIDV4,
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
        type: DataTypes.UUID,
        primaryKey:true,
        defaultValue: UUIDV4
    },
    name: {
        type: DataTypes.STRING(25),
        allowNull: false
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
        type: DataTypes.UUID,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
            model: Restaurant,
            key: "id"
        }
    }
}, { sequelize });

