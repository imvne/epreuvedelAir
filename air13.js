// Meta exercice

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

function testFiles(fileName){
	const fs = require('fs')
	const path = require('path');
	fs.readFile(fileName, 'utf8', (err, data) => {
	    if (err) {
		  return console.error(err)
	    }
	
	    const content = data;
	    const extension = path.extname(fileName)
	    return console.log([data, extension])
	})
	
}


// Error management

function isValidArguments(arguments){
      if (arguments.length > 0){
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

function getResultsTestsFiles(){
      const arguments = getArguments();
      
      if (!isValidArguments(arguments)){
            return "erreur : insérez au moins deux arguments"
      }
      else {
            return testFiles(arguments[0])
      }
}


// Print

console.log(getResultsTestsFiles())