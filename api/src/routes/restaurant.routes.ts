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

const router = Router();

router.get("/restaurants", getRestaurants);
router.get("/restaurants/:id",idRestaurantSchema, getRestaurant);
router.get("/restaurants/:id/address", idRestaurantSchema, getRestaurantAddress);

router.post("/restaurants",addRestaurantSchema, addRestaurant);

router.put("/restaurants/:id",updateRestaurantSchema, updateRestaurant);

router.delete("/restaurants/:id", idRestaurantSchema ,deleteRestaurant);

export default router;
