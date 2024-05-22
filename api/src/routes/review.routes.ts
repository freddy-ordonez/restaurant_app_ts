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
import { validationSchemas } from "../middleware/middleware";

const router = Router();

router.get("/reviews", getReviews);
router.get("/reviews/:id", idReviewSchema, validationSchemas, getOneReview);

router.post("/reviews", addReviewSchema, validationSchemas, addReview);

router.put("/reviews/:id", updateReviewSchema, validationSchemas, updateReview);

router.delete("/reviews/:id", idReviewSchema, validationSchemas, deleteReview);

export default router;
