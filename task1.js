/** Task 1
  Given a sentence with multiple lowercase words separated by spaces, 
  write a Javascript code that finds the longest word in the sentence. 
  If there are multiple words of the same length, choose one that has the highest number of vowels. 
  Ignore any character in the sentence that is not a letter or a space. Find the most efficient way to achieve this.
 */

/**  Sample input: 
  “Smart people learn from everything and everyone, average people from their experience, stupid people already,
  have all the answers” (Socrates)
 */

const sampleInput = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"

function findLongestWord(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const vowels = "aiueo"
  const sentenceArray = sentence.split(" ")

  let tempLongest = ""
  let wordCount = 0

  for (let i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i].length >= wordCount) {
      let counter = 0
      for (let j = 0; j < sentenceArray[i].length; j++) {
        for (let k = 0; k < alphabet.length; k++) {
          if (sentenceArray[i][j].toLowerCase() == alphabet[k]) {
            counter++
          }
        }
      }
      if (counter > wordCount) {
        tempLongest = sentenceArray[i]
        wordCount = counter
      } else if (counter == wordCount) {
        tempLongest += ` ${sentenceArray[i]}`
      }
    }
  }

  const longestWord = tempLongest.split(' ')
  let vowelCount = 0
  let answer = ""

  for (let i = 0; i < longestWord.length; i++) {
    let counter = 0
    for (let j = 0; j < longestWord[i].length; j++) {
      for (let k = 0; k < vowels.length; k++) {
        if (longestWord[i][j] == vowels[k]) {
          counter++
        }
      }
    }
    if (counter > vowelCount) {
      vowelCount = counter
      answer = longestWord[i]
    }
  }
  return answer.split(',')? answer.split(',')[0] : answer
}

console.log(findLongestWord(sampleInput))

/** Task 2
 * 
 */