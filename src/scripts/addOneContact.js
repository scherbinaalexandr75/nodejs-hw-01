import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { faker } from '@faker-js/faker';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db/db.json');

export const addOneContact = async () => {
  try {
    const data = await readFile(dbPath, 'utf-8');
    const contacts = JSON.parse(data);

    const newContact = {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number('+380#########'),
    };

    contacts.push(newContact);

    await writeFile(dbPath, JSON.stringify(contacts, null, 2), 'utf-8');

    console.log('✅ Контакт успішно додано!');
  } catch (error) {
    console.error('❌ Помилка при додаванні контакту:', error.message);
  }
};

addOneContact();
