require('dotenv').config();
const mongoose = require('mongoose');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/bug';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });

        console.log('[+] Mongo db connected')
    } catch (err) {
        console.log(err)
        process.exit(1);
    }
}

module.exports = connectDB;