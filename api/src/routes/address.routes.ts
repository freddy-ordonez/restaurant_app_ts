import {Router} from 'express';
import { addAddress, deleteAddress, getAddress, getOneAddress, updateAddress } from '../controller/address.controller';
import { addAddressSchema, idAddressSchema, updateAddressSchema } from '../validation/addressSchema';
import { validationSchemas } from '../middleware/middleware';

const router = Router()

router.get("/addresses", getAddress)
router.get("/addresses/:id",idAddressSchema,validationSchemas, getOneAddress)

router.post('/addresses', addAddressSchema,validationSchemas, addAddress)

router.put('/addresses/:id',updateAddressSchema,validationSchemas, updateAddress)
router.delete("/addresses/:id", idAddressSchema,validationSchemas, deleteAddress)

export default router;

