import { describe, it } from 'node:test';
import assert from 'node:assert';
import { calculateMinPriceDifference } from '../src/helpers/calculate_min_price_difference';
import { mock1, mock3 } from './mock_data';


describe('calculate minimum price difference', () => {
	it('Should return correct goodies and difference when number of employees are 2', () => {

		const result = calculateMinPriceDifference(2,mock1);
		assert.deepStrictEqual(result, {
			goodies: [
                { name: 'Microwave Oven', price: 9800 },
                { name: 'Alexa', price: 9999 }
            ],
            difference: 199,
		});
	});

    it('Should return null when number of employees is more than number of goodies', () => {
		const result = calculateMinPriceDifference(10, mock3);
		assert.strictEqual(result, null);
	});

	it('Should return null when number of employees is less than 1', () => {
		const result = calculateMinPriceDifference(0, mock3);

		assert.strictEqual(result, null);
	});
});
