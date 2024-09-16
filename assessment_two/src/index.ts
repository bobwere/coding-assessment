import { calculateMinPriceDifference } from "./helpers/calculate_min_price_difference";
import { processInputFile } from "./helpers/read_sample_input";
import { processOutputFile } from "./helpers/write_sample_output";

const executeApp = async () => {
    const inputResult = await processInputFile(`fixtures/sample_input_1.txt`);

    const differenceResult = await calculateMinPriceDifference(
        inputResult.numberOfEmployees, inputResult.goodies
    );

    const goodiesOutputStrings = [];

    for (const goodie of differenceResult.goodies) {
        goodiesOutputStrings.push(`${goodie.name}: ${goodie.price}\n`)
    }

    await processOutputFile(`fixtures/sample_output.txt`, [`The goodies selected for distribution are:\n`, ...goodiesOutputStrings, `And the difference between the chosen goodie with highest price and the lowest price is ${differenceResult.difference}`]);

	process.exit();
};

executeApp();