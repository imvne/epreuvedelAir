// Contrôle de pass sanitaire

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

function toSmallLetters(arguments){
	if (Array.isArray(arguments)){
		let smalLetters = [];
		
		for (string of arguments){
			smalLetters.push(toSmallLetters(string))
		}
		return smalLetters
	}
	else {
		let smallLetters = "";
		for ( let i = 0 ; i < arguments.length ; i++){
			
			if (arguments.charCodeAt(i) >= 65 && arguments.charCodeAt(i) <= 90){
				smallLetters += String.fromCharCode(arguments.charCodeAt(i) + 32)
			}
			else {
				smallLetters += arguments[i]
			}
		}
		return smallLetters
	}
}

function minusString(stringsArray, stringWanted){
	let arrayMinusString = [];
	
	for (let i = 0 ; i < stringsArray.length ; i++){
		let stringNotFound = true;
		
		for (let j = 0 ; j < stringsArray[i].length ; j++){
			let testString = slice(stringsArray[i], j, j + stringWanted.length - 1)
			
			if (toSmallLetters(testString) === toSmallLetters(stringWanted)){
				stringNotFound = false;
			}
		}
		
		if (stringNotFound){
			arrayMinusString.push(stringsArray[i])
		}
	}
	
	return arrayMinusString.join(', ')
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

function getStringsMinusString(){
      const arguments = getArguments();
      
      if (!isValidArguments(arguments)){
            return "erreur : insérez au moins deux arguments"
      }
      else {
            return minusString(slice(arguments, 0, arguments.length-2), arguments[arguments.length-1])
      }
}

// Print

console.log(getStringsMinusString())