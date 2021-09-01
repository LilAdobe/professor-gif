var searchButtonEl = document.querySelector("#click");
var word = "dog"

var wordApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

fetch(wordApi)
.then(function(response)  {
    return response.json();
})
.then(function(data) {
    console.log(data[0].meanings[0].definitions[0].definition);
    console.log(data[0].meanings[0].definitions[0].synonyms);
    console.log(data[0].meanings[0].definitions[0].example);
    console.log(data[0].origin);
})

























