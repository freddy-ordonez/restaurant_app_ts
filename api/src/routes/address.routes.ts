import {Router} from 'express';
import { addAddress, deleteAddress, getAddress, getOneAddress, updateAddress } from '../controller/address.controller';
import { addAddressSchema, idAddressSchema, updateAddressSchema } from '../validation/addressSchema';

const router = Router()

router.get("/address", getAddress)
router.get("/address/:id",idAddressSchema, getOneAddress)

router.post('/address', addAddressSchema, addAddress)

router.put('/address/:id',updateAddressSchema, updateAddress)
router.delete("/address/:id", idAddressSchema, deleteAddress)

export default router;

