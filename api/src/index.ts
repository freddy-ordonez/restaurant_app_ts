import express, {Router} from 'express'
import 'dotenv/config';
import {sequelize} from './data/connectionSqlServer'
import "./model/restaurant";
import './model/address'

//Routes
import restaurantRoutes from './routes/restaurant.routes';
import addressRoutes from './routes/address.routes';

const app = express();

const PORT = process.env.PORT ?? 4000;

const apiRouter = Router()

app.use("/api", apiRouter)

apiRouter.use(express.json())

apiRouter.use(restaurantRoutes)
apiRouter.use(addressRoutes)

const connection = async () => {
    try {
      await sequelize.sync({force:true, alter:true});
      console.log("Connection has benn successfully");
    } catch (error) {
      console.error("Unable to connect to the database", error);
    }
  };

connection()

app.listen(PORT, ()=> {
    console.log(`Server is running in the port ${PORT}`);  
});