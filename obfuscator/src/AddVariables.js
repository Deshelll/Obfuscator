//Добавить несуществующи переменные
const fs = require('fs');

function addVariablesToFile(inputFilePath, outputFilePath, variables) {
    try {

      let content = fs.readFileSync(inputFilePath, 'utf-8');   
  
      variables.forEach(({ name, value }) => {   // Обхожу массив переменных и добавляю их в файл
        const existingVariableRegex = new RegExp(`\\bconst\\s+${name}\\s*=\\s*[^;]+\\s*;`, 'g');
  
        if (existingVariableRegex.test(content)) {    /* Проверяю, существует ли переменная в файле
          Если переменная существует, добавляю случайное число к её значению */
          const randomSuffix = Math.floor(Math.random() * 1000);
          value = `${value}_${randomSuffix}`;
          console.log(`К переменной ${name} добавлено случайное число: ${randomSuffix}`);
        }
  
        // Удаляю все предыдущие объявления переменной из файла
        content = content.replace(existingVariableRegex, '');
  
        // Добавляю новую переменную в конец файла
        content += `\nconst ${name} = ${JSON.stringify(value)};`;
        console.log(`Переменная ${name} добавлена в файл.`);
      });
  
      // Перезаписываю другой файл с обновленным содержимым
      fs.writeFileSync(outputFilePath, content, 'utf-8');
      console.log(`Файл ${outputFilePath} успешно обновлен.`);
    } catch (error) {
      console.error(`Ошибка: ${error.message}`);
    }
  }

  const variablesToAdd = [
    {name: 'count', value: 0},
    {name: 'path', value: 'src/Test.js'},
    {name: 'total', value: 0}
  ];

  const filePath = 'C:/Users/Андрей/Desktop/obfuscator/SourceCode.js';
  const filePathOutput = 'C:/Users/Андрей/Desktop/obfuscator/OutputCode.js';

  addVariablesToFile(filePath,filePathOutput, variablesToAdd);
  