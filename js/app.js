// input data
const textInput = document.querySelector("#text-input");

// output place
const outputPlace = document.querySelector("#text-output");

// spinning animation 
const loading = document.querySelector("#spinner");

// btn
const buttonTranslate = document.querySelector("#btn-translate");

buttonTranslate.addEventListener("click", translateHandler);
// pirate 
var url = "https://api.funtranslations.com/translate/pirate.json"

// functional part

function showSpinner() {
    loading.className = "show";
    setTimeout(() => {
        loading.className = loading.className.replace("show", "");
    }, 5000);
}

function hideSpinner() {
    loading.className = loading.className.replace("show", "");
}

function errorHandler(error) {
    hideSpinner()
    outputPlace.innerHTML = "Error " + error;
}
function translateHandler(event) {
    showSpinner()
    var inputData = textInput.value;
    var finalURL = buildURL(inputData);

    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            hideSpinner()
            outputPlace.innerText = json.contents.translated;
        })
        .catch(errorHandler)
}

function buildURL(inData) {
    return `${url}?text=${inData}`;
}