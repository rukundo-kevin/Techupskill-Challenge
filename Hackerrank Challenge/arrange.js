function removeSpecialCharacters(sentence){
    return sentence.replace(/[^a-zA-Z ]/g, '');
}

function ChangeFirstLetterToUppercase(words){
    return words.charAt(0).toUpperCase() + words.slice(1) + '.';
}

function arrange(sentence){
    sentence = removeSpecialCharacters(sentence).toLowerCase();
    let words = sentence.split(' ');
    words.sort((a,b) => a.length - b.length);
    words = ChangeFirstLetterToUppercase(words.join(' '));
    return words;
}

console.log(orderWordsByLength('The lines are printed *^e in rev(@erse order'));
