playbutton.onclick = function() {
  responsiveVoice.cancel();
  responsiveVoice.speak(document.getElementById('text').value, document.getElementById('voiceselection').value);
};
stopbutton.onclick = function() {
  responsiveVoice.cancel();
};