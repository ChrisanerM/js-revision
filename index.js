// getting the middle index we get the length of the array first
//slice is used get a portion
// filter returns a new array - loops through an array , looking for a particular element USE THIS METHOD
//. push to add something new into an array


// let data = [9, 3, 1, "Peter", 5, 10]; //this array is even therefore we use slice
// let size = data.length - 1;
// console.log("Array size:", size);
// console.log("Element:", data[size]);

// SIMPLIFIED
// . at
// console.log ("at():",data.at(-1));
// let middleIndex= Math.trunc((data.length-1)/2);
// console.log ("middleIndex:", middleIndex);
// console.log ("middle element:", data.slice(middleIndex, middleIndex+2));
//Math method math.trunch (gives us only an integer value)


//this array is odd therefore we 'inject' it into a square bracket (data[])
// let datas = [9, 3, 1, "Peter", 5];



//STRING 
// VARIABLE IS LIKE A CONTAINER

// let sentence= "I love programming";
// console.log(sentence);
// console.log (sentence.split(' '));

//splitting the space character

//Date methods

let myDate = new Date ();
console.log ("My date:",myDate);


//HOMEWORK: add 5 days to the current date 29/11/2022   due Friday
// format to your date part 

//if statement
// let age= 17;
// if (age > 17) {
//     console.log("Your're qualified");

// } else {
//     console.log ("You're not qualified");
// }
//don't omit your else statement


//nested if statement don't use this for project
//you may have 2 if statements
// let age = 18;
// let salary = 5000;

// if(age >17) {
//     if(salary >= 5000){
//     console.log("Well done!");
//     }
// } else {
//     console.log ("You're not qualified");
// }

// && it's a must
// ||  either or
// ! not

// switch statements
// let monthInt = 1;
// switch (monthInt) {
//     case 1:
//         console.log ("January");
//         case 2:
//             console.log ("February");
//             break;
// }


let grade = 75;
 switch (grade) {
    case 100:
        console.log ("Your're awesome")
    break;
    
 }