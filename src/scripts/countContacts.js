import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

export const countContacts = async () => {
  try {
    const data = await readFile(dbPath, 'utf-8');
    const contacts = JSON.parse(data);

    const count = Array.isArray(contacts) ? contacts.length : 0;
    return count;
  } catch (error) {
    console.error('❌ Помилка при підрахунку контактів:', error.message);
    return 0;
  }
};

countContacts().then((count) => {
  console.log(`🔢 Кількість контактів: ${count}`);
});
