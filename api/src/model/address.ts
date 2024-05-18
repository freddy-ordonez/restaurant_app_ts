import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model, NonAttribute, UUIDV4 } from "sequelize";
import {sequelize }from "../data/connectionSqlServer";
import Restaurant from "./restaurant";

class Address extends Model<InferAttributes<Address>, InferCreationAttributes<Address>> {

  declare id: CreationOptional<Number>;
  declare country: string;
  declare city: string;
  declare address: string;
  declare telephone: string;
  declare emailSupport: string;

  declare restaurantId: ForeignKey<Restaurant["id"]>

  declare restaurant: NonAttribute<Restaurant>
}

Address.init(
  {
    id: {
      type: DataTypes.UUID,
        primaryKey:true,
        defaultValue: UUIDV4
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
    restaurantId: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      onDelete: "CASCADE",
      references: {
        model: Restaurant,
        key: "id"
      }
    }
  },
  {
    sequelize
  }
);

export default Address;
