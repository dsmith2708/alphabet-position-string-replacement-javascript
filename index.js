function convertToAlphabetIndex() {
    let stringToConvert = document.getElementById('string-input').value;
    stringToConvert = stringToConvert.replace(/[^a-z]/gmi, "").replace(/\s+/g, "");
    console.log('sanitized string: ', stringToConvert);
}