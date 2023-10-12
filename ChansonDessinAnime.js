/* Méthode principale du plugin
	Params:
	- data: objet state provenant de <plugin>.action.js
		- data.client: Le client qui a passé la règle
	- callback: lien entre plugin (toujours renvoyé en fin de méthode, interne, non utilisé)
*/
exports.action = function(data, callback){

	// Tableau d'actions
	var tblCommand = {
		// Règle command1 (objet rule) dans le fichier de propriétés
		command1 : function() {  
						// point d'entrée - Méthode à exécuter
						// Exemple avec l'exécution d'une méthode command1
						command1 (data, client);
					},
		// Règle command2 (objet rule) dans le fichier de propriétés						
		command2 : function() {  
						// point d'entrée - Méthode à exécuter
						// Exemple avec l'exécution d'une méthode command2
						command2 (data, client);
					}					
	};
	
	// Cherche si le nom d'une pièce est présente et est différente du client qui a passé la règle.
	// Par exemple, "Allume la lumière dans le Salon"
	// Si oui, alors client = "Salon" sinon client = data.client 
	// La variable client contiendra donc la pièce où doit être exécutée l'action
	// data.client contiendra la pièce où les réponses d'Avatar seront dites (les speak, les askme).
	let client = setClient(data);

	// Info console
	info("ChansonDessinAnime:", data.action.command, "From:", data.client, "To:", client);
	
	// Appel dans le tableau d'actions de la fonction à exécuter
	// provient de <plugin>.action.js et l'objet state.action.command
	tblCommand[data.action.command]();
	
	// Fonction de callback, lien entre plugins (Obligatoire, toujours renvoyé en fin de méthode)
	callback();
 
}



function command1 (data, client) {
	
	// récupération de l'action à exécuter pour la pièce dans le property
	var action_module = Config.modules.ChansonDessinAnime.clients[client][data.action.command];
	
	// récupération du tts en relation avec la pièce dans le property
	var tts = Config.modules.ChansonDessinAnime.tts[client][data.action.command];
	
	// Exemple d'action
	// Remplacez le speak par votre action
	Avatar.speak("J'exécute l'actionneur " + action_module + " pour la pièce " + client, data.client, function(){
		
		// Après l'action je vocalise un message
		Avatar.speak(tts, data.client, function(){
			// Remet l'écoute sur le client après le traitement complet
			Avatar.Speech.end(data.client);
		});
		
	});
	
}



function command2 (data, client) {
	
	// récupération de l'action à exécuter pour la pièce dans le property
	var action_module = Config.modules.ChansonDessinAnime.clients[client][data.action.command];
	
	// récupération du tts en relation avec la pièce dans le property
	var tts = Config.modules.ChansonDessinAnime.tts[client][data.action.command];
	
	// Exemple d'action
	// Remplacez le speak par votre action
	Avatar.speak("J'exécute l'actionneur " + action_module + " pour la pièce " + client, data.client, function(){
		
		// Après l'action je vocalise un message
		Avatar.speak(tts, data.client, function(){
			// Remet l'écoute sur le client après le traitement complet
			Avatar.Speech.end(data.client);
		});
		
	});
	
}




// Méthode de recherche du client où l'action doit être exécutée.
function setClient (data) {

	// Init de la variable avec data.client (le client qui a passé la règle)
	var client = data.client;
	
	// Test si une pièce est ajoutée dans la règle.
	// Défini par la méthode Avatar.ia.clientFromRule du <plugin>.actions.js
	// Peut retourner 'current' pour la pièce courante
	if (data.action.room)
		client = (data.action.room != 'current') ? data.action.room : (Avatar.currentRoom) ? Avatar.currentRoom : Config.default.client;

	// Peut provenir d'une commande HTTP où un paramètre "setRoom" est défini avec le nom d'une pièce
	if (data.action.setRoom)
		client = data.action.setRoom;
	
	// On peut ajouter d'autres tests suivant d'autres paramètres provenant d'autres sources...
	// if (data.action.<autre param>)
	//	client = data.action.<autre param>


	// Retourne le nom de la pièce où l'action doit être exécutée.
	return client;
}