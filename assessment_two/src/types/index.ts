export interface Goodie {
	name: string;
	price: number;
}

export interface DifferenceResult {
    goodies: Goodie[],
    difference: number
} 

export interface InputResult {
    goodies: Goodie[],
    numberOfEmployees: number
} 