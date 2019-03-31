function convertToAlphabetIndex() {
    // Get string value from form
    let stringToConvert = document.getElementById('string-input').value;

    // Sanitize string with regex and toLowerCase
    stringToConvert = stringToConvert.replace(/[^a-z]/gmi, "").replace(/\s+/g, "");
    stringToConvert = stringToConvert.toLowerCase();

    // Construct output string using by gtting position in alphabet using charCodeAt
    let convertedString = '';
    [...stringToConvert].forEach((char) => {
        console.log('position of ', char, ' in alphabet is: ', char.charCodeAt(0) - 96);
        convertedString += (char.charCodeAt(0) - 96 + ' ');
    });

    console.log('final string: ', convertedString);
}