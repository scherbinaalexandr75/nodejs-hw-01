import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

export const getAllContacts = async () => {
  try {
    const data = await readFile(dbPath, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error('❌ Помилка при зчитуванні контактів:', error.message);
    return [];
  }
};

getAllContacts().then((contacts) => {
  console.log('📋 Контакти:', contacts);
});
