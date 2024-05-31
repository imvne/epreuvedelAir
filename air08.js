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

function stringToNumbers(stringsArray){
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
	
	return newSortedArray;
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

function getTwoSortedArraysBlend(){
      const arguments = getArguments();
      
      if (!isValidArguments(arguments)){
            return "erreur : insérez au moins deux arguments"
      }
	else if (!isIntegers){
		return "erreur : n'insérez que des entiers"
	}
      else {
		const arraysMinusSplitter = getArraysMinusSplitter(arguments, 'fusion')
		const firstArray = stringToNumbers(arraysMinusSplitter[0])
		const secondArray = stringToNumbers(arraysMinusSplitter[1])
		
            return blendTwoSortedArrays(firstArray, secondArray)
      }
}

// Print

console.log(getTwoSortedArraysBlend())
