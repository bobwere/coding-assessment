import assert from 'node:assert';
import { describe, it } from 'node:test';
import { calculateRemainingJobsAndEarnings } from '../src/helpers/calculate_earnings';
import { mock1, mock2, mock3 } from './mock_data';

describe('The calculate remaining jobs and earnings', () => {
    it('Should return 2 remaining jobs and 400 in remaining earnings when John cannot complete more than 1 job', () => {
		const result = calculateRemainingJobsAndEarnings(mock1);
		assert.strictEqual(result[0], 2);
		assert.strictEqual(result[1], 400);
	});

    it('Should return 2 remaining jobs and 400 in remaining earnings when John cannot complete more than 1 job', () => {
		const result = calculateRemainingJobsAndEarnings(mock2);
		assert.strictEqual(result[0], 2);
		assert.strictEqual(result[1], 400);
	}); 

    it('Should return 1 remaining job and 400 in remaining earnings when John can complete more than 1 job', () => {
		const result = calculateRemainingJobsAndEarnings(mock3);
		assert.strictEqual(result[0], 1);
		assert.strictEqual(result[1], 100);
	});  
});

