// Split en fonction

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

function stringThisSplit(stringToSplit, splitter = ' '){
	let array = [];
	let stringSplit = "";
		
	for (let i = 0 ; i < stringToSplit.length ; i++){
		
		let testString = slice(stringToSplit, i, i + splitter.length - 1)
		
		if (testString === splitter){
			array.push(stringSplit)
			stringSplit = ""
			i += splitter.length - 1
			
			
		}
		else {
			stringSplit += stringToSplit[i];
		}
		
	}
	array.push(stringSplit)
	return array.join('\n')

}



// Error management

function isValidArguments(arguments){
	if (arguments.length === 2){
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

function getStringThisSplit(){
	const arguments = getArguments();
	
	if (!isValidArguments(arguments)){
		return "erreur : insérez deux arguments"
	}
	else {
		return stringThisSplit(arguments[0], arguments[1])
	}
}

// Print

console.log(getStringThisSplit());