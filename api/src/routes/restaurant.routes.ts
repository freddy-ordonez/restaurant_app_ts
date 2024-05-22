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
import { validationSchemas } from "../middleware/middleware";

const router = Router();

router.get("/restaurants", getRestaurants);
router.get("/restaurants/:id",idRestaurantSchema,validationSchemas, getRestaurant);
router.get("/restaurants/:id/addresses", idRestaurantSchema, getRestaurantAddress);

router.post("/restaurants",addRestaurantSchema, validationSchemas, addRestaurant);

router.put("/restaurants/:id",updateRestaurantSchema,validationSchemas, updateRestaurant);

router.delete("/restaurants/:id", idRestaurantSchema ,validationSchemas, deleteRestaurant);

export default router;
