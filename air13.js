// Meta exercice

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

// function testAllColors() {
// 	for (let i = 0; i < 256; i++) {
// 	    const colorCode = `\x1b[38;5;${i}m`; // Code d'échappement pour la couleur
// 	    const colorCodeExample = `'\\x1b[38;5;${i}m'`;
// 	    console.log(`${colorCode}☗☗☗☗☗☗☗☗☗☗☗☗☗☗\x1b[0m`, colorCodeExample);
// 	}
// }

// testAllColors();

function coloredOutput(array){
	const pastelGreen = `\x1b[38;5;84m`;
	const foncePink = `\x1b[38;5;125m`;
	const endAnsi = '\x1b[0m';
	let coloredOutput = ""
	
	for (let i = 0 ; i < array.length ; i++){
		if (array[i].includes('success')){
			coloredOutput += `${pastelGreen}${array[i]}${endAnsi}`
		}
		else {
			coloredOutput += `${foncePink}${array[i]}${endAnsi}`
		}
		
		coloredOutput += "\n"
	}
	return coloredOutput;
}

function multiColorOutput(array){
	let firstGreen = 34; //30-51 ou 34-41
	let firstRed = 124; //30-51 ou 34-41
	const endAnsi = '\x1b[0m';
	let coloredOutput = ""
	
	for (let i = 0 ; i < array.length ; i++){
		for (let j = 0 ; j < array[i].length ; j++){
			firstGreen += 1;
			firstRed += 1;
			if (array[i].includes('success')){
				coloredOutput += `\x1b[38;5;${firstGreen}m${array[i][j]}${endAnsi}`
			}
			else {
				coloredOutput += `\x1b[38;5;${firstRed}m${array[i][j]}${endAnsi}`
			}
			if (firstGreen === 41){
				firstGreen = 34
			}
			if (firstRed === 127){
				firstRed += 4
			}
			if (firstRed === 134){
				firstRed = 124
			}
		}
		coloredOutput += "\n"
	}
	return coloredOutput;
}

function getFilesList(){ // tableau des fichiers que l'on veut tester
	const { execSync } = require('child_process')
	try{
		const stdout = execSync('ls', { encoding: 'utf-8' });
		let filesList = stdout.split('\n').filter(file => file)
		
		let filesArray = [];
		for (file of filesList){
			if (file.includes('air') && file.includes('.js') && file !== 'air13.js'){
				filesArray.push(slice(file, 0, file.length-4))
			}
		}
		return filesArray
	} 
	
	catch (error) {
		return error.message;
	}	
}

function executeFileAndGetOutput(fileName) { //output du fichier testé
	const { execSync } = require('child_process');
	try {
		// Exécute le fichier synchroniquement et récupère l'output
		const output = execSync(`node ${fileName}`, { encoding: 'utf-8' });

		return fileName.includes('air11.js') ? slice(output, 0, output.length-2) : output.trim()
	} 
	
	catch (error) {
		console.error(`Erreur lors de l'exécution du fichier ${fileName}: ${error.message}`);
		return null;
	}
}


function testsFiles(){
	const pastelGreen = `\x1b[38;5;84m`;
	const foncePink = `\x1b[38;5;125m`;
	
	let filesToTest = getFilesList()
	let testedFiles = [];
	let totalTested = 0;
	let totalSuccess = 0;
	
	for (let i = 0 ; i < Object.keys(filesInputsOutputs).length ; i++){ // i : 
		
		for (let j = 1 ; j <= Object.keys(filesInputsOutputs[filesToTest[i]]).length; j++){
			
			if (executeFileAndGetOutput(`${filesToTest[i]}.js ${filesInputsOutputs[filesToTest[i]]['test' + j].input}`) === filesInputsOutputs[filesToTest[i]]['test' + j].expectedOutput){
				testedFiles.push(`${filesToTest[i]} (${j}/${Object.keys(filesInputsOutputs[filesToTest[i]]).length}) : success`)
				totalSuccess++
				totalTested++
			}
			else {
				testedFiles.push(`${filesToTest[i]} (${j}/${Object.keys(filesInputsOutputs[filesToTest[i]]).length}) : failure`)
				totalTested++
			}
			
		}
	}
	
	return [testedFiles, `Total success: (${totalSuccess}/${totalTested})`]
}


// Parsing

let filesInputsOutputs = {
	air00 : {
		test1 : { 
			input : '"Bonjour les gars"',
			expectedOutput : ["Bonjour", "les", "gars"].join('\n'), 
		},
		
		test2 : { 
			input : '"coucou les meufs"',
			expectedOutput : ["coucou", "les", "meufs"].join('\n'), 
		},
		
		test3 : { 
			input : '',
			expectedOutput : "erreur : insérez un argument",
		}
		
	},
	
	air01 : {
		test1 : { 
			input : '"Crevette magique dans la mer des étoiles" "la"',
			expectedOutput : ["Crevette magique dans ", " mer des étoiles"].join('\n'), 
		},
		
		test2 : { 
			input : '"Crevette magique dans la mer des étoiles"',
			expectedOutput : "erreur : insérez deux arguments", 
		}
		
	},
	
	air02 : {
		test1 : { 
			input : '"je" "teste" "des" "trucs" " "',
			expectedOutput : "Je teste des trucs", 
		},
		
		test2 : { 
			input : 'Je',
			expectedOutput : "erreur : insérez au moins deux arguments", 
		}
		
	},
	
}


// Solving

function getResultsTestsFiles(){
      return coloredOutput(testsFiles()[0]) + '\n' + testsFiles()[1]
}


// Print
  
console.log(getResultsTestsFiles())