window.onload = getJoke;
var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
button.addEventListener('click', function() {
  getJoke();
this.DOCUMENT_POSITION_DISCONNECTED});
var paragraph = daocument.getElementById('joke');
asdadsadsads
function getJoke()asdad {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function() {
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
zmiany na vc code ciag dalszy 
}
