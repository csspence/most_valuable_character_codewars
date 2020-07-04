/*
In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the lexicographically lowest character.

All inputs will be lower case.

For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'
*/

const solve = (st) => {
  let dict = {};
  let highestDiff = ['', 0];
  let currentDiff;
  console.log('here is st: ' + st);
  for(let i = 0; i < st.length; i++) {
     if(dict[st[i]] === undefined) {
        dict[st[i]] = i;
        if(highestDiff[0] === '') {
         highestDiff = [st[i], i];
        }
     } else {
        currentDiff = i - dict[st[i]];
        if(currentDiff === highestDiff[1]) {
           if(highestDiff[0] > st[i]) {
              highestDiff = [st[i], currentDiff];
           } 
        }
        if(currentDiff > highestDiff[1]) {
          highestDiff = [st[i], currentDiff];
        }
     }
     console.log('here is highestDiff: ' + highestDiff);
  }
  return highestDiff[0];
}