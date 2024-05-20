import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  UUIDV4,
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
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
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
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    idRestaurant: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Restaurant,
        key: "id",
      },
      onDelete: "CASCADE",
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

Restaurant.hasMany(Review, {
  sourceKey: "id",
  foreignKey: "idRestaurant",
  as: "reviews"
})
Review.belongsTo(Restaurant, {
  targetKey: "id",
  foreignKey: "idRestaurant",
  as: 'restaurant'
})

User.hasMany(Review, {
  sourceKey: "id",
  foreignKey: "idUser",
  as: "reviews"
})

Review.belongsTo(User, {
  targetKey: "id",
  foreignKey: "idUser",
  as: "user"
})

export default Review;
