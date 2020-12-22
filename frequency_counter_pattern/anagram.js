/* Given two strings, write a function to determine if the second string is an anagram of the first,
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

example 

validAnagram("", "") // true
validAnagram("aaz", "zza") // false
validAnagram("anagram", "nagram") // true

*/
function validAnagram(first, second){
    // checks length 
    if (first.length !== second.length){
        return false
    }
    // object
    const lookup = {};
    // loops through first string
    for( let i = 0; i < first.length; i++ ){
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? look[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++){
        // can't find letter or letter is zero then it's not an anagram
        let letter = second[i];
        if (!lookup[letter]){
            return false;
        } else {
            // subtracts one letter from object
            lookup[letter] -= 1;
        }
    }
    return true;
}
console.log(validAnagram("anagram", "nagram"))

//  {
//     a:3,
//     n:1,
//     g:1,
//     r:1,
//     m:1
// }
// O(n) time complexity