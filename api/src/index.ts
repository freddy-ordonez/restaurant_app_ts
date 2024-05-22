//configuration
import express, {Router} from 'express'
import 'dotenv/config';

//Import Routes
import restaurantRoutes from './routes/restaurant.routes';
import addressRoutes from './routes/address.routes';
import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';
import reviewRoutes from './routes/review.routes'
import authenticateRoutes from "./routes/authenticate.routes"

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
apiRouter.use(reviewRoutes)
apiRouter.use(authenticateRoutes)

connection()

app.listen(PORT, ()=> {
    console.log(`Server is running in the port ${PORT}`);  
});