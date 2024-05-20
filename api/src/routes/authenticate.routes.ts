import { Router } from "express";
import { addAuthenticateUser } from "../controller/authenticate.controller";

const router = Router()

router.post('/login', addAuthenticateUser)