function convertToAlphabetIndex() {
    // Get string value from form
    let stringToConvert = document.getElementById('string-input').value;

    // Sanitize string with regex and toLowerCase
    stringToConvert = stringToConvert.replace(/[^a-z]/gmi, "").replace(/\s+/g, "");
    stringToConvert = stringToConvert.toLowerCase();

    // Get and place final output in output paragraph tag
    document.getElementById('output').innerText = getOutputString(stringToConvert);
}

// Construct output string using by getting position in alphabet using charCodeAt
function getOutputString(sanitisedString) {

    // Return message if no valid unput is found
    if( !sanitisedString.length ) {
        return 'No valid alphabet characters found, please enter a valid string';
    }

    // Construct final output if input is valid
    let convertedString = '';
    [...sanitisedString].forEach((char) => {
        convertedString += (char.charCodeAt(0) - 96 + ' ');
    });

    return convertedString;
}