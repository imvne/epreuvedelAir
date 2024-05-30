// Split

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

function replaceEscapeSequences(string) {
	return string.replace(/\\n/g, '\n')
		    .replace(/\\t/g, '\t');
}
  
function stringSplit(stringToSplit) {
	stringToSplit = replaceEscapeSequences(stringToSplit);

	let array = [];
	let stringSplit = "";
	const splitters = [' ', '\t', '\n'];

	for (let i = 0; i < stringToSplit.length; i++) {

		if (splitters.includes(stringToSplit[i])) {
			array.push(stringSplit);
			stringSplit = "";
		} 
		else {
			stringSplit += stringToSplit[i];
		}
	}
	array.push(stringSplit);
	return array.join('\n');
}



// Error management

function isValidArguments(arguments){
	if (arguments.length >= 1){
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

function getStringSplit(){
	const arguments = getArguments();
	
	if (!isValidArguments(arguments)){
		return "erreur : insérez un argument"
	}
	else {
		return stringSplit(arguments[0])
	}
}

// Print

console.log(getStringSplit());