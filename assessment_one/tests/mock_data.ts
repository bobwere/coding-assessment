import { Job } from "../src/types";

export const mock1: Job[] = [
	{ start_time: 900, end_time: 1030, profit: 100 }, 
	{ start_time: 1000, end_time: 1200, profit: 500 }, 
	{ start_time: 1100, end_time: 1200, profit: 300 },
];

export const mock2: Job[] = [
	{ start_time: 900, end_time: 1000, profit: 250 }, 
	{ start_time: 945, end_time: 1200, profit: 550 }, 
	{ start_time: 1130, end_time: 1500, profit: 150 },
];

export const mock3: Job[] = [
	{ start_time: 900, end_time: 1030, profit: 100 }, 
	{ start_time: 1000, end_time: 1200, profit: 100 }, 
	{ start_time: 1100, end_time: 1200, profit: 100 },
];