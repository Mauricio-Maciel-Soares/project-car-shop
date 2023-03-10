import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { carMock, carMockWithId } from '../../mocks/carMock';
import CarService from '../../../services/CarService';
import CarModel from '../../../models/CarModel';
import CarController from '../../../controllers/CarController';
import { Request, Response } from 'express';

describe('Car Controller', () => {
  const car = new CarModel();
  const carService = new CarService(car);
  const carController = new CarController(carService);
  const req = {} as Request; 
  const res = {} as Response;

  before(async () => {
    sinon.stub(carService, 'create').resolves(carMock);
    sinon.stub(carService, 'readOne').resolves(carMockWithId);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })

  it('successfully created', async () => {
    req.body = carMock;

    await carController.create(req, res);

    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
  });

  it('ReadOne Success', async () => {
    req.params = { id: carMockWithId._id };
    await carController.readOne(req, res);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
  });
});
