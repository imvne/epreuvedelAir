// Meta exercice

// Useful functions - colored outputs functions

function testAllColors() {
	for (let i = 0; i < 256; i++) {
		const colorCode = `\x1b[38;5;${i}m`; // Code d'échappement pour la couleur
		const colorCodeExample = `'\\x1b[38;5;${i}m'`;
		console.log(`${colorCode}☗☗☗☗☗☗☗☗☗☗☗☗☗☗\x1b[0m`, colorCodeExample);
	}
}

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

function coloredOutputTotalSuccesses(string){
	const pastelGreen = `\x1b[38;5;84m`;
	const foncePink = `\x1b[38;5;125m`;
	const endAnsi = '\x1b[0m';
	
	let numbers = string.replace(/[^\d]/g, ' ').trim().split(/\s+/);
	
	if (numbers[0] < Math.round(numbers[1] / 2)){
		return `${foncePink}${string}${endAnsi}`
	}
	else {
		return `${pastelGreen}${string}${endAnsi}`
	}
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

		return fileName.includes('air11.js') ? slice(output, 0, output.length-2) : output.trim() // exception pour le fichier air11.js qui affiche un pyramide avec des espaces
	} 
	
	catch (error) {
		console.error(`Erreur lors de l'exécution du fichier ${fileName}: ${error.message}`);
		return null;
	}
}


