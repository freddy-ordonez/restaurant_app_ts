import { Request, Response } from "express";
import Product from "../model/product";
import { matchedData } from "express-validator";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await Product.findAll();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export const getOneProduct = async (req: Request, res: Response) => {
  const { id: idProduct } = matchedData(req);

  try {
    const product = await Product.findOne({
      where: {
        id: idProduct,
      },
    });
    if (!product) return res.status(404).send({ message: "Not Found" });
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export const addProduct = async (req: Request, res: Response) => {
  const { name, description, price, idRestaurant } = matchedData(req);

  try {
    const newProduct = await Product.create({
      name,
      description,
      price,
      idRestaurant,
    });
    await newProduct.save();
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { name, description, price, id: idRestaurant } = matchedData(req);

  try {
    const findProduct = await Product.findOne({
      where: idRestaurant,
    });
    if (!findProduct) return res.status(404).send({ message: "Not Found" });
    findProduct.name = name;
    findProduct.description = description;
    findProduct.price = price;
    await findProduct.save();
    return res.status(200).json(findProduct);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id: idProduct } = matchedData(req);

  try {
    const deleteProduct = await Product.destroy({
      where: {
        id: idProduct,
      },
    });
    if (deleteProduct === 0)
      return res.status(404).send({ message: "Not Found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
