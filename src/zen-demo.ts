import { ZenEngine } from "@gorules/zen-engine";
import fs from "fs/promises";
import { addDaysFromNow } from "./common.js";


const main = async () => {
  const content = await fs.readFile("./rulesets/blackwidow-jdm.json");
  const engine = new ZenEngine();

  const randomNumber = Math.floor(Math.random() * 31);
  const eventStartDate = addDaysFromNow(randomNumber).toISOString();
  const decision = engine.createDecision(content);
  const result = await decision.evaluate({
    fixture: {
      eventStartDate,
    },
  });

  console.log(result);
};

main();