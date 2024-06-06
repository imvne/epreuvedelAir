// Afficher le contenu

// Useful functions

function slice(arguments, firstIndex, endIndex = arguments.length-1){
      if (Array.isArray(arguments)){
            let argumentsSliced = [];
            for (let i = firstIndex ; i <= endIndex ; i++){
                  argumentsSliced.push(arguments[i])
            }
            return argumentsSliced
      }
      else {
            let argumentsSliced = "";
            for (let i = firstIndex ; i <= endIndex ; i++){
                  argumentsSliced += arguments[i]
            }
            return argumentsSliced
      }
}

function readTheFile(fileName){
	const fs = require('fs')
	const path = require('path');
	let extension = path.extname(fileName)
	let readOptions = {
		encoding : 'utf-8',
		flag : 'r'
	}
	
	return [fs.readFileSync(fileName, readOptions)][0]
	
}


// Error management

function isValidArguments(arguments){
      if (arguments.length === 1){
            return true
      }
      return false
}


// Parsing

function getArguments(){
      let arguments = slice(process.argv, 2);
      return arguments
}


// Solving

function getFileContent(){
      const arguments = getArguments();
      
      if (!isValidArguments(arguments)){
            return "erreur : insérez un argument"
      }
      else {
            return readTheFile(arguments[0])
      }
}

// Print

console.log(getFileContent())