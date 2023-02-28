const vowels = ["a","e","i","o","u","A","E","I","O","U"];
 
function countvowels(sentance){
    let count = 0;
    const letters = Array.from(sentance);

    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });

    return count;

}

console.log(countvowels("I love Bangladesh"));