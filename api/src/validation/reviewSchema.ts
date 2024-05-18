import { checkSchema } from "express-validator";

export const addReviewSchema = checkSchema({
  comment: {
    in: ["body"],
    exists: {
      errorMessage: "comment is required",
    },
    isLength: {
      options: {
        max: 150,
      },
      errorMessage: "comment max 25 characters",
    },
    isString: {
      errorMessage: "comment must be in string",
    },
    notEmpty: {
      errorMessage: "comment cant be empty",
    },
  },
  qualification: {
    in: ["body"],
    exists: {
      errorMessage: "qualification is required",
    },
    isNumeric: {
      errorMessage: "qualification must be number",
    },
    custom: {
      options: (value) => {
        return value >= 1 && value <= 5;
      },
      errorMessage: "qualification must be from 1 and 5",
    },
  },
  idRestaurant: {
    in: ["body"],
    exists: {
      errorMessage: "idRestaurant is required",
    },
    isString: {
      errorMessage: "idRestaurant must be string",
    },
    notEmpty: {
      errorMessage: "idRestaurant cant be empty",
    }
  },
  idUser: {
    in: ["body"],
    exists: {
      errorMessage: "idUser is required",
    },
    isString: {
      errorMessage: "idUser must be string",
    },
    notEmpty: {
      errorMessage: "idUser cant be empty",
    },
  },
});

export const updateReviewSchema = checkSchema({
  id: {
    in: ["params"]
  },
  comment: {
    in: ["body"],
    exists: {
      errorMessage: "comment is required",
    },
    isLength: {
      options: {
        max: 150,
      },
      errorMessage: "comment max 25 characters",
    },
    isString: {
      errorMessage: "comment must be in string",
    },
    notEmpty: {
      errorMessage: "comment cant be empty",
    },
  },
  qualification: {
    in: ["body"],
    exists: {
      errorMessage: "qualification is required",
    },
    isNumeric: {
      errorMessage: "qualification must be number",
    },
    custom: {
      options: (value) => {
        return value >= 1 && value <= 5;
      },
      errorMessage: "qualification must be from 1 and 5",
    },
  }
});

export const idReviewSchema = checkSchema({
  id: {
    in: ["params"]
  },
});
