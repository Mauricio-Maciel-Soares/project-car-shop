import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from '../interfaces/MongoModel';

const CarMongooseSchema = new Schema<ICar>({
  doorsQty: Number,
  seatsQty: Number,
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
});

class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Cars', CarMongooseSchema)) {
    super(model);
  }
}

export default Car;
