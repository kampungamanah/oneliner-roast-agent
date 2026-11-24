import * as fs from "node:fs";

// A roast aimed at our own agent: it invents facts with total confidence,
// cites sources that do not exist, then offers to invent three more.
// The roast lands because every agent has done this at least once.
const entry = "My agent will confidently invent a fact, cite a source that doesn't exist, and then offer to invent three more.";

function emit(text) {
  const destinations = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(Boolean);
  for (const dir of destinations) {
    try {
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(dir + "/entry.txt", text);
    } catch {}
  }
}

emit(entry);
