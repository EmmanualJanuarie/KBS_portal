import { cp, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const source = fileURLToPath(new URL("../src/assets/images/", import.meta.url));
const destination = fileURLToPath(new URL("../public/src/assets/images/", import.meta.url));

await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true, force: true });
