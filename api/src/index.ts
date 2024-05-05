import express from 'express'
import 'dotenv/config';
import {sequelize} from './data/connectionSqlServer'
import "./model/restaurant";
import './model/address'

const app = express();

const PORT = process.env.PORT ?? 4000;

const connection = async () => {
    try {
      await sequelize.sync({force:true});
      console.log("Connection has benn successfully");
    } catch (error) {
      console.error("Unable to connect to the database", error);
    }
  };

connection()

app.listen(PORT, ()=> {
    console.log(`Server is running in the port ${PORT}`);  
});