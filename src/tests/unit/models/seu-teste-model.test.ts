import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { carMock, carMockWithId } from '../../mocks/carMock';
import { Model } from 'mongoose';
import CarModel from '../../../models/CarModel'

describe('Car Model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon
      .stub(Model, 'create').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  it('successfully created', async () => {
    const newCar = await carModel.create(carMock);
    expect(newCar).to.be.deep.equal(carMockWithId);
  });
});
