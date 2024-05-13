import { Router } from "express";
import { validacionSchemas } from "../middleware/middleware";
import { addUser, deleteUser, getOneUser, getUsers, updateUser } from "../controller/user.controller";
import { addUserSchema, idUserSchema, updateUserSchema } from "../validation/userSchema";

const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', idUserSchema, validacionSchemas, getOneUser)

router.post('/users', addUserSchema, validacionSchemas, addUser)

router.put('/users/:id', updateUserSchema, validacionSchemas, updateUser)

router.delete('/users/:id',idUserSchema, validacionSchemas, deleteUser)

export default router;
