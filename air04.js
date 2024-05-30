// Un seul à la fois

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

function deleteDuplicates(string){
	let stringWithoutDuplicates = '';
	for (let i = 0 ; i < string.length ; i++){
		if (string[i] === string[i + 1]){
			continue
		}
		else {
			stringWithoutDuplicates += string[i]
		}
	}
	return stringWithoutDuplicates;
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

function getStringWithoutDuplicates(){
      const arguments = getArguments();
      
      if (!isValidArguments(arguments)){
            return "erreur : insérez un argument"
      }
      else {
            return deleteDuplicates(arguments[0])
      }
}

// Print

console.log(getStringWithoutDuplicates())