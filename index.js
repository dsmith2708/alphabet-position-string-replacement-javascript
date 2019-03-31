function convertToAlphabetIndex() {
    // Get string value from form
    let stringToConvert = document.getElementById('string-input').value;

    //Sanitize string with regex and toLowerCase
    stringToConvert = stringToConvert.replace(/[^a-z]/gmi, "").replace(/\s+/g, "");
    stringToConvert = stringToConvert.toLowerCase();
}