import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import User from "./user";
import Restaurant from "./restaurant";
import { sequelize } from "../data/connectionSqlServer";

class Review extends Model<
  InferAttributes<Review>,
  InferCreationAttributes<Review>
> {
  declare id: CreationOptional<Number>;
  declare qualification: number;
  declare comment: string;

  declare idUser: ForeignKey<User["id"]>;
  declare idRestaurant: ForeignKey<Restaurant["id"]>;
}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    qualification: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE"
    },
    idRestaurant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Restaurant,
        key: "id",
      },
      onDelete: "CASCADE"
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["idUser", "idRestaurant"],
      },
    ],
    sequelize,
  }
);

export default Review;
