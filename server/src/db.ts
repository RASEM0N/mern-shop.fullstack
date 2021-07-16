import * as mongoose from 'mongoose'

async function connectToDB() {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log(`MongoDB Connected: ${connect.connection.host}`)
}

export default connectToDB
