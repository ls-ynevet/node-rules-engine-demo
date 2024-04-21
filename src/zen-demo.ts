import { ZenEngine } from "@gorules/zen-engine";
import fs from "fs/promises";

function addDays(days) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
}

const main = async () => {
  const content = await fs.readFile("./rulesets/blackwidow-jdm.json");
  const engine = new ZenEngine();

  const startDate = addDays(10).toISOString();
  const decision = engine.createDecision(content);
  const result = await decision.evaluate({
    fixture: {
      startDate,
    },
  });

  console.log(result);
};


main();
