function convertToAlphabetIndex() {
    // Get string value from form
    let stringToConvert = document.getElementById('string-input').value;

    // Sanitize string with regex and toLowerCase
    stringToConvert = stringToConvert.replace(/[^a-z]/gmi, "").replace(/\s+/g, "");
    stringToConvert = stringToConvert.toLowerCase();

    // Construct output string using by getting position in alphabet using charCodeAt
    let convertedString = '';
    [...stringToConvert].forEach((char) => {
        convertedString += (char.charCodeAt(0) - 96 + ' ');
    });

    // Place final output in output paragraph tag
    document.getElementById('output').innerText = convertedString;
}