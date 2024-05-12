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
  const isIdValid = validationResult(req)
  if (!isIdValid.isEmpty())
    return res.status(400).send({ message: isIdValid.array() });

  const {id: idRestaurant} = matchedData(req);

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
  const isIdValid = validationResult(req)
  if (!isIdValid.isEmpty())
    return res.status(400).send({ message: isIdValid.array() });

  const {id:restaurantId} = matchedData(req);

  try {
    const address = await Address.findOne({
      where: {
        restaurantId: restaurantId,
      },
    });
    if (!address) return res.status(404).send({ message: "Not Found" });
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
  const isSchemaValid = validationResult(req)
  if (!isSchemaValid.isEmpty())
    return res.status(400).send({ message: isSchemaValid.array()});

  const { name, typeCousine, schedule, id: idRestaurant } = matchedData(req);

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
  const isIdValid = validationResult(req);
  if (!isIdValid.isEmpty())
    return res.status(400).send({ message: isIdValid.array()});

  const {id: restaurantId} = matchedData(req);

  try {
    const deleteRestaurant = await RestaurantModel.destroy({
      where: {
        id: restaurantId,
      },
    });

    if (deleteRestaurant === 0)
      return res.status(404).send({ message: "Not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
