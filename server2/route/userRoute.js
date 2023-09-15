import Express from "express";
import { getUser, createUser } from '../controller/userController.js'


const router = Express.Router()

router.route('/').get(getUser).post(createUser)



export default router