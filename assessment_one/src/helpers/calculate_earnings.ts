import { Job } from "../types";


/**
 *
 * @param jobs Array of Jobs to be processed
 * @returns Array containing remaining number of jobs as first item and total earnings for the remaining jobs as second item
 */
export function calculateRemainingJobsAndEarnings(jobs:Job[]): [number,number] {
    let johnsJobs: Job[] = [];
    let remainingJobs: Job[] = [];

    // sort jobs by profit
    jobs.sort(
        function(a, b) {          
           if (a.profit === b.profit) {
              // time is only important when profits are the same
              return a.start_time - b.start_time == 0 ? a.end_time - b.end_time : a.start_time - b.start_time
           }
           return a.profit > b.profit ? -1 : 1;
        });

    // record most profitable job
    johnsJobs.push(jobs[0]);

    // update remaining jobs list
    remainingJobs = jobs.slice(-`${jobs.length-1}`);
  
    // determine if there is any other job John can work on incase there is no time overlap
    for (let i = 0; i < remainingJobs.length; i++) {
        if (
            remainingJobs[i].start_time >= johnsJobs.slice(-1)[0].end_time 
        ) {
            // update johns jobs list
            johnsJobs.push(remainingJobs[i]);

            // update remaining jobs list
            remainingJobs.splice(i, 1);
        }
    }

    // calc remaining jobs total earnings
    const remainingJobsEarnings = remainingJobs.reduce(
		(total, job) => total + job.profit,
		0
	);

	return [remainingJobs.length, remainingJobsEarnings];
}
