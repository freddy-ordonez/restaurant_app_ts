import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "../controller/product.controller";
import { addProductSchema, idProductSchema, updateProductSchema } from "../validation/product.Schema";
import { validacionSchemas } from "../middleware/middleware";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id",idProductSchema, validacionSchemas, getOneProduct);

router.post("/products",addProductSchema, validacionSchemas, addProduct);

router.put("/products/:id",updateProductSchema, validacionSchemas, updateProduct);

router.delete("/products/:id",idProductSchema, validacionSchemas, deleteProduct);

export default router;
