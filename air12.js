// Le roi des tris

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

function charactersToNumbers(arguments){
	let numbersArray = [];
	for (string of arguments){
		numbersArray.push(parseInt(string))
	}
	return numbersArray
}

function quickSort(array, startIndex = 0, endIndex = array.length-1){
	
	if (startIndex >= endIndex) {
		return array;
	}
	
	let pivot = Math.floor((startIndex + endIndex) / 2)
	let i = startIndex;
   	let j = endIndex;

	while (i <= j) {
		while (array[i] < array[pivot]) {
			i++;
		}
		while (array[j] > array[pivot]) {
			j--;
		}
		if (i <= j) {
			[array[i], array[j]] = [array[j], array[i]];
			i++;
			j--;
		}
	}

	if (startIndex < j) {
		quickSort(array, startIndex, j);
	}
	if (i < endIndex) {
		quickSort(array, i, endIndex);
	}
	
	return array
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

function getArrayQuickSorted(){
      const arguments = getArguments();
      
      if (!isValidArguments(arguments)){
            return "erreur : insérez au moins deux arguments"
      }
	else if (!isIntegers(arguments)){
		return "erreux n'insérez que des nombres entiers"
	}
      else {
            return quickSort(charactersToNumbers(arguments))
      }
}


// Print

console.log(getArrayQuickSorted())