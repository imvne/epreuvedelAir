# epreuvedelAir
J'ai effecuté ces exercices en essayant de ne pas utiliser de fonctions toutes faites.

air00.js - Split

    Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).
    
    Votre programme devra utiliser une fonction prototypée comme ceci :
    ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
    	# votre algorithme
    	return (tableau)
    }
    
    Exemples d’utilisation :
    $> python exo.py “Bonjour les gars”
    Bonjour
    les
    gars
    
    Afficher error et quitter le programme en cas de problèmes d’arguments.
    

air01.js - Split en fonction

    Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.
    
    Votre programme devra intégrer une fonction prototypée comme ceci :
    ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
    	# votre algorithme
    	return (tableau)
    }
    
    Exemples d’utilisation :
    $> python exo.py “Crevette magique dans la mer des étoiles” “la”
    Crevette magique dans 
     mer des étoiles
    
    Afficher error et quitter le programme en cas de problèmes d’arguments.


air02.js - Concat

    Créez un programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères. Espacés d’un séparateur donné en dernier argument au programme.
    
    Utilisez une fonction de ce genre (selon votre langage) :
    ma_fonction(array_de_strings, separateur) {
    	# votre algorithme
    	return (string)
    }
    
    Exemples d’utilisation :
    $> python exo.py “je” “teste” “des” “trucs” “ “
    Je teste des trucs
    
    
    Afficher error et quitter le programme en cas de problèmes d’arguments.


air03.js - Chercher l'intrus

    Créez un programme qui retourne la valeur d’une liste qui n’a pas de paire.
    
    Exemples d’utilisation :
    $> python exo.py 1 2 3 4 5 4 3 2 1
    5
    
    $> python exo.py bonjour monsieur bonjour
    monsieur
    
    Afficher error et quitter le programme en cas de problèmes d’arguments.


air04.js - Un seul à la fois
    
    Créez un programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.
    
    Exemples d’utilisation :
    $> python exo.py “Hello milady,   bien ou quoi ??”
    Helo milady, bien ou quoi ?
    
    Afficher error et quitter le programme en cas de problèmes d’arguments.


air05.js - Sur chacun d'entre eux

    Créez un programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.
    
    Exemples d’utilisation :
    $> ruby exo.rb 1 2 3 4 5 “+2”
    3 4 5 6 7
    
    $> ruby exo.rb 10 11 12 20 “-5”
    5 6 7 15
    
    L’opération à appliquer sera toujours le dernier élément.
    
    Afficher error et quitter le programme en cas de problèmes d’arguments.


air06.js - Contrôle de pass sanitaire

    Créez un programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.
    
    Utilisez une fonction de ce genre (selon votre langage) :
    ma_fonction(array_de_strings, string) {
    	# votre algorithme
    	return (nouvel_array_de_strings)
    }
    
    Exemples d’utilisation :
    $> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “t”
    Michel
    
    $> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “a”
    Michel, Thérèse, Benoit
    
    Afficher error et quitter le programme en cas de problèmes d’arguments.


air07.js - Insertion dan sun tableau trié

    Créez un programme qui ajoute à une liste d’entiers triée un nouvel entier tout en gardant la liste triée dans l’ordre croissant. Le dernier argument est l’élément à ajouter.
    
    Utilisez une fonction de ce genre (selon votre langage) :
    sorted_insert(array, new_element) {
    	# your algo
    	return (new_array)
    }
    
    Exemples d’utilisation :
    $> ruby exo.rb 1 3 4 2
    1 2 3 4
    
    $> ruby exo.rb 10 20 30 40 50 60 70 90 33
    10 20 30 33 40 50 60 70 90
    
    Afficher error et quitter le programme en cas de problèmes d’arguments.


air08.js - Mélanger deux tableaux triés
    
    Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.
    
    Utilisez une fonction de ce genre (selon votre langage) :
    sorted_fusion(array1, array2) {
    	# your algo
    	return (new_array)
    }
    
    Exemples d’utilisation :
    $> ruby exo.rb 10 20 30 fusion 15 25 35
    10 15 20 25 30 35
    
    Afficher error et quitter le programme en cas de problèmes d’arguments.


air09.js - Rotation vers la gauche
    
    Créez un programme qui décale tous les éléments d’un tableau vers la gauche. Le premier élément devient le dernier à chaque rotation.
    
    Utilisez une fonction de ce genre (selon votre langage) :
    ma_rotation(array) {
    	# votre algorithme
    	return (new_array)
    }
    
    Exemples d’utilisation :
    $> python exo.py “Michel” “Albert” “Thérèse” “Benoit”
    Albert, Thérèse, Benoit, Michel
    
    Afficher error et quitter le programme en cas de problèmes d’arguments.


air10.js - Afficher le contenu
    
    Créez un programme qui affiche le contenu d’un fichier donné en argument.
    
    Exemples d’utilisation :
    $> cat a.txt
    Je danse le mia
    $> ruby exo.rb “a.txt”
    Je danse le mia
    
    Afficher error et quitter le programme en cas de problèmes d’arguments ou de fichier inaccessible.


air11.js - Afficher une pyramide
    
    Afficher un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre.
    
    Exemples d’utilisation :
    $> ruby exo.rb O 5
        O
       OOO
      OOOOO
     OOOOOOO
    OOOOOOOOO
    
    Afficher error et quitter le programme en cas de problèmes d’arguments.


air12.js - Le roi des tris

    Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri rapide (QuickSort).
    
    Vous utiliserez une fonction de cette forme (selon votre langage) :
    my_quick_sort(array) {
    	# votre algorithme
    	return (new_array)
    }
    
    Exemples d’utilisation :
    $> python exo.py 6 5 4 3 2 1
    1 2 3 4 5 6
    
    Afficher error et quitter le programme en cas de problèmes d’arguments.
    
    Wikipedia vous présentera une belle description de cet algorithme de tri.


air13.js - Meta exercice

    Créez un programme qui vérifie si les exercices de votre épreuve de l’air sont présents dans le répertoire et qu’ils fonctionnent (sauf celui là). Créez au moins un test pour chaque exercice.
    
    Exemples d’utilisation :
    $> python exo.py
    air00 (1/3) : success
    air00 (2/3) : success
    air00 (3/3) : success
    air01 (1/2) : success
    air01 (2/2) : failure
    air02 (1/1) : success
    ... 
    Total success: (56/62)
    
    Bonus : trouvez le moyen d’utiliser du vert et du rouge pour rendre réussites et échecs plus visibles.
