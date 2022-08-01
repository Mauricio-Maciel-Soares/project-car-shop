import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
	model: 'Fusca',
  year:1979,
  color: 'Azul',
  status: true,
  buyValue: 15000,
  seatsQty: 4,
  doorsQty: 2,
};

const carMockWithId: ICar & { _id: string } = {
	_id: '62cf1fc6498565d94eba52cd',
	model: 'Fusca',
  year:1979,
  color: 'Azul',
  status: true,
  buyValue: 15000,
  seatsQty: 4,
  doorsQty: 2,
};

export {
	carMock,
  carMockWithId,
};
