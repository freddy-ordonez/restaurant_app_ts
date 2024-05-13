import { Router } from "express";
import { validacionSchemas } from "../middleware/middleware";
import { addUser, deleteUser, getOneUser, getUsers, updateUser } from "../controller/user.controller";

const router = Router()

router.get('/users', validacionSchemas, getUsers)
router.get('/users/:id', validacionSchemas, getOneUser)

router.post('/users', validacionSchemas, addUser)

router.put('/users/:id', validacionSchemas, updateUser)

router.delete('/users/:id', validacionSchemas, deleteUser)

export default router;
