var searchButtonEl = document.querySelector("#click");
var wordTitleEl = document.querySelector("#wordTitle");
var wordDefinitionEl = document.querySelector("#wordDefinition");
var wordSynonymsEl = document.querySelector("#wordSynonyms");
var wordOriginEl = document.querySelector("#wordOrigin");
var wordExampleEl = document.querySelector("#wordExample");
var gifApiKEY = "RZpOWDlrvuEl5BafWnBkzvpjjuVEaDra"

function search(e) {
    e.preventDefault()
    var word = document.getElementById("wordInput").value
    var wordApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    fetch(wordApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            getGiphy(word);
            console.log(data[0].meanings[0].definitions[0].definition);
            console.log(data[0].meanings[0].definitions[0].synonyms);
            console.log(data[0].meanings[0].definitions[0].example);
            console.log(data[0].origin);

            wordTitleEl.textContent = word + ":";
            wordDefinitionEl.textContent = data[0].meanings[0].definitions[0].definition
           // wordSynonymsEl.textContent = data[0].meanings[0].definitions[0].synonyms
            //wordOriginEl.textContent = data[0].origin

            if (!data[0].meanings[0].definitions[0].synonyms) {
                wordSynonymsEl.textContent = "No synonym available"
            } else {
                wordSynonymsEl.textContent = data[0].meanings[0].definitions[0].synonyms
            }

            if (!data[0].meanings[0].definitions[0].example) {
                wordExampleEl.textContent = "No example available"
            } else {
                wordExampleEl.textContent = data[0].meanings[0].definitions[0].example
            }

            if (!data[0].origin) {
                wordOriginEl.textContent = "No origin available"
            } else {
                wordOriginEl.textContent = data[0].origin
            }
        })
}

// var wordInputEl = document.querySelector('#wordtyped');
// var wordSearched = document.querySelector('#word-searched');
var imageContainerEl = document.querySelector('.prof-image');

var getGiphy = function (gif) {
    var gifUrl = 'https://api.giphy.com/v1/gifs/search?q=' + gif + "&api_key=" + gifApiKEY + "&limit=10" + "&rating=pg";

    fetch(gifUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displaygif(data, gif)
            console.log(data)
        })
        .catch(function (err) {
            console.log(err);
        });
};

var displaygif = function (gifData, gifName) {
    if (gifData.data.length === 0) {
        wordContainerEl.textContent = "no gif found :(";
        return;
    }
    console.log('IMAGE DATA', gifData.data[0].images.fixed_height.url);
    console.log(imageContainerEl);
    // wordSearched.textContent = gifName;
    imageContainerEl.innerHTML = "";
    let gifEl = document.createElement("img");
    gifEl.setAttribute("alt", "placeholder text");
    gifEl.setAttribute("src",  gifData.data[0].images.fixed_height.url); 
    imageContainerEl.appendChild(gifEl);
};


// storage
var wordHistory = document.getElementById("wordInput");
//var searchButtonEl = document.querySelector("#click");



searchButtonEl.addEventListener("click", search)
searchButtonEl.addEventListener("click", wordplace)


function wordplace (event) {
    event.preventDefault();
    var word = {
  
      wordHistory: wordHistory.value.trim()
    };
  
    localStorage.setItem("word", JSON.stringify(word));
    renderWord();
  
  };
  
  function renderWord() {
    var lastWord = JSON.parse(localStorage.getItem("word"));
    if (lastWord !== null) {
      document.querySelector(".message").textContent =
        " Last Word Used: " + lastWord.wordHistory
    }
  };