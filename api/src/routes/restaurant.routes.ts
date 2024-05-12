import { Router } from "express";
import {
  addRestaurant,
  deleteRestaurant,
  getRestaurant,
  getRestaurantAddress,
  getRestaurants,
  updateRestaurant,
} from "../controller/restaurant.controller";
import { addRestaurantSchema, idRestaurantSchema, updateRestaurantSchema} from "../validation/restaurantSchema";
import { validacionSchemas } from "../middleware/middleware";

const router = Router();

router.get("/restaurants", getRestaurants);
router.get("/restaurants/:id",idRestaurantSchema,validacionSchemas, getRestaurant);
router.get("/restaurants/:id/address", idRestaurantSchema, getRestaurantAddress);

router.post("/restaurants",addRestaurantSchema, validacionSchemas, addRestaurant);

router.put("/restaurants/:id",updateRestaurantSchema,validacionSchemas, updateRestaurant);

router.delete("/restaurants/:id", idRestaurantSchema ,validacionSchemas, deleteRestaurant);

export default router;
