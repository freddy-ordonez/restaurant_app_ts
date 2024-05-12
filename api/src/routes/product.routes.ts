import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "../controller/product.controller";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getOneProduct);

router.post("/products", addProduct);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

export default router;
