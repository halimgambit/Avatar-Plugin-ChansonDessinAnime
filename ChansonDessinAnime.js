exports.action = function(data, callback){

	var tblCommand = {
	
		dragonball : function() {dessinAnnime ("dragonball_z", data, client);},					
		goldorak : function() {dessinAnnime ("goldorak", data, client);},
		spiderman : function() {dessinAnnime ("spiderman", data, client);},					
		chevalierZodiaque : function() {dessinAnnime ("chevalier_zodiaque", data, client);},
		albator : function() {dessinAnnime ("albator", data, client);},					
		aladdin : function() {dessinAnnime ("aladdin", data, client);},
		Astro : function() {dessinAnnime ("Astro", data, client);},					
		batman : function() {dessinAnnime ("batman", data, client);},
		belleSebastien : function() {dessinAnnime ("belle_sebastien", data, client);},					
		capitaineFlam : function() {dessinAnnime ("capitaine_flam", data, client);},
		arretAnnime : function() {dessinAnnime ("stopAnnime", data, client);}
	};
	
	function dessinAnnime (annime, data, client) {

		if(annime === "dragonball_z") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/dragonballz_debut.mp3', data.client);
		}
		if(annime === "goldorak") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/goldorak_ennemi.mp3', data.client);
		}
		if(annime === "spiderman") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/spiderman.mp3', data.client);	
		}
		if(annime === "chevalier_zodiaque") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/chevalier_zodiaque.mp3', data.client);
		}
		if(annime === "albator") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/albator_84.mp3', data.client);
		}
		if(annime === "aladdin") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/aladdin.mp3', data.client);
		}
		if(annime === "Astro") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/Astro%20le%20petit%20robot.mp3', data.client);
		}
		if(annime === "batman") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/batman.mp3', data.client);
		}
		if(annime === "belle_sebastien") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/belle_sebastien.mp3', data.client);
		}
		if(annime === "capitaine_flam") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/capitaine_flam.mp3', data.client);
		}

		if(annime === "stopAnnime") {
			Avatar.speak("J'arète les chansons dessin annimé", data.client, () => {
				Avatar.Speech.end(data.client, true, () => {
				Avatar.stop(null, client, () => {
				});
			});
		});
		}
	
	}
	
	
	let client = setClient(data);
	info("ChansonDessinAnime:", data.action.command, "From:", data.client, "To:", client);
	tblCommand[data.action.command]();
	callback();
}


function setClient (data) {
	let client = data.client;
	if (data.action.room)
	client = (data.action.room != 'current') ? data.action.room : (Avatar.currentRoom) ? Avatar.currentRoom : Config.default.client;
	if (data.action.setRoom)
	client = data.action.setRoom;
	return client;
}
