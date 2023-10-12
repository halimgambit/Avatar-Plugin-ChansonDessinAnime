exports.action = function(data, callback){

	var tblCommand = {
		
	        dragonball : function() {dessinAnime ("dragonball_z", data, client);},					
		goldorak : function() {dessinAnime ("goldorak", data, client);},
		spiderman : function() {dessinAnime ("spiderman", data, client);},					
		chevalierZodiaque : function() {dessinAnime ("chevalier_zodiaque", data, client);},
		albator : function() {dessinAnime ("albator", data, client);},					
		aladdin : function() {dessinAnime ("aladdin", data, client);},
		Astro : function() {dessinAnime ("Astro", data, client);},					
		batman : function() {dessinAnime ("batman", data, client);},
		belleSebastien : function() {dessinAnime ("belle_sebastien", data, client);},					
		capitaineFlam : function() {dessinAnime ("capitaine_flam", data, client);},
		arretanime : function() {dessinAnime ("stopanime", data, client);}
	};
	
	function dessinAnime (anime, data, client) {

		if(anime === "dragonball_z") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/dragonballz_debut.mp3', data.client);
		}
		if(anime === "goldorak") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/goldorak_ennemi.mp3', data.client);
		}
		if(anime === "spiderman") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/spiderman.mp3', data.client);	
		}
		if(anime === "chevalier_zodiaque") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/chevalier_zodiaque.mp3', data.client);
		}
		if(anime === "albator") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/albator_84.mp3', data.client);
		}
		if(anime === "aladdin") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/aladdin.mp3', data.client);
		}
		if(anime === "Astro") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/Astro%20le%20petit%20robot.mp3', data.client);
		}
		if(anime === "batman") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/batman.mp3', data.client);
		}
		if(anime === "belle_sebastien") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/belle_sebastien.mp3', data.client);
		}
		if(anime === "capitaine_flam") {
			Avatar.play('%URL%https://www.dinosoria.com/generiques/dessins_anime/capitaine_flam.mp3', data.client);
		}

		if(anime === "stopanime") {
			Avatar.speak("J'arète les chansons dessin animé", data.client, () => {
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
