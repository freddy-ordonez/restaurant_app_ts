import {Router} from 'express';
import { addAddress, deleteAddress, getAddress, getOneAddress, updateAddress } from '../controller/address.controller';

const router = Router()

router.get("/address", getAddress)
router.get("/address/:id", getOneAddress)

router.post('/address', addAddress)

router.put('/address/:id', updateAddress)
router.delete("/address/:id", deleteAddress)

export default router;

