//Once you complete a problem, open up Chrome and check the answer in the console.


var arr = [10,20,30];
//Create a function named 'first' that is given 'arr' as the argument and  returns the first item the given array.

var first = function(arr) {
  return arr[0];
};


//Next problem



var arr = [40,50,60];
//Create a function named 'last' that is given 'arr' as the argument and returns the last item the given array.

var last = function(arr) {
  return arr[arr.length - 1];
};


//Next Problem



var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
//Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.

var looper = function(family) {
  for (var i = 0; i < family.length; i++) {
    alert(family[i]);
  }
}; 


//Next problem



var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.

var reversedLooper = function(letters) {
  for (var i = letters.length-1; i >= 0; i--) {
    alert(letters[i]);
  }
};


//Next Problem



var nums = [1,2,3,6,22,98,45,23,22,12];
//Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.

//1.Solution:
var evenFinder = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    if ((nums[i] % 2) !== 0) {
      nums.splice(i, 1);
      i--;
    }
  }
};

//2.Solution:
var evenFinder = function(arr) {
  var even = [];
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
          even.push(arr[i]);
      }
  }
  return even;
};


//Next problem



var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];
//Write a function called divider that is given three arguments, nums, evens, and odds.
//Have divider return an Array with the first item in the array being the evens array (all the even values from nums) and the second item in the Array being the odds array(all the odd values from nums).

var divider = function(nums, evens, odds) {
  var multiArray = [];
  for (var i = 0; i < nums.length; i++) {
    if ((nums[i] % 2) !== 0) {
      odds.push(nums[i]);
    } else {
      evens.push(nums[i]);
    }
  }
  //multiArray.push(evens);
  //multiArray.push(odds);
  //return multiArray; 

  //it is better to push and return in one statement
  return multiArray = [evens, odds];
};


//Next Problem



var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
};
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above your given a function that will return a random number between 0 and 30, and an array full or numbers. Your job is to write a function named finder that will get a random number, then loop through the array to see if that random number is in the array. If it is, return true, if it's not, return false

var finder = function(randomNr, container) {
  var value = false;
  for (var i = 0; i < container.length; i++) {
    if (randomNr === container[i]) {
      value = true;
      break;
    }
  }
  return value;
};


//Next problem



var str = 'this is my sentence';
//Write a function called reverse that takes is given str as it's only argument and returns that string after it's been reversed

//Code before I learned from Dev Mountain:
var reverse = function(str) {
  var stringReverse = "";
  for (var i = str.length; i > 0; i--) {
    stringReverse = stringReverse + str.slice(i-1, i);
  }
  return stringReverse;
};

//Code after I learned from Dev Mountain:
var reverse = function(str) {
  return str.split('').reverse().join('');
};


//Next Problem



var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
  and adding new items to our list. Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
  second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
  remove that item from your grocery list and return the new, updated grocery list. Once you do that,
  write another function called addItem that is given two arguments, the first is myGroceryList
  and the second is an item to add to your grocery list. In addItem add the item you passed in to
  myGroceryList then return the new, updated grocery list.
*/

var removeItem = function(myGroceryList, item) {
  var index = myGroceryList.indexOf(item);
  if (index !== -1) {
    myGroceryList.splice(index, 1);
  }
  return myGroceryList;
};

//removeItem('chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];

var addItem = function(myGroceryList, item) {
  var index = myGroceryList.indexOf(item);
  if (index === -1) {
    myGroceryList.push(item);
  }
  return myGroceryList;
};

//addItem('Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];


//Next Problem



//Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.

var maker = function(start, end) {
  var container = [];
  var beginning = start;
  for (var i = 0; i < end; i++) {
    container[i] = beginning++;
  }
  return container;
};


//Next Problem



var numbers = [5, '9', 16, 19, '25', '34', 48];
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

