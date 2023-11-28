//Преименовать переменные
const fs = require('fs');

function generateRandomName(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomName = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomName += characters.charAt(randomIndex);
  }
  return randomName;
}

function renameVariablesInFile(filePath) {
  try {
 
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Словарь для отслеживания соответствия оригинальных имен переменных и их новых случайных имен
    const variableMap = {};

    // Находим все переменные вида "const имя = значение;"
    const variableRegex = /\b(?:const|let|var)\s+([a-zA-Z_]\w*)\s*=\s*([^;]+)\s*;/g;
    let match;

    while ((match = variableRegex.exec(content)) !== null) {
      const originalName = match[1];

      // Проверяю, было ли уже присвоено случайное имя данной переменной
      if (!variableMap.hasOwnProperty(originalName)) {
        // Генерирую новое случайное имя
        const newName = generateRandomName(8);

        // Сохраняю соответствие между оригинальным и новым именем
        variableMap[originalName] = newName;

        // Заменяю все вхождения оригинального имени в файле на новое имя
        content = content.replace(new RegExp(`\\b${originalName}\\b`, 'g'), newName);
      }
    }

    fs.writeFileSync(filePath, content, 'utf-8');

    console.log('Переменные успешно переименованы:');
    console.log(variableMap);
    
  } catch (error) {
    console.error(`Ошибка: ${error.message}`);
  }
}

const filePath = 'C:/Users/Андрей/Desktop/obfuscator/OutputCode.js';

renameVariablesInFile(filePath);