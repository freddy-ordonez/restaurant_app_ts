import { Request, Response } from "express";
import User from "../model/user";
import { matchedData } from "express-validator";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await User.findAll();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export const getOneUser = async (req: Request, res: Response) => {
  const { id: idUser } = matchedData(req);

  try {
    const findUser = await User.findOne({
      where: {
        id: idUser,
      },
    });
    if (!findUser) return res.status(404).send({ message: "Not Found" });
    return res.status(200).json(findUser);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export const addUser = async (req: Request, res: Response) => {
  const { email, password } = matchedData(req);

  try {
    const newUser = await User.create({
      email,
      password,
    });
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id: idUser, email, password } = matchedData(req);

  try {
    const findUser = await User.findOne({
      where: {
        id: idUser,
      },
    });
    if (!findUser) return res.status(404).send({ messgae: "Not Found" });
    findUser.email = email;
    findUser.password = password;
    await findUser.save();
    return res.status(200).json(findUser);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id: idUser } = matchedData(req);

  try {
    const deleteUser = await User.destroy({
      where: {
        id: idUser,
      },
    });
    if (deleteUser === 0) return res.status(404).send({ message: "Not Found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
