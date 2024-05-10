import { Request, Response } from "express";
import RestaurantModel from "../model/restaurant";
import Address from "../model/address";
import { Result, matchedData, validationResult } from "express-validator";

export const getRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurant = await RestaurantModel.findAll();
    return res.status(200).json(restaurant);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export const getRestaurant = async (req: Request, res: Response) => {
  if (isNaN(parseInt(req.params.id)))
    return res.status(400).send({ message: "Bad Request" });

  const idRestaurant = req.params.id;

  try {
    const restaurant = await RestaurantModel.findOne({
      where: {
        id: idRestaurant,
      },
    });
    if (!restaurant) return res.status(404).send({ message: "Not found" });

    return res.status(200).json(restaurant);
  } catch (error) {}
};

export const getRestaurantAddress = async (req: Request, res: Response) => {
  if (isNaN(parseInt(req.params.id)))
    return res.status(400).send({ message: "Bad Request" });

  const restaurantId = req.params.id;

  try {
    const address = await Address.findOne({
      where: {
        restaurantId: restaurantId,
      },
    });
    if(!address) return res.status(404).send({message: "Not Found"})
    return res.status(200).json(address);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export const addRestaurant = async (req: Request, res: Response) => {
  const validationSchema: Result = validationResult(req);

  if (!validationSchema.isEmpty())
    return res.status(400).send(validationSchema.array());

  const { name, typeCousine, schedule } = matchedData(req);

  try {
    const newRestaurant = await RestaurantModel.create({
      name,
      typeCousine,
      schedule,
    });
    return res.status(201).json(newRestaurant);
  } catch (error) {
    console.log(error);

    return res.status(500).send({ message: error });
  }
};

export const updateRestaurant = async (req: Request, res: Response) => {
  if (isNaN(parseInt(req.params.id)))
    return res.status(400).send({ message: "Bad Request" });

  const validationSchema: Result = validationResult(req);

  if (!validationSchema.isEmpty())
    return res.status(400).send(validationSchema.array());

  const { name, typeCousine, schedule } = matchedData(req);
  const idRestaurant = req.params.id;

  try {
    const restaurant = await RestaurantModel.findOne({
      where: {
        id: idRestaurant,
      },
    });

    if (!restaurant) return res.status(404).send({ message: "Not found" });

    restaurant.name = name;
    restaurant.typeCousine = typeCousine;
    restaurant.schedule = schedule;

    await restaurant.save();

    return res.status(200).json(restaurant);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export const deleteRestaurant = async (req: Request, res: Response) => {
  if (isNaN(parseInt(req.params.id)))
    return res.status(400).send({ message: "Bad Request" });

  const idRestaurant = req.params.id;

  try {
    await RestaurantModel.destroy({
      where: {
        id: idRestaurant,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
