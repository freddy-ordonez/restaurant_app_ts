//configuration
import express, {Router} from 'express'
import 'dotenv/config';

//Models
import "./model/restaurant";
import './model/address'
import "./model/product"
import "./model/user"

//Import Routes
import restaurantRoutes from './routes/restaurant.routes';
import addressRoutes from './routes/address.routes';
import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';

//Execute the connection a database
import "./data/connectionSqlServer"
import { connection } from './data/connectionSqlServer';

const app = express();

const PORT = process.env.PORT ?? 4000;

const apiRouter = Router()

app.use("/api", apiRouter)

apiRouter.use(express.json())

//Use Routes
apiRouter.use(restaurantRoutes)
apiRouter.use(addressRoutes)
apiRouter.use(productRoutes)
apiRouter.use(userRoutes)

connection()

app.listen(PORT, ()=> {
    console.log(`Server is running in the port ${PORT}`);  
});