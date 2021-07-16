require('dotenv').config({
    path: './src/.env',
})
import connectToDB from './db'
import Order from './models/order'
import Product from './models/product'
import User from './models/user'

import products from './data/products'
import users from './data/user'

connectToDB().catch((e) => console.log(`ERROR: ${e.message}`))

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

switch (process.argv[2]) {
    case '-d': {
        destroyData().catch((e) => console.log(`Error: ${e.message}`))
        break
    }
    case '-a': {
        importData().catch((e) => console.log(`Error: ${e.message}`))
        break
    }
    default: {
        break
    }
}
