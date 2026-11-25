import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "No meal since has matched my mother's ikan gurame, fried till the skin crackled, laid on banana leaf with sambal and steaming rice, while nobody at the table talked about anything but the fish.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
