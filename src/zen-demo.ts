import { ZenEngine } from "@gorules/zen-engine";
import fs from "fs/promises";

const main = async () => {
  const content = await fs.readFile("./blackwidow-jdm.json");
  const engine = new ZenEngine();

  const decision = engine.createDecision(content);
  const result = await decision.evaluate({
    fixture: {
      startDate: "2024-05-27T15:25:00",
    },
  });

  console.log(result);
};


main();
