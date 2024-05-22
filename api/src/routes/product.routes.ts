import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "../controller/product.controller";
import { addProductSchema, idProductSchema, updateProductSchema } from "../validation/product.Schema";
import { validationSchemas } from "../middleware/middleware";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id",idProductSchema, validationSchemas, getOneProduct);

router.post("/products",addProductSchema, validationSchemas, addProduct);

router.put("/products/:id",updateProductSchema, validationSchemas, updateProduct);

router.delete("/products/:id",idProductSchema, validationSchemas, deleteProduct);

export default router;
