import { DifferenceResult, Goodie } from "../types";


/**
 *
 * @param goodies Array of goodies
 * @param number_of_employees Number of employees to be distributed to
 * @returns Object containing the selected goodies and the difference between the highest and lowest price
 */
export function calculateMinPriceDifference(
    numberOfEmployees:number, goodies:Goodie[]): DifferenceResult {
        if (numberOfEmployees < 1 || numberOfEmployees > goodies.length) {
            return null;
        }
    
        goodies.sort((a, b) => a.price - b.price);
    
        let minDifference = Infinity;
        let selectedGoodies: Goodie[] = [];
    
        for (let i = 0; i <= goodies.length - numberOfEmployees; i++) {
            const difference =
                goodies[i + numberOfEmployees - 1].price - goodies[i].price;
            if (difference < minDifference) {
                minDifference = difference;
                selectedGoodies = goodies.slice(i, i + numberOfEmployees);
            }
        }
    
        return { goodies: selectedGoodies, difference: minDifference };
}