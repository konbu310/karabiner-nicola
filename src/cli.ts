import fs from "node:fs/promises";
import path from "node:path";
import util from "node:util";
import { generate } from "./generator";

const { values: args } = util.parseArgs({
  args: process.argv.slice(2),
  allowPositionals: true,
  options: {
    left: {
      type: "string",
      default: "spacebar",
    },
    right: {
      type: "string",
      default: "f13",
    },
    fileName: {
      type: "string",
      default: "nicola.json",
    },
  },
});

try {
  const json = await generate({
    leftShift: args.left,
    rightShift: args.right,
  });
  await fs.mkdir("dist", { recursive: true });
  await fs.writeFile(path.join("dist", args.fileName), json);
} catch (e) {
  console.error(e);
  process.exit(1);
}
