// Chercher l'intrus

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

function whereAreTheOddOnes(array){
	let oddOnes = [];
	let counters = { };
	for (let i = 0 ; i < array.length ; i++){
		if (counters[array[i]] === undefined){
			counters[array[i]] = 1
		}
		else if (counters[array[i]] !== undefined){
			continue
		}
		
		for (let j = 0 ; j < array.length ; j++){
			if (j === i){
				continue
			}
			else if (array[j] === array[i]){
				counters[array[i]] ++
			}
		}
		if (counters[array[i]] % 2 !== 0){
			oddOnes.push(array[i])
		}
	}
	
	return oddOnes;
}

// Error management

function isValidArguments(arguments){
	if (arguments.length > 2){
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

function getTheOddOnes(){
	const arguments = getArguments();
	
	if (!isValidArguments(arguments)){
		return "erreur : insérez au moins trois arguments"
	}
	else {
		return whereAreTheOddOnes(arguments)
	}
}

// Print

console.log(getTheOddOnes())