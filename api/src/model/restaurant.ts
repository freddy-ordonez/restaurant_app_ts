import { DataTypes, Model } from "sequelize";
import {sequelize} from "../data/connectionSqlServer";
import Address from "./address";

class Restaurant extends Model {}

Restaurant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    modelName: "Restaurant",
  }
);


Restaurant.hasOne(Address);
Address.belongsTo(Restaurant);

export default Restaurant;
