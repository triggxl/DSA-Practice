const HashMap = require('./hashmaps');

// let lotr = new HashMap()
// lotr.set("Hobbit", "Bilbo");
// lotr.set("Hobbit", "Frodo");
// lotr.set("Wizard", "Gandalf");
// lotr.set("Human", "Aragorn");
// lotr.set("Elf", "Legolas");
// lotr.set("Maiar", "The Necromancer")
// lotr.set("Maiar", "Sauron");
// lotr.set("RingBearer", "Gollum");
// lotr.set("LadyOfLight", "Galadriel");
// lotr.set("HalfElven", "Arwen");
// lotr.set("Ent", "TreeBeard");

// console.log(lotr)
// console.log(lotr.get("Maiar"))
// console.log(lotr.get("Hobbit"))
/*
Output
HashMap {
  length: 9,
  _hashTable: [
    { key: 'Maiar', value: 'Sauron', DELETED: false },
    { key: 'RingBearer', value: 'Gollum', DELETED: false },
    { key: 'LadyOfLight', value: 'Galadriel', DELETED: false },
    { key: 'HalfElven', value: 'Arwen', DELETED: false },
    { key: 'Elf', value: 'Legolas', DELETED: false },
    { key: 'Hobbit', value: 'Frodo', DELETED: false },
    { key: 'Wizard', value: 'Gandalf', DELETED: false },
    { key: 'Human', value: 'Aragorn', DELETED: false },
    undefined: { key: 'Ent', value: 'TreeBeard', DELETED: false }
  ],
  _capacity: 8,
  _deleted: 0,
  MAX_LOAD_RATIO: 0.5,
  SIZE_RATIO: 3
}
Sauron
Frodo
*/

/*
2. WhatDoesThisDo
DO NOT run the following code before solving the problem.

What is the output of the following code? explain your answer.

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}
It seems that it's writing a fx that compares two hash maps. the first being the input of Hello world
it seems that it is sharing the value 'Hello World.' between two hash maps
 */

/*

 */
// 4. Remove duplicates
/*
Implement a function to delete all duplicated characters in a string and keep only the first occurrence of each character. 
For example, if the input is string “google”, the result after deletion is “gole”. 
Test your program with a sentence as well such as "google all that you think can think of".
 */
function deleteDuplicates() {
  //empty character array to start with for words or sentences input
  let phrase = new HashMap();
  // test phrase
  let testWord = 'google';
  let firstLetter = 'g';
  let firstMatch = 'g';
  // let match = firstLetter + firstMatch
  // match.find((firstLetter => firstLetter === firstMatch));
  // map through phrase, compare first letter with 2nd, 3rd, etc...if letter matches remove the latest index 
  // for (let testWord = 'google'; i < testWord.length; test++) {
  //   let firstLetter = 'g';
  //   let firstMatch = 'g';
  //   let match = firstLetter + firstMatch;
  //   return 
  // }
  //iterate through each letter in the word, it matches the previous letter 
  // get rid of it
  // return remaining letters
  testWord.find(firstLetter => firstLetter === firstMatch) 
  if(firstMatch) {
    delete(firstMatch)
  }
  return phrase;
}
deleteDuplicates('google')

// I understand the concept, I don't understand it in practice








