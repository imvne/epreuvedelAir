// Concat

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

function toBigLetters(arguments){
	if (Array.isArray(arguments)){
		let bigLetters = [];
		
		for (string of arguments){
			bigLetters.push(toBigLetters(string))
		}
		return bigLetters
	}
	else {
		let bigLetters = "";
		for ( let i = 0 ; i < arguments.length ; i++){
			
			if (arguments.charCodeAt(i) >= 97 && arguments.charCodeAt(i) <= 122){
				bigLetters += String.fromCharCode(arguments.charCodeAt(i) - 32)
			}
			else {
				bigLetters += arguments[i]
			}
		}
		return bigLetters
	}
}

function concatArray(stringsArray, joint){
	let string = "";
	
	for (let i = 0 ; i < stringsArray.length ; i++){
		if (i === 0){ // première lettre du premier mot en maj
			string += toBigLetters(stringsArray[i][0]) + slice(stringsArray[i], 1) + joint
		}
		else if (i === stringsArray.length - 1){ // pas d'espace après le dernier mot
			string += stringsArray[i]
		}
		else {
			string += stringsArray[i] + joint
		}
	}
	return string
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

function getArrayJoined(){
	const arguments = getArguments();
	
	if (!isValidArguments(arguments)){
		return "erreur : insérez au moins deux arguments"
	}
	else {
		return concatArray(slice(arguments, 0, arguments.length - 2), arguments[arguments.length-1])
	}
}


// Print

console.log(getArrayJoined());