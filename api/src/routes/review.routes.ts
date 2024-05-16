import { Router } from "express";
import {
  addReview,
  deleteReview,
  getOneReview,
  getReviews,
  updateReview,
} from "../controller/review.controller";
import {
  addReviewSchema,
  idReviewSchema,
  updateReviewSchema,
} from "../validation/reviewSchema";
import { validacionSchemas } from "../middleware/middleware";

const router = Router();

router.get("/reviews", getReviews);
router.get("/reviews/:id", idReviewSchema, validacionSchemas, getOneReview);

router.post("/reviews", addReviewSchema, validacionSchemas, addReview);

router.put("/reviews/:id", updateReviewSchema, validacionSchemas, updateReview);

router.delete("/reviews/:id", idReviewSchema, validacionSchemas, deleteReview);

export default router;
