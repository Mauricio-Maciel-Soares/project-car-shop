import * as sinon from 'sinon';
import chai from 'chai';
import { ZodError } from 'zod';
const { expect } = chai;
import {
  carMock,
  carMockWithId,
  allCarsMock,
} from '../../mocks/carMock';
import CarService from '../../../services/CarService'
import CarModel from '../../../models/CarModel'
import { ErrorTypes } from '../../../catalogErrors/catalog'

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
		sinon.stub(carModel, 'read').resolves(allCarsMock);
		sinon.stub(carModel, 'readOne')
    .onCall(0).resolves(carMockWithId) 
    .onCall(1).resolves(null)
    .onCall(2).resolves(carMockWithId); 
  });

  after(()=>{
    sinon.restore();
  })

  describe('Create Car', () => {
		it('Successfully created', async () => {
			const carCreated = await carService.create(carMock);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Fail', async () => {
			try {
				await carService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

  it('successfully found all cars', async () => {
    const carsFound = await carModel.read();
    expect(carsFound).to.be.deep.equal(allCarsMock);
  });

  describe('ReadOne car', () => {
		it('Success', async () => {
			const carCreated = await carService.readOne(carMockWithId._id);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Fail', async () => {
			try {
				await carService.readOne(carMockWithId._id);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});

    it('_id not found', async () => {
      try {
        await carModel.readOne('wrongNumber');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
	});

});
