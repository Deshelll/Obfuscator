//Добавить точки с запятой
const fs = require('fs');

function addSemicolons(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf-8');

      content = content.replace(/}\s*(?=\w)(?!(\s*else))/g, '}; ');
  
      fs.writeFileSync(filePath, content, 'utf-8');
  
      console.log('Добавлены точки с запятой после закрывающих фигурных скобок функций без перехода на новую строку (исключая случаи с "else").');
  
    } catch (error) {
      console.error(`Ошибка: ${error.message}`);
    }
  }
  const filePath = 'C:/Users/Андрей/Desktop/obfuscator/OutputCode.js';

  addSemicolons(filePath);