
function executeDeleteComments() {

    console.log('Выполняю AddVariables.js');
    require('./src/AddVariables.js');

    console.log('Выполняю DeleteComments.js');
    require('./src/DeleteComments.js');

    console.log('Выполняю Renamer.js');
    require('./src/Renamer.js');

    console.log('Выполняю StartDeleteWhiteSpaceAndAddSemicolons.js');
    require('./src/startCombo/StartDeleteWhiteSpaceAndAddSemicolons.js');

  }
  executeDeleteComments(); 