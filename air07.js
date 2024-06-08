// Insertion dans un tableau trié

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

function stringToIntNumbers(stringsArray){
	let numbersArray = [];
	for (string of stringsArray) {
		numbersArray.push(parseInt(string))
	}
	return numbersArray;
}

function insertInSortedArray(sortedArray, newElement){
	let newSortedArray = []
	let newElementPushed = false;
	
	for (let i = 0 ; i < sortedArray.length ; i++){
		if (!newElementPushed && newElement < sortedArray[i]){
			newSortedArray.push(newElement)
			newSortedArray.push(sortedArray[i])
			newElementPushed = true;
		}
		else {
			newSortedArray.push(sortedArray[i])
		}
	}
	
	return newSortedArray.join(' ')
}


// Error management

function isValidArguments(arguments){
      if (arguments.length > 2){
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

function getNewSortedArray(){
      const arguments = getArguments();
      
      if (!isValidArguments(arguments)){
		return "erreur : insérez au moins trois arguments"
      }
	else if (!isIntegers(arguments)){
		return "erreur : n'insérez que des entiers"
	}
      else {
		const numbers = stringToIntNumbers(arguments)
            return insertInSortedArray(slice(numbers, 0, numbers.length-2), numbers[numbers.length-1])
      }
}

// Print

console.log(getNewSortedArray())