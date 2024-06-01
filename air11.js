// Afficher une pyramide

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

function buildPyramid(brick, floors){
	let pyramid = [];
	let floorContent = "";
	const column = floors * 2 - 1;
	let numberOfBriks = 0;
	const whiteSpace = ' '
	
	for (let i = 0 ; i < floors ; i++){
		numberOfBriks = 1 + i * 2
		let numberOfWhiteSpaces = column - numberOfBriks
		
		floorContent += whiteSpace.repeat(numberOfWhiteSpaces / 2)
		floorContent += brick.repeat(numberOfBriks)
		floorContent += whiteSpace.repeat(numberOfWhiteSpaces / 2)
		
		pyramid.push(floorContent)
		floorContent = ""
	}
	return pyramid.join('\n')
}

// Error management

function isValidArguments(arguments){
      if (arguments.length === 2){
            return true
      }
      return false
}

function isPositiveInteger(arguments){
	const numberValue = Number(arguments);
	
	if (numberValue > 0 && Number.isInteger(numberValue)){ // n'inclus pas le zéro
		return true;
	}
}


// Parsing

function getArguments(){
      let arguments = slice(process.argv, 2);
      return arguments
}


// Solving

function getPyramidBuild(){
      const arguments = getArguments();
      
      if (!isValidArguments(arguments)){
            return "erreur : insérez deux arguments"
      }
	else if (!isPositiveInteger(arguments[1])){
		return "erreur : insérez un nombre entier positif en second argument"
	}
      else {
            return buildPyramid(arguments[0], parseInt(arguments[1]))
      }
}

// Print

console.log(getPyramidBuild())