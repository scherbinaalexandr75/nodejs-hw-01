import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    const updatedContacts = [...existingContacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(
      `✅ Успішно додано ${number} контакт(ів). Загальна кількість: ${updatedContacts.length}`,
    );
  } catch (error) {
    console.error('❌ Помилка під час генерації контактів:', error.message);
  }
};

generateContacts(5);
