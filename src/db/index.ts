import mongoose, { SchemaTypes } from 'mongoose';

mongoose.Promise = global.Promise;

mongoose
  .connect(
    'mongodb+srv://productListUser:productListPassword@cluster0.4fvuj.mongodb.net/integ',
    {
      user: process.env.MONGO_DB_USER,
      pass: process.env.MONGO_DB_PASSWORD,
    }
  )
  .then(() => {
    console.log('successfully connected to the database');
  })
  .catch((err) => {
    console.log('unable to connect to the database');
    process.exit();
  });

const Schema = mongoose.Schema;

const ProductModelSchema = new Schema({
  id: Number,
  brand: String,
  description: String,
  price: Number,
});

const UserModelSchema = new Schema({
  id: Number,
  name: String,
  age: Number,
});

export const ProductModel = mongoose.model('ProductModel', ProductModelSchema);
export const UserModel = mongoose.model('UserModel', UserModelSchema);
