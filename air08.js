// Mélanger deux tableaux triés

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

function getArraysMinusSplitter(array, splitter){
	let firstArray = [];
	let secondArray = [];
	let splitterNotFound = true;
	
	for (let i = 0 ; i < array.length ; i++){
		
		for (let j = 0 ; j < array[i].length ; j++){
			let testString = slice(array[i], j, j + splitter.length - 1)
			
			if (testString === splitter){
				splitterNotFound = false;
			}
			
		}
		
		if (!splitterNotFound && array[i] !== splitter){
			secondArray.push(array[i])
		}
		
		if (splitterNotFound){
			firstArray.push(array[i])
		}
		else if (array[i] === splitter){
			continue
		}
	}
	
	return [firstArray, secondArray];
}

function blendTwoSortedArrays(firstArray, secondArray){
	let newSortedArray = [];
	let firstCounter = 0;
	let secondCounter = 0;
	
		
	while ( secondCounter < secondArray.length && firstCounter < firstArray.length ){
		
		if (secondArray[secondCounter] < firstArray[firstCounter]){
			newSortedArray.push(secondArray[secondCounter])
			secondCounter++
		}
		else {
			newSortedArray.push(firstArray[firstCounter])
			firstCounter++
		}
		
	}
		
	
	while (firstCounter < firstArray.length){
		newSortedArray.push(firstArray[firstCounter])
		firstCounter++
		
	}
	while (secondCounter < secondArray.length){
		newSortedArray.push(secondArray[secondCounter])
		secondCounter++
		
	}
	
	return newSortedArray.join(' ');
}

// Error management

function isValidArguments(arguments){
      if (arguments.length > 2){
            return true
      }
      return false
}

function isIntegers(arguments){
	
	for (element of arguments){
		const numberValue = Number(element);
		
		if (!Number.isInteger(numberValue)){ 
			return false;
		}
	}
	return true
}

function containsString(arguments){
	if (arguments.includes('fusion')){
		return true
	}
	return false
}

function isSorted(arguments){
	for (let i = 0 ; i < arguments.length ; i++){
		if (arguments[i] > arguments[i + 1]){
			return false
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

function getTwoSortedArraysBlend(){
      const arguments = getArguments();
      const firstArray = getArraysMinusSplitter(arguments, 'fusion')[0]
	const secondArray = getArraysMinusSplitter(arguments, 'fusion')[1]
	
      if (!isValidArguments(arguments)){
            return "erreur : insérez au moins trois arguments"
      }
	else if (!containsString(arguments)){
		return "erreur : séparez les arguments par 'fusion'"
	}
	else if (!isIntegers(firstArray) || !isIntegers(secondArray)){
		return "erreur : n'insérez que des entiers"
	}
	else if(!isSorted(stringToIntNumbers(firstArray)) || !isSorted(stringToIntNumbers(secondArray))){
		return "erreur : insérez deux listes respectivement triées"
	}
      else {
            return blendTwoSortedArrays(stringToIntNumbers(firstArray), stringToIntNumbers(secondArray))
      }
}

// Print

console.log(getTwoSortedArraysBlend())
