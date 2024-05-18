import { checkSchema } from "express-validator/src/middlewares/schema";

export const addAddressSchema = checkSchema({
  country: {
    notEmpty: {
        errorMessage: "country cant be empty"
    },
    exists: {
      errorMessage: "country is required",
    },
    isString: {
      errorMessage: "country must be in string",
    },
    isLength: {
        options: {
            max: 25
        },
        errorMessage: "maximum number of country characters is 25 "
    }
  },
  city: {
    notEmpty: {
        errorMessage: "city cant be empty"
    },
    exists: {
      errorMessage: "city is required",
    },
    isString: {
      errorMessage: "city must be in string",
    },
    isLength: {
        options: {
            max: 25
        },
        errorMessage: "maximum number of citycharacters is 25 "
    }
  },
  address: {
    notEmpty: {
        errorMessage: "address cant be empty"
    },
    exists: {
      errorMessage: "address is required",
    },
    isString: {
      errorMessage: "address must be in string",
    },
    isLength: {
        options: {
            max: 100
        },
        errorMessage: "maximum number of address characters is 100"
    }
  },
  telephone: {
    notEmpty: {
        errorMessage: "telephone cant be empty"
    },
    exists: {
      errorMessage: "telephone is required",
    },
    isString: {
      errorMessage: "telephone must be in string",
    },
    isLength: {
        options: {
            max: 20
        },
        errorMessage: "maximum number of country characters is 20"
    }
  },
  emailSupport: {
    notEmpty: {
        errorMessage: "emailSupport cant be empty"
    },
    exists: {
      errorMessage: "emailSupport is required",
    },
    isString: {
      errorMessage: "emailSupport must be in string",
    },
    isEmail: {
      errorMessage: "format emailSupport is invalid",
    },
    isLength: {
        options: {
            max: 100
        },
        errorMessage: "maximum number of country characters is 100"
    }
  },
  restaurantId: {
    exists: {
      errorMessage: "restaurantId is required",
    },
    isNumeric: {
      errorMessage: "retaurantId must be number",
    },
  },
});

export const updateAddressSchema = checkSchema({
  id: {
    in: ["params"],
  },
  country: {
    notEmpty: {
        errorMessage: "country cant be empty"
    },
    exists: {
      errorMessage: "country is required",
    },
    isString: {
      errorMessage: "country must be in string",
    },
    isLength: {
        options: {
            max: 25
        },
        errorMessage: "maximum number of country characters is 25 "
    }
  },
  city: {
    notEmpty: {
        errorMessage: "city cant be empty"
    },
    exists: {
      errorMessage: "city is required",
    },
    isString: {
      errorMessage: "city must be in string",
    },
    isLength: {
        options: {
            max: 25
        },
        errorMessage: "maximum number of city characters is 25 "
    }
  },
  address: {
    notEmpty: {
        errorMessage: "city cant be empty"
    },
    exists: {
      errorMessage: "address is required",
    },
    isString: {
      errorMessage: "address must be in string",
    },
    isLength: {
        options: {
            max: 100
        },
        errorMessage: "maximum number of address characters is 100 "
    }
  },
  telephone: {
    notEmpty: {
        errorMessage: "telephone cant be empty"
    },
    exists: {
      errorMessage: "telephone is required",
    },
    isString: {
      errorMessage: "telephone must be in string",
    },
    isLength: {
        options: {
            max: 20
        },
        errorMessage: "maximum number of country characters is 20"
    }
  },
  emailSupport: {
    notEmpty: {
        errorMessage: "telephone cant be empty"
    },
    exists: {
      errorMessage: "emailSupport is required",
    },
    isString: {
      errorMessage: "emailSupport must be in string",
    },
    isEmail: {
      errorMessage: "format emailSupport is invalid",
    },
    isLength: {
        options: {
            max: 100
        },
        errorMessage: "maximum number of country characters is 100"
    }
  }
});

export const idAddressSchema = checkSchema({
    id: {
        in: ["params"]
    }
})
