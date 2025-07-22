import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

export const removeLastContact = async () => {
  try {
    const data = await readFile(dbPath, 'utf-8');
    const contacts = JSON.parse(data);

    if (Array.isArray(contacts) && contacts.length > 0) {
      contacts.pop();

      await writeFile(dbPath, JSON.stringify(contacts, null, 2), 'utf-8');
      console.log('✂️ Останній контакт успішно видалено!');
    } else {
      console.log('ℹ️ Контактів для видалення немає.');
    }
  } catch (error) {
    console.error(
      '❌ Помилка при видаленні останнього контакту:',
      error.message,
    );
  }
};

removeLastContact();
