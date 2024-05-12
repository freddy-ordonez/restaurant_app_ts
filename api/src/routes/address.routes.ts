import {Router} from 'express';
import { addAddress, deleteAddress, getAddress, getOneAddress, updateAddress } from '../controller/address.controller';
import { addAddressSchema, idAddressSchema, updateAddressSchema } from '../validation/addressSchema';
import { validacionSchemas } from '../middleware/middleware';

const router = Router()

router.get("/addresses", getAddress)
router.get("/addresses/:id",idAddressSchema,validacionSchemas, getOneAddress)

router.post('/addresses', addAddressSchema,validacionSchemas, addAddress)

router.put('/addresses/:id',updateAddressSchema,validacionSchemas, updateAddress)
router.delete("/addresses/:id", idAddressSchema,validacionSchemas, deleteAddress)

export default router;

