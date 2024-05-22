import { Request, Response } from "express";
import { matchedData } from "express-validator";
import User from "../model/user";
import { UserToken, signToken } from "../utils/jwt";

export const addAuthenticateUser = async (req: Request, res: Response)=>  {
    const {email, password} = req.body
    try {
        const findUser = await User.findOne({
            where: {
                email,
                password
            }
        })
        if(!findUser) return res.status(401).send({message: "Authentication failed"})
        const userToken: UserToken = {
            id: findUser.id.toString(),
            email: findUser.email
        }
        const token = signToken(userToken)
        return res.status(200).send({token})
    } catch (error) {
        return res.status(500).send({message: error})
        console.log("error");
        
    }
}
