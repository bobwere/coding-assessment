import { calculateRemainingJobsAndEarnings } from "./helpers/calculate_earnings";
import { processInputFile } from "./helpers/read_sample_input";
import { processOutputFile } from "./helpers/write_sample_output";

const executeApp = async () => {
    const jobs = await processInputFile(`fixtures/sample_input_1.txt`);

    const [remainingJobsCount, remainingJobsEarning ] = await calculateRemainingJobsAndEarnings(jobs);

    await processOutputFile(`fixtures/sample_output.txt`, [`The number of tasks and earnings available for others:\n`,`Task: ${remainingJobsCount}\n`, `Earnings: ${remainingJobsEarning}` ]);

	process.exit();
};

executeApp();