var ytdl = require('./node_modules/ytdl-core/lib/index.js');

window.onload = function(){
	var videlement = document.getElementById("player");
	try{
		videlement.src = ytdl('https://www.youtube.com/watch?v=zbC7zC8FIxg&t=2s');
	} catch (e){
		alert("invalid url!");	
		console.log(e);
	}
};