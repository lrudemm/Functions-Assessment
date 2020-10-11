/* Define a function named firstLetterName. 
    It should take a string name as a parameter 
    and alert the message 
    "The name <NAME> starts with the letter <FIRSTLETTEROFNAME>
    HINT: to get a single character of a string, 
    you can use bracket syntax like you used to access array elements */

function firstLetterName(NAME) {
    const FIRSTLETTEROFNAME = NAME[0];
    alert ("The name " + NAME + " starts with the letter " +  FIRSTLETTEROFNAME);
}


/* Define a function divisibleByTwo. It should take a single parameter number
    and determine whether the number input is an even or odd number. 
    If it's even, the function should return true. 
    If it's odd, the function should return false.
    HINT: You'll need to use the % operator. */

function divisibleByTwo(number){
     if(number%2 == 0)
        return true;
        return false;
    }


/* Define a function named largestNum. It should take an array arr as a parameter
    and loop through that array. 
    The function should return the largest number in the array. */
function largestNum(arr){
    var largest = 0;
        for(var i=0; i < arr.length; i++){
            if(arr[i]>largest){
                largest = arr[i];
            }
        }
            return largest;
    }



/* After defining all the functions, 
    call each function at the bottom of the 
    JavaScript file with the appropriate arguments. */
    var name = "Larry";
    var number = 13;
    var arr = [1, 3, 2, 6, 4, 70];

    firstLetterName(name);

    console.log(divisibleByTwo(number));
    console.log(largestNum(arr));