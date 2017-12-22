var results = {
	'экзоскелет': {
		image: '../images/exo3.png',
		url: '../exos.html'
	}
}

// Speech recognition supported only in Chrome
// Once started, you need to allow Chrome to use the microphone
var recognition = new webkitSpeechRecognition();
var text = document.getElementById("text");
var container = document.getElementsByClassName("main")[0];

// Be default, Chrome will only return a single result.
// By enabling "continuous", Chrome will keep the microphone active.
recognition.interimResults = true;
recognition.continuous = false;
recognition.lang = "ru-RU";
recognition.onresult = function(event) {
  // Get the current result from the results object
  var transcript = event.results[event.results.length - 1][0].transcript;
  transcript = transcript.toLowerCase();
  transcript = transcript.trim();
  var res = results[transcript];
  if (res) {
  	container.innerHTML = '<a href="' + res.url + '"><img src="' + res.image + '"></a>';
  }

  text.innerHTML = transcript;
  console.log(transcript);
}

// Start the recognition
recognition.start();

recognition.onend = function() {
    // restart recognition on end event
    recognition.start();
}
