// Small helper to read the JSON "database" files in /data.
// Swap this out for a real database (MongoDB, MySQL...) later.
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', 'data');

export async function readData(fileName) {
  const raw = await fs.readFile(path.join(DATA_DIR, fileName), 'utf-8');
  return JSON.parse(raw);
}
