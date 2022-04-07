// **
//  * Write a function that takes in a number (minutes), then 
//  * converts it to seconds. Print "that is a lot of seconds" 
//  * when the seconds is above 5000 seconds.
//  */

// function convertMinutes(minutes){
//     const seconds = munites * 60;
//     console.log(seconds);
//     if(seconds > 5000) {
//         console.log("Wow ! That is a lot of seconds");
//     }
// }

// convertMinutes(100);



/**
 * Write a function that takes in an array of letters. 
 * Convert the array into an object that has 
 * each value as a key and its value should be true if it 
 * is a vowel or false if it is not. Print the object to 
 * the screen.
 */


function convertLetterArrayToObject(letters) {
    const vowels = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
        
    }
    const letterObject = {};
    let isVowel = false;

    letters.forEach(function(letter) {
        if (vowels[letter] === true) {
            isVowel = true;
        }
        letterObject[letter] = isVowel;
        isVowel = false;
        


})
console.log(letterObject);
}

convertLetterArrayToObject(['a','b','c','d','e','f','g'])