var searchButtonEl = document.querySelector("#click");
var word = "dog"




//
var gifApiKEY = "RZpOWDlrvuEl5BafWnBkzvpjjuVEaDra"


//

var wordApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

fetch(wordApi)
.then(function(response)  {
    return response.json();
})
.then(function(data) {
    getGiphy(word);
    console.log(data[0].meanings[0].definitions[0].definition);
    console.log(data[0].meanings[0].definitions[0].synonyms);
    console.log(data[0].meanings[0].definitions[0].example);
    console.log(data[0].origin);
})







 // Alexis - gif vars and functions
//gif var
var gifSearchWord = document.querySelector("#click");
//gif var
//gif input
var gif1InputEl = document.querySelector('#gif1')



var getGiphy = function (gif) {

    var gifUrl = 'https://api.giphy.com/v1/gifs/search?q=' + gif + "&api_key=" + gifApiKEY +"&limit=10"+"&rating=pg";



    fetch(gifUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displaygif(data, gif)
            console.log(data)
        })
        .catch(function (err) {
            console.error(err);
        });

};


var displaygif = function (gifData, gifName) {
    if (gifData.length === 0) {
        weatherContainerEL.textContent= "no gif found :(";
        return;
    }

    console.log(gifData)
gifSearchWord.textContent = gifName


}

    // fetch(gifUrl) weather fetch- doesn't seem to work here
    //     .then(function (response) {
    //         if (response.ok) {
    //             response.json().then(function (data1) {

    //                 displaygif(data1, gif);
    //                 console.log(data1);
    //             });
    //         } else {
    //             alert('Error Input: ' + response.statusText) // can't use alerts must use modals- if nothing was entered
    //         }
    //     })
    //     .catch(function (error) {
    //         alert('no connetion - secure the api using meta');// you cant use alerts- this is just a placeholder.
    //     });

//};

















