// Sur chacun d'entre eux

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

function stringToNumbers(stringsArray){
	let numbersArray = [];
	for (string of stringsArray) {
		numbersArray.push(parseInt(string))
	}
	return numbersArray;
}

function eachAddOrSub(numbers){
	const numbersToOperate = slice(numbers, 0, numbers.length - 2);
	const operator = numbers[numbers.length-1];
	
	let numbersAfterOperation = [];
	
	for (number of numbersToOperate){
		numbersAfterOperation.push(number + operator)
	}
	
	return numbersAfterOperation.join(' ')
	
}

// Error management

function isValidArguments(arguments){
      if (arguments.length > 1){
            return true
      }
      return false
}

function isIntegers(arguments){
	
	for (character of arguments){
		const numberValue = Number(character);
		
		if (!Number.isInteger(numberValue)){ 
			return false;
		}
	}
	return true
}


// Parsing

function getArguments(){
      let arguments = slice(process.argv, 2);
      return arguments
}


// Solving

function getNumbersAddOrSub(){
      const arguments = getArguments();
      
      if (!isValidArguments(arguments)){
            return "erreur : insérez au moins deux arguments"
      }
	else if (!isIntegers(arguments)){
		return "erreur : n'insérez que des nombres"
	}
      else {
		const numbers = stringToNumbers(arguments);
            return eachAddOrSub(numbers)
      }
}

// Print

console.log(getNumbersAddOrSub())