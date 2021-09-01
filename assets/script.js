var searchButtonEl = document.querySelector("#click");

var wordApi = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";

fetch(wordApi)
.then(function(response)  {
    return response.json();
})
.then(function(data) {
    console.log(data);
})