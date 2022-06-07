
/*
 * Complete the 'longestEvenWord' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING sentence as parameter.
 */

function longestEvenWord(str) {
  let words = str.split(' ');
  let evenWords = [];
  let longestWord = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 === 0) {
      evenWords.push(words[i]);
    }
  }
  if (evenWords.length === 0) {
    return '00';
  }
  for (let j = 0; j < evenWords.length; j++) {
    if (evenWords[j].length > longestWord.length) {
      longestWord = evenWords[j];
    }
  }
  return longestWord;
}



console.log('hey')