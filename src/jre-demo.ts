import { Engine, RuleProperties } from "json-rules-engine";
import fs from "fs/promises";
import { addDaysFromNow } from "./common.js";

// Function to calculate total days to the event start date
function calculateTotalDays(eventStartDate) {
  const currentDate = new Date();
  const timeDiff = eventStartDate.getTime() - currentDate.getTime();
  const totalDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return totalDays;
}


// Create a new engine
const fileData: string = await fs.readFile(
  "./rulesets/blackwidow-jre.json",
  "utf-8"
);
const rulesSet: RuleProperties[] = JSON.parse(fileData);

const engine = new Engine(rulesSet);

const startTime = performance.now();
// Sample event start date
const randomNumber = Math.floor(Math.random() * 31);
const eventStartDate = addDaysFromNow(randomNumber);

// Calculate total days to event start date
const totalDaysToStart = calculateTotalDays(eventStartDate);

// Define the fact
const fact = { totalDaysToStart };

// Run the engine with the fact
engine.run(fact).then((results) => {
  // End measuring time
  const endTime = performance.now();

  // Calculate execution time in milliseconds
  const executionTime = endTime - startTime;

  results.events.map((event) =>
    console.log("scanning interval: ", event.params.output)
  ); // Output the interval
  console.log("performance: " + executionTime + " ms");
});
