console.log("WELCOME TO GAME!");
let original = prompt("Enter your sentence:").trim().toLowerCase();
let words = original.split(" ");
let newWords = [];
for (let word of words) {
  if ("aeiou".includes(word[0])) {
    let newWord = word + "yay";
    newWords.push(newWord);
  } else {
    let vowelPos = 0;
    for (let letter of word) {
      if (!("aeiou".includes(letter))) {
        vowelPos++;
      } else {
        break;
      }
    }
    let cons = word.substring(0, vowelPos);
    let theRest = word.substring(vowelPos);
    let newWord = theRest + cons + "ay";
    newWords.push(newWord);
  }
}
console.log(newWords.join(" "));

