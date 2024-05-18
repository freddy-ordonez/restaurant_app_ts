import {checkSchema} from 'express-validator';

export const addRestaurantSchema = checkSchema({
    name: {
        in:['body'],
        exists: {
            errorMessage: "name is required"
        },
        isLength: {
            options: {
                max:50 
            },
            errorMessage: "name max 50 characters"
        },
        isString: {
            errorMessage: 'name must be in string'
        }
    },
    typeCousine: {
        in: ["body"],
        exists: {
            errorMessage: "typeCousine is required"
        },
        isLength: {
            options: {
                max: 50
            },
            errorMessage: "typeCousine max 50 characters"
        },
        isString: {
            errorMessage: "typeCousine must be in string"
        }
    },
    schedule: {
        in: ["body"],
        exists: {
            errorMessage: "schedule is required"
        },
        isLength: {
            options: {
                max: 50
            },
            errorMessage: "schedule max 25 characters"
        },
        isString: {
            errorMessage: "schedule must be in string"
        }
    }
})

export const updateRestaurantSchema = checkSchema({
    id: {
        in: ["params"]
    },
    name: {
        in:['body'],
        exists: {
            errorMessage: "name is required"
        },
        isLength: {
            options: {
                max:50 
            },
            errorMessage: "name max 50 characters"
        },
        isString: {
            errorMessage: 'name must be in string'
        }
    },
    typeCousine: {
        in: ["body"],
        exists: {
            errorMessage: "typeCousine is required"
        },
        isLength: {
            options: {
                max: 50
            },
            errorMessage: "typeCousine max 50 characters"
        },
        isString: {
            errorMessage: "typeCousine must be in string"
        }
    },
    schedule: {
        in: ["body"],
        exists: {
            errorMessage: "schedule is required"
        },
        isLength: {
            options: {
                max: 50
            },
            errorMessage: "schedule max 25 characters"
        },
        isString: {
            errorMessage: "schedule must be in string"
        }
    }
})

export const idRestaurantSchema = checkSchema({
    id: {
        in: ["params"]
    }
})