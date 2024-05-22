import { Router } from "express";
import { addAuthenticateUser } from "../controller/authenticate.controller";
import { authorizationValidation } from "../middleware/middleware";

const router = Router()

//Prueba para la autorizacion
router.get('/login', authorizationValidation)

router.post('/login', addAuthenticateUser)

export default router;