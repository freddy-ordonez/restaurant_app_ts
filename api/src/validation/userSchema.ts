import { checkSchema } from "express-validator";

export const addUserSchema = checkSchema({
    email: {
        in:['body'],
        exists: {
            errorMessage: "email is required"
        },
        isLength: {
            options: {
                max:100
            },
            errorMessage: "email max 100 characters"
        },
        isString: {
            errorMessage: 'email must be in string'
        },
        notEmpty: {
            errorMessage: 'email cant be empty'
        },
        isEmail: {
            errorMessage: 'format email is invalid'
        }
    },
    password: {
        in:['body'],
        exists: {
            errorMessage: "password is required"
        },
        isLength: {
            options: {
                max:16
            },
            errorMessage: "password max 16 characters"
        },
        isString: {
            errorMessage: 'password must be in string'
        },
        notEmpty: {
            errorMessage: 'password cant be empty'
        },
        isStrongPassword: {
            options: {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minSymbols: 1,
                minNumbers: 0
            },
            errorMessage: "password must contain min 8 character and symbols, number, letters in uppercase and lowercase example 'Ironman@1'"
        }
    }
})

export const updateUserSchema = checkSchema({
    id: {
        in: ['params']
    },
    email: {
        in:['body'],
        exists: {
            errorMessage: "email is required"
        },
        isLength: {
            options: {
                max:100
            },
            errorMessage: "email max 100 characters"
        },
        isString: {
            errorMessage: 'email must be in string'
        },
        notEmpty: {
            errorMessage: 'email cant be empty'
        },
        isEmail: {
            errorMessage: 'format email is invalid'
        }
    },
    password: {
        in:['body'],
        exists: {
            errorMessage: "password is required"
        },
        isLength: {
            options: {
                max:16
            },
            errorMessage: "password max 16 characters"
        },
        isString: {
            errorMessage: 'password must be in string'
        },
        notEmpty: {
            errorMessage: 'password cant be empty'
        },
        isStrongPassword: {
            options: {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minSymbols: 1
            },
            errorMessage: "password must contain min 8 character and symbols, letters in uppercase and lowercase example 'Ironman@'"
        }
    }
})

export const idUserSchema = checkSchema({
    id: {
        in: ['params']
    }
})