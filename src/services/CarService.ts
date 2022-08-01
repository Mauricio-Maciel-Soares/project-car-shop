import { isValidObjectId } from 'mongoose';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../catalogErrors/catalog';

class CarService implements IService<ICar> { 
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    return this._car.create(obj);
  }

  public async read(): Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(_id: string): Promise<ICar | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);
    console.log(ErrorTypes.InvalidMongoId);
    const car = await this._car.readOne(_id);

    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;
  }
}

export default CarService;
