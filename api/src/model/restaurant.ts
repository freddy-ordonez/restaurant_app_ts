import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  UUIDV4,
} from "sequelize";
import { sequelize } from "../data/connectionSqlServer";
import Address from "./address";
import Product from "./product";

class Restaurant extends Model<
  InferAttributes<Restaurant>,
  InferCreationAttributes<Restaurant>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare typeCousine: string;
  declare schedule: string;
}

Restaurant.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    typeCousine: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    schedule: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);
export default Restaurant;
