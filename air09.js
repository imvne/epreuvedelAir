// Rotation vers la gauche

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

function rotateToTheLeft(array){
	let rotatedArray = [];
	for (let i = 1 ; i < array.length ; i++){
		rotatedArray.push(array[i])
	}
	rotatedArray.push(array[0])
	
	return rotatedArray.join(', ')
}

// Error management

function isValidArguments(arguments){
      if (arguments.length > 1){
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

function getRotatedToTheLeftArray(){
      const arguments = getArguments();
      
      if (!isValidArguments(arguments)){
            return "erreur : insérez au moins deux arguments"
      }
      else {
            return rotateToTheLeft(arguments)
      }
}

// Print

console.log(getRotatedToTheLeftArray())