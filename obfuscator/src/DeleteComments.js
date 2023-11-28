//Удалить комментарии
const fs = require('fs');

function removeCommentsFromFile(filePath) {

  let content = fs.readFileSync(filePath, 'utf-8');   

  content = content.replace(/\/\/.*?(\r\n|\n|$)/g, '');   
  content = content.replace(/\/\*[\s\S]*?\*\//g, ''); 

  fs.writeFileSync(filePathOutput, content, 'utf-8'); 

  console.log(`Комментарии удалены из файла: ${filePath}`);
}

const filePath = 'C:/Users/Андрей/Desktop/obfuscator/OutputCode.js';
const filePathOutput = 'C:/Users/Андрей/Desktop/obfuscator/OutputCode.js';

removeCommentsFromFile(filePath);