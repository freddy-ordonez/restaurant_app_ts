import { Router } from "express";
import {
  addRestaurant,
  deleteRestaurant,
  getRestaurant,
  getRestaurantAddress,
  getRestaurants,
  updateRestaurant,
} from "../controller/restaurant.controller";

const router = Router();

router.get("/restaurants", getRestaurants);
router.get("/restaurants/:id", getRestaurant);
router.get("/restaurants/:id/address", getRestaurantAddress);

router.post("/restaurants", addRestaurant);

router.put("/restaurants/:id", updateRestaurant);

router.delete("/restaurants/:id", deleteRestaurant);

export default router;
