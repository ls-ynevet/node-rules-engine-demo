import { Engine, RuleProperties } from "json-rules-engine";

// Function to calculate total days to the event start date
function calculateTotalDays(eventStartDate) {
  const currentDate = new Date();
  const timeDiff = eventStartDate.getTime() - currentDate.getTime();
  const totalDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return totalDays;
}

// Define the rules
const rules: RuleProperties[] = [
  {
    name: "Rule for totalDaysToStart between 0 and 10",
    conditions: {
      all: [
        {
          fact: "totalDaysToStart",
          operator: "greaterThanInclusive",
          value: 0,
        },
        {
          fact: "totalDaysToStart",
          operator: "lessThanInclusive",
          value: 10,
        },
      ],
    },
    event: {
      type: "setOutput",
      params: {
        output: 30000,
      },
    },
  },
  {
    name: "Rule for totalDaysToStart between 10 and 20",
    conditions: {
      all: [
        {
          fact: "totalDaysToStart",
          operator: "greaterThan",
          value: 10,
        },
        {
          fact: "totalDaysToStart",
          operator: "lessThanInclusive",
          value: 20,
        },
      ],
    },
    event: {
      type: "setOutput",
      params: {
        output: 60000,
      },
    },
  },
  {
    name: "Rule for totalDaysToStart 20 or higher",
    conditions: {
      all: [
        {
          fact: "totalDaysToStart",
          operator: "greaterThanInclusive",
          value: 20,
        },
      ],
    },
    event: {
      type: "setOutput",
      params: {
        output: 120000,
      },
    },
  },
];

// Create a new engine
const engine = new Engine(rules);
const startTime = performance.now();
// Sample event start date
const eventStartDate = new Date("2024-05-15");

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

  results.events.map((event) => console.log(event.params.output)); // Output the interval
  console.log("Execution time: " + executionTime + " milliseconds");
});
