import mongoose from "mongoose";

const connectDb = async () => {
	try {
		const conn = await mongoose.connect('give db connection', {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		console.log('MongoDb is Connected', conn.connection.host);
	} catch (error) {
		console.log('mongoDb failed to Connect', error)
	}
}


export default connectDb