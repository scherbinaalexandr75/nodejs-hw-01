import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

export const removeAllContacts = async () => {
  try {
    await writeFile(dbPath, '[]', 'utf-8');
    console.log('🗑️ Усі контакти успішно видалені!');
  } catch (error) {
    console.error('❌ Помилка при видаленні контактів:', error.message);
  }
};

removeAllContacts();
