import {Router} from 'express';
import { addAddress, deleteAddress, getAddress, getOneAddress, updateAddress } from '../controller/address.controller';
import { addAddressSchema, idAddressSchema, updateAddressSchema } from '../validation/addressSchema';
import { validacionSchemas } from '../middleware/middleware';

const router = Router()

router.get("/address", getAddress)
router.get("/address/:id",idAddressSchema,validacionSchemas, getOneAddress)

router.post('/address', addAddressSchema,validacionSchemas, addAddress)

router.put('/address/:id',updateAddressSchema,validacionSchemas, updateAddress)
router.delete("/address/:id", idAddressSchema,validacionSchemas, deleteAddress)

export default router;