//1.Solution:
var addTen = function(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      numbers[i] += 10;
    } else {
      numbers[i] = parseInt(numbers[i]) + 10;
    }
  }
  return numbers;
};

//2.Solution:
var addTen = function(numbers) {
  var arr = [];
  for (var i = 0; i < numbers.length; i++) {
    arr.push(parseInt(numbers[i]) + 10); 
  }
  return arr;
};


//Next Problem



var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
//Above is some code that adds a random number to both arr1 and arr2.
//Write a function that is given arr1 and arr2 is it's only arguments. Return the array which is longest.

//1.Solution:
var longest = function(arrOne, arrTwo) {
  if (arrOne.length > arrTwo.length) {
    return arrOne;
  } else if (arrOne.length < arrTwo.length) {
    return arrTwo;
  } else {
    //in case of equality it will return arrOne!
    return arrOne;
  }
};

//2.Solution:
var longer = function(arr1, arr2) {
  if (arr1.length > arr2.length) {
      return arr1;
  } else {
      return arr2;
  }
};

/*As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example)
  'both' should return a new array full of numbers that are found in both arr1 and arr2.
*/

var both = function(arrOne, arrTwo) {
  return arrOne.concat(arrTwo);
};
  
  
//NEXT PROBLEM



var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
};

/*Above you're given an empty array with four objects. Fill the devMountainEmployees
array with those four objects. After that console.log the length of the Array and make
sure that it's equal to 4. */

var fillArray = function() {
  devMountainEmployees.push(tyler, cahlan, ryan, colt);
};

console.log('Length of the array: ' + devMountainEmployees.length);

/*Now let's say Cahlan has a mental breakdown and has to take a leave of absence to 'find himself'.
Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/

var removeCahlan = function() {
  for (var i = 0; i < devMountainEmployees.length; i++) {
    if (devMountainEmployees[i].name === 'Cahlan') {
      devMountainEmployees.splice(i, 1);
    }
  }
};


//NEXT PROBLEM



/*Now we're going to combine what we've learned today (objects) with what we learned
yesterday (arrays). Yeah, take a deep breathe. You're ready for this, promise.
Let's think back to our itunes example (tylermcginnis.com/itunes).
Notice that when you type in an artist name, iTunes gives us back a LOT of data.
What they're really giving us is an Array full of Objects. It probably looks something
like this. */

var data = [
    {
        artist: 'shakira',
        album: 'hips don\'t lie',
        tracks: 16
    },
    {
        artist: 'shakira',
        album: 'mariposa',
        tracks: 12
    },
    {
        artist: 'shakira',
        album: 'greatest hits',
        tracks: 19
    }
];



/*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
of Data is to have an Array full of objects. */

//Create an empty array called users.

var users = [];

/*Now add three user objects to your users array. Each user object should contain the
following properties. name, email, password, username.*/

var user2 = {
    name: 'Arnold Schwarzenegger',
    email: 'terminator@gmail.com',
    password: 'John',
    username: 'Terminator'
};

var user3 = {
    name: 'Bruce Willis',
    email: 'bruce.willis@gmail.com',
    password: 'Simon',
    username: 'Schweinebacke'
};

var user4 = {
    name: 'Bruce Wayne',
    email: 'bruce.wayne@gmail.com',
    password: 'Catwoman',
    username: 'Batman'
};

//include this as one of the objects in your array.
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
};

users.push(user1, user2, user3, user4);

/*Now you have a very common data structure. Twitter is a good use case.
It's easy to imagine that your followers list on Twitter is an Array full or objects
and those objects contain properties about the specific person you follow.*/

/*Now let's say that Tyler decided to delete his account. Loop through your array of
objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
Once you find the particular index he's located in, delete him from the array.*/

for (var i = 0; i < users.length; i++) {
  if (users[i].email === 'tylermcginnis33@gmail.com') {
    users.splice(i, 1);
  }
}

//The activity we just did is very much how data works in 'the real world'.