const caesar = function(string, shift) {
    const punctuation = ' ,!';
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let newAscii;
        if (!punctuation.includes(char)) {
            if (char === char.toUpperCase()) {
                newAscii = (char.charCodeAt(0) - 65 + shift) % 26;
                if (newAscii < 0) {newAscii += 26};
                newAscii += 65;
            } else {
                newAscii = (char.charCodeAt(0) - 97 + shift) % 26;
                if (newAscii < 0) {newAscii += 26};
                newAscii += 97;
            }

            newString += String.fromCodePoint(newAscii);
            
        } else {
            newString += char;
        }
    }
    return newString;
};

// Do not edit below this line
module.exports = caesar;
