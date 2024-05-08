import { Router } from "express";
import {
  addRestaurant,
  deleteRestaurant,
  getRestaurant,
  getRestaurantAddress,
  getRestaurants,
  updateRestaurant,
} from "../controller/restaurant.controller";
import { restaurantSchemaValidation } from "../validation/restaurantSchema";

const router = Router();

router.get("/restaurants", getRestaurants);
router.get("/restaurants/:id", getRestaurant);
router.get("/restaurants/:id/address", getRestaurantAddress);

router.post("/restaurants",restaurantSchemaValidation, addRestaurant);

router.put("/restaurants/:id",restaurantSchemaValidation, updateRestaurant);

router.delete("/restaurants/:id", deleteRestaurant);

export default router;
