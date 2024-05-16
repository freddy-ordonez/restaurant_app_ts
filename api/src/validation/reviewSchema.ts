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
      errorMessage: "qualification must of between 1 and 5",
    },
  },
  idRestaurant: {
    in: ["body"],
    exists: {
      errorMessage: "idRestaurant is required",
    },
    isNumeric: {
      errorMessage: "idRestaurant must be number",
    },
  },
  idUser: {
    in: ["body"],
    exists: {
      errorMessage: "idUser is required",
    },
    isNumeric: {
      errorMessage: "idUser must be number",
    },
  },
});

export const updateReviewSchema = checkSchema({
    id: {
        in: ["params"],
        isNumeric: {
            errorMessage: "id must be number"
        }
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
        errorMessage: "qualification must of between 1 and 5",
      },
    }
});

export const idReviewSchema = checkSchema({
    id: {
        in: ["params"],
        isNumeric: {
            errorMessage: "id must be number"
        }
    }
})
