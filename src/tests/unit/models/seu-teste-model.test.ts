import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { carMock, carMockWithId } from '../../mocks/carMock';
import { Model } from 'mongoose';
import CarModel from '../../../models/CarModel'

describe('Car Model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  it('successfully created', async () => {
    const newCar = await carModel.create(carMock);
    expect(newCar).to.be.deep.equal(carMockWithId);
  });

  it('successfully found', async () => {
    const frameFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
    expect(frameFound).to.be.deep.equal(carMockWithId);
  });
});
