import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'


const getUser = asyncHandler(async (req, res) => {

	try {
		const user = await User.find()
		res.status(200).json(user)

	} catch (error) {
		console.log('user not found', error);
	}

})
const createUser = asyncHandler(async (req, res) => {

	try {
		const addUser = req.body
		const user = await User.create(addUser)
		const savedUser = user.save()
		res.status(200).json(savedUser)

	} catch (error) {
		console.log('user not added', error);
	}

})


export { getUser, createUser }