import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import {sequelize }from "../data/connectionSqlServer";
import Restaurant from "./restaurant";

class Address extends Model<InferAttributes<Address>, InferCreationAttributes<Address>> {
  declare id: CreationOptional<number>;
  declare country: string;
  declare city: string;
  declare address: string;
  declare telephone: string;
  declare emailSupport: string;

  declare restaurantId: ForeignKey<Restaurant["id"]>
}

Address.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    country: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    emailSupport: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Address",
  }
);

export default Address;
