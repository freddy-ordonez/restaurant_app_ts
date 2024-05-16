import { Request, Response } from "express";
import Review from "../model/review";
import { matchedData } from "express-validator";

export const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.findAll();

    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export const getOneReview = async (req: Request, res: Response) => {
  const { id: idReview } = matchedData(req);

  try {
    const findReview = await Review.findOne({
      where: {
        id: idReview,
      },
    });
    if (!findReview) return res.status(404).send({ message: "Not Found" });

    return res.status(200).json(findReview);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export const addReview = async (req: Request, res: Response) => {
  const { qualification, comment, idUser, idRestaurant } = matchedData(req);

  try {
    const newReview = await Review.create({
      qualification,
      comment,
      idRestaurant,
      idUser,
    });
    await newReview.save();
    return res.status(201).json(newReview);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export const updateReview = async (req: Request, res: Response) => {
  const { qualification, comment, id: idReview } = matchedData(req);

  try {
    const findReview = await Review.findOne({
      where: {
        id: idReview,
      },
    });
    if (!findReview) return res.status(404).send({ message: "Not Found" });
    findReview.comment = comment;
    findReview.qualification = qualification;
    await findReview.save()
    return res.status(200).json(findReview)
  } catch (error) {
    return res.status(500).send({message: error})
  }
};

export const deleteReview = async (req: Request, res: Response) => {
    const {id: idReview} = matchedData(req)

    try {
        const deleteReview = await Review.destroy({
            where: {
                id: idReview
            }
        })
        if(deleteReview === 0 ) return res.status(404).send({message: "Not Found"})
        return res.sendStatus(204)  
    } catch (error) {
        return res.status(500).send({message: error})
    }
}
