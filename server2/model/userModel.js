import mongoose from 'mongoose'


const User = mongoose.Schema({
	name: String,
	age: String,
	phone: Number,
	city: String,
})

export default mongoose.model('User', User)