function testFiles(){
	let filesToTest = getFilesList()
	let testedFiles = [];
	let totalTested = 0; // +1 chaque fois qu'un test est fait
	let totalSuccess = 0; // +1 chaque fois qu'un test est réussi
	
	for (let i = 0 ; i < Object.keys(filesInputsOutputs).length ; i++){ // i : fichier JS à tester, récupérés de la fonction getFilesList
		
		for (let j = 1 ; j <= Object.keys(filesInputsOutputs[filesToTest[i]]).length; j++){ // j : tests de chaque fichier JS, récupérés de l'objet filesInputsOutputs
			
			if (executeFileAndGetOutput(`${filesToTest[i]}.js ${filesInputsOutputs[filesToTest[i]]['test' + j].input}`) === filesInputsOutputs[filesToTest[i]]['test' + j].expectedOutput){ // si le résultat de la fonction qui éxecute et stocke l'output et strictement égal à l'output attendu lui stocké dans l'objet filesInputsOutputs, alors c'est un test réussi
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
			expectedOutput : `Bonjour\nles\ngars`, 
		},
		
		test2 : { 
			input : '"coucou les meufs"',
			expectedOutput : `coucou\nles\nmeufs`, 
		},
		
		test3 : { 
			input : '',
			expectedOutput : "erreur : insérez un argument",
		}
		
	},
	
	air01 : {
		test1 : { 
			input : '"Crevette magique dans la mer des étoiles" "la"',
			expectedOutput : `Crevette magique dans \n mer des étoiles`, 
		},
		
		test2 : { 
			input : '"Crevette magique dans la mer des étoiles"',
			expectedOutput : "erreur : insérez deux arguments", 
		}
		
	},
	
	air02 : {
		test1 : { 
			input : '"je" "suis" "mon" "âme" " "',
			expectedOutput : "Je suis mon âme", 
		},
		
		test2 : { 
			input : 'Je',
			expectedOutput : "erreur : insérez au moins deux arguments", 
		},
		
		test3 : { 
			input : '"êtes" "vous" "votre" "âme" " "',
			expectedOutput : "Êtes vous votre âme", 
		},
	},
	
	air03 : {
		test1 : { 
			input : 'je suis je',
			expectedOutput : "suis", 
		},
		
		test2 : { 
			input : '1 2',
			expectedOutput : "erreur : insérez au moins trois arguments", 
		},
		
		test3 : { 
			input : '2 3 4 5 6 5 4 3 2',
			expectedOutput : "6", 
		},
		
		test4 : { 
			input : '19 18 19 18 0 -1',
			expectedOutput : "0 -1", 
		},
	},
	
	air04 : {
		test1 : { 
			input : '"Notre eesprit est une terre fertilee,, sur laquelle tout peut pousser"',
			expectedOutput : "Notre esprit est une tere fertile, sur laquele tout peut pouser", 
		},
		
		test2 : { 
			input : '',
			expectedOutput : "erreur : insérez un argument", 
		},
	},
	
	air05 : {
		test1 : { 
			input : '1 2 3 4 5 "+2"',
			expectedOutput : "3 4 5 6 7", 
		},
		
		test2 : { 
			input : '+1',
			expectedOutput : "erreur : insérez au moins deux arguments", 
		},
	},
	
	air06 : {
		test1 : { 
			input : "'cest' 'génial' 'quand' 'ça' 'marche' 'a'",
			expectedOutput : "cest", 
		},
		
		test2 : { 
			input : "'Abdou' 'Ibou' 'Bintou' 'Fatou' 'a'",
			expectedOutput : "Ibou, Bintou", 
		},
		
		test3 : { 
			input : 'oui',
			expectedOutput : "erreur : insérez au moins deux arguments", 
		},
	},
	
	air07 : {
		test1 : { 
			input : "1 5 7 3",
			expectedOutput : "1 3 5 7", 
		},
		
		test2 : { 
			input : '1 2',
			expectedOutput : "erreur : insérez au moins trois arguments", 
		},
	},
	
	air08 : {
		test1 : { 
			input : "10 20 30 fusion 15 25 35",
			expectedOutput : "10 15 20 25 30 35", 
		},
		
		test2 : { 
			input : '1 2',
			expectedOutput : "erreur : insérez au moins trois arguments", 
		},
		
		test3 : { 
			input : "10 20 30 15 25 35",
			expectedOutput : "erreur : séparez les arguments par 'fusion'", 
		},
		
		test4 : { 
			input : "10 20 fusion -45.6",
			expectedOutput : "erreur : n'insérez que des entiers", 
		},
	},
	
	air09 : {
		test1 : { 
			input : "'Ahmed' 'Karim' 'Thérèse' 'Aïcha'",
			expectedOutput : "Karim, Thérèse, Aïcha, Ahmed", 
		},
		
		test2 : { 
			input : '1 5 6 7 8',
			expectedOutput : "5, 6, 7, 8, 1", 
		},
		
		test3 : { 
			input : "Imane",
			expectedOutput : "erreur : insérez au moins deux arguments", 
		},
	},
	
	air10 : {
		test1 : { 
			input : "air10.txt",
			expectedOutput : `Je pense depuis longtemps déjà que si un jour les méthodes \nde destruction de plus en plus efficaces finissent par \nrayer notre espèce de la planète, ce ne sera pas la \ncruauté qui sera la cause de notre extinction, et \nmoins encore, bien entendu l'indignitation qu' \néveille la cruauté, ni même les représailles \net la vengance qu'elle s'attire... mais la \ndocilité, l'absence, de responsabilité \nde l'homme moderne, son acceptation \nvile et sevile du moindre décret \npublic. Les horreurs auxquelles \nnous allons maintenant assi-\nster ne signalent pas que \nles rebelles, les insu-\nbordonnés, les réfra-\nctaires sont de plus \nen plus nombreux \ndans le monde, \nmais plutôt qu'il y a de plus en plus d'hommes obéissants \n\t\t\t\t\t\tet dociles.\nGoerges Bernanos`, 
		},
		
		test2 : { 
			input : '',
			expectedOutput : "erreur : insérez un argument", 
		},
	},
	
	air11 : {
		test1 : { 
			input : "A 5",
			expectedOutput : "    A    \n   AAA   \n  AAAAA  \n AAAAAAA \nAAAAAAAAA", 
		},
		
		test2 : { 
			input : 'O',
			expectedOutput : "erreur : insérez deux arguments", 
		},
		
		test3 : { 
			input : "P -2",
			expectedOutput : "erreur : insérez un nombre entier positif en second argument", 
		},
	},
	
	air12 : {
		test1 : { 
			input : "13 19 8 9 7 1",
			expectedOutput : "1 7 8 9 13 19", 
		},
		
		test2 : { 
			input : '19',
			expectedOutput : "erreur : insérez au moins deux arguments", 
		},
		
		test3 : { 
			input : '1 2 3.5',
			expectedOutput : "erreur : n'insérez que des nombres entiers", 
		},
	},
	
}


// Solving

function getResultsTestsFiles(){
	let filesTestsCompleted = testFiles()
	
      return coloredOutput(filesTestsCompleted[0]) + '\n' + coloredOutputTotalSuccesses(filesTestsCompleted[1]) 
	// 0 contient tout les tests et 1 contient la ligne total des tests réussis
}


// Print
  
console.log(getResultsTestsFiles())