//Удалить пробелы
const fs = require('fs');

function removeSpacesBetweenLines(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf-8');

      content = content.replace(/[\n\s]/g, '');

      fs.writeFileSync(filePath, content, 'utf-8');

      console.log('Пробелы и символы новой строки успешно удалены в файле.');

    } catch (error) {
      console.error(`Ошибка: ${error.message}`);
    }
  }

const filePath = 'C:/Users/Андрей/Desktop/obfuscator/OutputCode.js';
  
removeSpacesBetweenLines(filePath);