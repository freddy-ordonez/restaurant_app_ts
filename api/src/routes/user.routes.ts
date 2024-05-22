import { Router } from "express";
import { validationSchemas } from "../middleware/middleware";
import { addUser, deleteUser, getOneUser, getUsers, updateUser } from "../controller/user.controller";
import { addUserSchema, idUserSchema, updateUserSchema } from "../validation/userSchema";

const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', idUserSchema, validationSchemas, getOneUser)

router.post('/users', addUserSchema, validationSchemas, addUser)

router.put('/users/:id', updateUserSchema, validationSchemas, updateUser)

router.delete('/users/:id',idUserSchema, validationSchemas, deleteUser)

export default router;
