import { checkSchema } from "express-validator";

export const addProductSchema = checkSchema({
    name: {
        in:['body'],
        exists: {
            errorMessage: "name is required"
        },
        isLength: {
            options: {
                max:25
            },
            errorMessage: "name max 25 characters"
        },
        isString: {
            errorMessage: 'name must be in string'
        },
        notEmpty: {
            errorMessage: 'name cant be empty'
        }
    },
    description: {
        in:['body'],
        exists: {
            errorMessage: "description is required"
        },
        isLength: {
            options: {
                max:100
            },
            errorMessage: "description max 100 characters"
        },
        isString: {
            errorMessage: 'description must be in string'
        },
        notEmpty: {
            errorMessage: 'description cant be empty'
        }
    },
    price: {
        in:['body'],
        exists: {
            errorMessage: "price is required"
        },
        isNumeric: {
            errorMessage: "price must be number"
        }
    },
    idRestaurant: {
        in:['body'],
        exists: {
            errorMessage: "idRestaurant is required"
        },
        isNumeric: {
            errorMessage: "idRestaurant must be number"
        }
    }
})

export const updateProductSchema = checkSchema({
    id: {
        in:["params"],
        exists: {
            errorMessage: "name is required"
        },
        isNumeric: {
            errorMessage: "id must be number"
        }
    },
    description: {
        in:['body'],
        exists: {
            errorMessage: "description is required"
        },
        isLength: {
            options: {
                max:100
            },
            errorMessage: "description max 100 characters"
        },
        isString: {
            errorMessage: 'description must be in string'
        },
        notEmpty: {
            errorMessage: 'description cant be empty'
        }
    },
    price: {
        in:['body'],
        exists: {
            errorMessage: "price is required"
        },
        isNumeric: {
            errorMessage: "price must be number"
        }
    }
    
})

export const idProductSchema = checkSchema({
    id: {
        in:["params"],
        exists: {
            errorMessage: "name is required"
        },
        isNumeric: {
            errorMessage: "id must be number"
        }
    }
})
