import { Response, Request} from "express";
import Address from "../model/address";
import Restaurant from "../model/restaurant";

export const getAddress = async (req: Request, res: Response)=> {
    const allAddress = await Address.findAll();
    return res.status(200).json(allAddress)
}

export const getOneAddress = async (req: Request, res: Response)=> {
    if(isNaN(parseInt(req.params.id))) return res.status(404).send({mesage: "Bad Request"})

    const addressId = req.params.id

    try {
        const findAddress = await Address.findOne({
            where: {
                id: addressId
            }
        })
        if(!findAddress) return res.status(404).send({message: "Not Found"}) 
        return res.status(200).json(findAddress);
    } catch (error) {
        return res.status(500).send({message: error})
    }
}

export const addAddress = async (req: Request, res: Response)=> {
    const {country, city, address, telephone, emailSupport, restaurantId} = req.body
    console.log(restaurantId);
    
    try {
        const findRestaurant = await Restaurant.findOne({
            where: {
                id: restaurantId
            }
        })
        
        if(!findRestaurant) return res.sendStatus(404);
        const newAddress = await Address.create({
            country,
            address,
            city,
            telephone,
            emailSupport,
            restaurantId
        })
        await newAddress.save()
        return res.status(201).json(newAddress)
    } catch (error) {
        return res.status(500).send({message: error})
    }
}

export const updateAddress = async (req: Request, res: Response)=> {
    if(isNaN(parseInt(req.params.id))) return res.status(404).send({mesage: "Bad Request"})
    
    const addressId = req.params.id
    const {country, city, address, telephone, emailSupport} = req.body

    try {
        const findAddress = await Address.findOne({
            where: {
                id: addressId
            }
        })
        if(!findAddress) return res.status(404).send({message: "Not Found"})
        
        findAddress.country = country;
        findAddress.city = city
        findAddress.address = address;
        findAddress.telephone = telephone;
        findAddress.emailSupport = emailSupport

        await findAddress.save()

        return res.status(200).json(findAddress);
    } catch (error) {
        return res.status(500).send({message: error})
    }
}

export const deleteAddress = async (req: Request, res: Response)=> {
    if(isNaN(parseInt(req.params.id))) return res.status(404).send({mesage: "Bad Request"})
    
    const addressId = req.params.id
    
    try {
        const deleteAddres = await Address.destroy({
            where: {
                id: addressId
            }
        })
        console.log(deleteAddres);
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).send({message: error})
    }
}