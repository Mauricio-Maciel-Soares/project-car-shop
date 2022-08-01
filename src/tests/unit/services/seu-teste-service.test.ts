import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { carMock, carMockWithId } from '../../mocks/carMock';
import { Model } from 'mongoose';
import CarService from '../../../services/CarService'
import CarModel from '../../../models/CarModel'

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon
      .stub(carModel, 'create').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  it('successfully created', async () => {
    const newCar = await carService.create(carMock);
    expect(newCar).to.be.deep.equal(carMockWithId);
  });
});
