import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  UUIDV4,
} from "sequelize";
import {sequelize} from '../data/connectionSqlServer';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<Number>;
  declare email: string;
  declare password: string;
}

User.init({
    id: {
        type: DataTypes.UUID,
        primaryKey:true,
        defaultValue: UUIDV4
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    }},
    {
        sequelize
    }
)

export default User;
