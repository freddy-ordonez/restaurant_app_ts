import { Router } from "express";
import { addReview, deleteReview, getOneReview, getReviews, updateReview } from "../controller/review.controller";

const router = Router()

router.get("/reviews", getReviews)
router.get("/reviews/:id", getOneReview)

router.post("/reviews", addReview)

router.put("/reviews/:id", updateReview)

router.delete("/reviews/:id", deleteReview)
