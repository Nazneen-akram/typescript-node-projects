var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*
QUESTION 2:
Personal Message: Store a person’s name in a variable, and print a message to that person.
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
*/
var person = "Nazneen Akram";
console.log('Hello ', person, ' would you like to learn some Python today?');
/*
QUESTION 3:
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
function totitleCase(lower_case) {
    lower_case = lower_case.toLowerCase().split(' ');
    for (var i = 0; i < lower_case.length; i++) {
        lower_case[i] = lower_case[i].charAt(0).toUpperCase() + lower_case[i].slice(1);
    }
    return lower_case.join(' ');
}
var person = "Nazneen Akram";
console.log("Name in Upper Case: " + person.toUpperCase());
console.log("Name in Lower Case: " + person.toLowerCase());
console.log("Name in Title Case: " + totitleCase(person));
/*
QUESTION 4:
Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”
*/
console.log("Albert Einstein once said, \“A person who never made a mistake never tried anything new.\”");
/*
QUESTION 5:
Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
Then compose your message and store it in a new variable called message. Print your message.
*/
var famous_person = "Albert Einstein once said, \“A person who never made a mistake never tried anything new.\”";
console.log(famous_person);
/*
QUESTION 6:
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/
var person = " Nazneen ";
console.log("\t" + person + "\n");
console.log(person.replace(" ", ""));
/*
QUESTION 7:
Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
Be sure to enclose your operations in print statements to see the results.
*/
console.log(5 + 3);
console.log(8 - 0);
console.log(2 * 4);
console.log(16 / 2);
/*
QUESTION 8:
You should create four lines that look like this:
console.log(5 + 3)
Your output should simply be four lines with the number 8 appearing once on each line.
*/
console.log('console.log(5 + 3)=', 5 + 3);
console.log('console.log(8 - 0)=', 8 - 0);
console.log('console.log(2 * 4)=', 2 * 4);
console.log('console.log(16 / 2)=', 16 / 2);
/*
QUESTION 9:
Favorite Number: Store your favorite number in a variable.
Then, using that variable, create a message that reveals your favorite number. Print that message.
*/
var number = 9122023;
console.log("Favourite Number is: " + number);
/*
QUESTION 10:
Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
If you don’t have anything specific to write because your programs are too simple at this point,
just add your name and the current date at the top of each program file.
Then write one sentence describing what the program does.
*/
var number = 9122023; //creatiing a variable number to store the favourite number (Nazneen Akram)
console.log("Favourite Number is: " + number);
var person = "Nazneen Akram"; //creating a variable person to store the name and then printing a simple message
console.log('Hello ', person, ' would you like to learn some Python today?');
/*
QUESTION 11:
Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.
*/
var friends_name = ["Sajid", "Naeem", "Ashir", "Zeeshan", "Mumtaz"];
for (var i_1 = 0; i_1 < friends_name.length; i_1++) {
    console.log(friends_name[i_1]);
}
/*
QUESTION 12:
Greetings: Start with the array you used in Exercise 11,
but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name.
*/
var friend_name = ["Sajid", "Naeem", "Ashir", "Zeeshan", "Mumtaz"];
for (var i_2 = 0; i_2 < friend_name.length; i_2++) {
    console.log("Dear " + friend_name[i_2] + " welcome to Panaverse");
}
/*
QUESTION 13:
Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
var vehicles = ['car', 'motorbike', 'scootie', 'truck', 'bicycle'];
for (var i_3 = 0; i_3 < vehicles.length; i_3++) {
    console.log("I would like to own a Honda", vehicles[i_3]);
}
/*
QUESTION 14:
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
*/
var guest = ["Sajid", "Naeem", "Ashir", "Mumtaz"];
for (var i_4 = 0; i_4 < guest.length; i_4++) {
    console.log("Dear", guest[i_4], "you are cordially invited to dinner");
}
/*
QUESTION 15:
Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/
console.log(guest[0] + " regrettably cannot make it for dinner");
guest[0] = "Shahmeer";
for (var i_5 = 0; i_5 < guest.length; i_5++) {
    console.log("Dear", guest[i_5], "you are cordially invited to dinner");
}
/*
QUESTION 16:
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15.
• Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
for (var i_6 = 0; i_6 < guest.length; i_6++) {
    console.log("We found a bigger table Dear", guest[i_6]);
}
guest.unshift("Sameera"); //Add one new guest to the beginning of your array.
guest.splice(3, 0, "Beenish"); //Add one new guest to the middle of your array. 
guest.push("Jahangir"); //add one new guest to the end of your list
for (var i_7 = 0; i_7 < guest.length; i_7++) {
    console.log("You are invited to dinner Dear", guest[i_7]);
}
/*
QUESTION 17:
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
  Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list.
  Print your list to make sure you actually have an empty list at the end of your program.
*/
var len = guest.length;
for (var i_8 = 0; i_8 < len - 2; i_8++) {
    if (guest[i_8] != undefined) {
        console.log(guest[i_8], "we are sorry we can only invite two people to dinner. we cannnot invite you to dinner.");
    }
    guest.shift();
}
for (var i_9 = 0; i_9 < guest.length; i_9++) { //message to each of the two people still on your list, letting them know they’re still invited
    console.log(guest[i_9] + " you are still invited to dinner");
}
var len = guest.length; //Remove the last two names from your list, so you have an empty list.
for (var i_10 = 0; i_10 < len; i_10++) {
    guest.shift();
}
console.log('Empty List: ', guest); //Print your list to make sure you actually have an empty list at the end of your program.
/*
QUESTION 18:
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
var world = ["Singapore", "UAE", "Malaysia", "Japan", "Korea"]; //Store locations in a array. Make sure array is not in alphabetical order.
console.log(world);
var world2 = world.concat().sort(); //Print array in alphabetical order without modifying the actual list.
console.log(world2);
console.log(world);
var world3 = world2.concat().reverse(); //Print array in reverse alphabetical order without changing the order of the original list.
console.log(world3);
console.log(world2); //Show that your array is still in its original order by printing it again.
console.log(world.reverse()); //Reverse the order of your list. Print the array to show that its order has changed.
console.log(world.sort()); //Sort array so it’s stored in alphabetical order. Print array to show that its order has been changed.
console.log(world);
console.log(world.reverse()); //Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(world);
/*
QUESTION 19:
Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner.
*/
console.log(guest.length, "guests are invited to dinner");
/*
QUESTION 20:
Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages,
or anything else you’d like. Write a program that creates a list containing these items.
*/
var myLanguages = ['Urdu', 'English', 'Korean', 'Arabic'];
console.log(myLanguages);
/*
QUESTION 21:
Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/
var myList = [
    { Language: 'Urdu', reading: 5, writing: 5 },
    { Language: 'English', reading: 5, writing: 5 },
    { Language: 'Korean', reading: 3, writing: 2 }
];
/*
QUESTION 22:
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/
//var myLanguages = ['Urdu','English','Korean','Arabic']
//console.log(myLanguages[4])
/*
QUESTION 23:
Conditional Tests: Write a series of conditional tests.
Print a statement describing each test and your prediction for the results of each test.
Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
var car = 'camry'; //test 1
console.log("Is car == 'camry'? I predict True.");
console.log(car == 'camry');
var myName = 'Nazneen Akram'; //test 2
console.log("Is Nazneen Akram in Upper Case? I predict False.");
console.log(myName == myName.toUpperCase());
var num1 = 5;
var num2 = 10;
console.log(num1 == num2); // test 3. false
console.log(num1 != num2); // test 4. true
console.log(num1 > num2); // test 5. false
console.log(num1 < num2); // test 6. true
console.log(num1 >= num2); // test 7. false
console.log(num1 <= num2); // test 8. true
var subjects = ["apple", "banana", "orange"];
console.log(subjects.indexOf("pears") !== -1); // test 9. false
console.log(subjects.indexOf("apple") !== -1); // test 10. true
/*
QUESTION 24:
More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
var name1 = "John";
var name2 = "Jane";
console.log(name1 == "John"); // test 1.true
console.log(name2 == name2); // test 2. false
console.log(name1 == name1.toLowerCase()); // test 3.false
console.log(name1 != name1.toLowerCase()); //test 4.true
var x = 5;
var y = 10;
console.log(x > 3 && y < 15); // test 5.true
console.log(x > 7 || y < 5); // test 6. false
var mysubjects = ["english", "mathematics", "biology"];
console.log(mysubjects.indexOf("urdu") !== -1); // test 7. false
console.log(mysubjects.indexOf("biology") !== -1); // test 8. true
/*
QUESTION 25:
Alien Colors #1: Imagine an alien was just shot down in a game.
Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
*/
var alien_color = 'green';
if (alien_color == 'green') {
    console.log('Congrats, your earned 5 points!');
}
alien_color = 'pink';
if (alien_color == 'green') {
    console.log('Congrats, your earned 5 points!');
}
/*
QUESTION 26:
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.
*/
var colorCheck = function (alien_color) {
    if (alien_color == 'green') {
        console.log('player earned 5 points for shooting the alien');
    }
    else if (alien_color != 'green') {
        console.log('player earned 10 points');
    }
};
// test 1
colorCheck('green');
// test 2
colorCheck('pink');
/*
QUESTION 27:
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/
var colorCheck = function (alien_color) {
    if (alien_color == 'green') {
        console.log('player earned 5 points for shooting the alien');
    }
    else if (alien_color == 'yellow') {
        console.log('player earned 10 points');
    }
    else if (alien_color == 'red') {
        console.log('player earned 15 points');
    }
};
colorCheck('green'); // test 1
colorCheck('yellow'); // test 2
colorCheck('red'); // test 3
/*
QUESTION 28:
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.
*/
function lStageCheck(age) {
    if (age < 2) {
        console.log('person is a baby');
    }
    else if (age >= 2 && age < 4) {
        console.log('person is a toddler');
    }
    else if (age >= 4 && age < 13) {
        console.log('person is a kid');
    }
    else if (age >= 13 && age < 20) {
        console.log('person is a teenager');
    }
    else if (age >= 20 && age < 65) {
        console.log('person is an adult');
    }
    else if (age >= 65) {
        console.log('person is an elder');
    }
}
//Test Cases
lStageCheck(1); //If the person is less than 2 years old, print a message that the person is a baby.
lStageCheck(2); //If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
lStageCheck(5); //If the person is at least 4 years old but less than 13, print a message that the person is a kid.
lStageCheck(18); //If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
lStageCheck(22); //If the person is at least 20 years old but less than 65, print a message that the person is an adult.
lStageCheck(65); //If the person is age 65 or older, print a message that the person is an elder.
/*
QUESTION 29:
Favorite Fruit: Make a array of your favorite fruits,
and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
function fCheck(fruit) {
    var text = "you really like ".concat(fruit, "s!");
    if (fruit == 'banana') {
        console.log(text);
    }
    else if (fruit == 'apple') {
        console.log(text);
    }
    else if (fruit == 'orange') {
        console.log(text);
    }
    else if (fruit == 'kiwi') {
        console.log(text);
    }
    else if (fruit == 'peach') {
        console.log(text);
    }
    else if (fruit == 'strawberry') {
        console.log(text);
    }
}
//test case
fCheck('banana');
fCheck('strawberry');
/*
QUESTION 30:
Hello Admin: Make an array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user after they log in to a website.
Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
var userlist = ['Asif', 'Aman', 'Admin', 'Rehan', 'Ashir'];
var userCheck = function (users) {
    for (var i_11 = 0; i_11 < userlist.length; i_11++) {
        if (userlist[i_11] == 'Admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello " + userlist[i_11] + ", thank you for logging again");
        }
    }
};
userCheck.apply(null, userlist);
/*
QUESTION 31:
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var newuserCheck = function (users) {
    if (userlist.length === 0) {
        console.log("We need to find some users!");
    }
    else {
        for (var i_12 = 0; i_12 < userlist.length; i_12++) {
            if (userlist[i_12] == 'Admin') {
                console.log("Hello admin, would you like to see a status report?");
            }
            else {
                console.log("Hello " + userlist[i_12] + ", thank you for logging again");
            }
        }
    }
};
newuserCheck.apply(null, userlist); //first test with full array
userlist = [];
console.log("There are now: " + userlist.length + " users");
newuserCheck.apply(this, userlist); // second test with empty array
/*
QUESTION 32:
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used.
  If it has, print a message that the person will need to enter a new username.
  If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
var current_users = ['Asif', 'Aman', 'Faraz', 'Daya', 'Shahmeer']; // Make a list of current users
var new_users = ['Zeeshan', 'Taha', 'aman', 'Ashir', 'Mumtaz']; // Make a list of new users
for (var i_13 = 0; i_13 < new_users.length; i_13++) {
    var lowercase_current_user = current_users.map(function (current_users) { return current_users.toLowerCase(); });
    var lowercase_new_user = new_users.map(function (new_users) { return new_users.toLowerCase(); });
    if (lowercase_current_user.indexOf(lowercase_new_user[i_13]) == -1) {
        console.log("Username ".concat(new_users[i_13], " is available"));
    }
    else {
        console.log("Username ".concat(new_users[i_13], " is not available. Please enter a new username"));
    }
}
/*
QUESTION 33:
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
*/
var ordinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var i = 0;
while (i < ordinalNumber.length) {
    if (ordinalNumber[i] == 1 || ordinalNumber[i] == 2 || ordinalNumber[i] == 3) {
        if (ordinalNumber[i] == 1) {
            console.log("".concat(ordinalNumber[i], "st"));
        }
        else if (ordinalNumber[i] == 2) {
            console.log("".concat(ordinalNumber[i], "nd"));
        }
        else {
            console.log("".concat(ordinalNumber[i], "rd"));
        }
    }
    else {
        console.log("".concat(ordinalNumber[i], "th"));
    }
    i++;
}
/*
QUESTION 34:
Pizzas: Think of at least three kinds of your favorite pizza.
Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
  For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
  The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
  such as I really love pizza!
*/
var pizza = ['Chicken Fajita Pizza', 'Chicken Tikka Pizza', "Meat Lovers Pizza", "Cheese Lovers Pizza"];
var texts = "";
for (var i_14 = 0; i_14 < pizza.length; i_14++) {
    texts = 'I Like ' + pizza[i_14];
    console.log(texts);
}
var text2 = "I would love to eat pizza for dinner almost all the time\n" + "Mostly, I prefer chicken over other types of pizza\n" + "I really pizza!";
console.log(text2);
/*
QUESTION 35:
Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet!
*/
var animals = ['Chicken', 'Dog', "Cat", "Hamster"];
var animalList = "";
for (var i_15 = 0; i_15 < animals.length; i_15++) {
    console.log(animals[i_15]);
} //use a for loop to print out the name of each animal
for (var i_16 = 0; i_16 < animals.length; i_16++) {
    animalList = 'A ' + animals[i_16] + ' would make a great pet';
    console.log(animalList);
}
text2 = "Any of these animals would make a great pet!";
console.log(text2);
/*
QUESTION 36:
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/
function mak_shirt(size, text) {
    var shirttext = "Your selected shirt size is:".concat(size, " and the message on shirt is \"").concat(text, "\"!");
    return shirttext;
}
//test case
console.log(mak_shirt('Small', 'I go bananas'));
console.log(mak_shirt('Large', 'Cute as a strawberry'));
/*
QUESTION 37:
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I Love TypeScript"; }
    var shirttext = "Your selected shirt size is:".concat(size, " and the message on shirt is \"").concat(text, "\"!");
    return shirttext;
}
console.log(make_shirt()); // default values
console.log(make_shirt('Medium'));
console.log(make_shirt('Small', 'Go Big or Go Home'));
/*
QUESTION 38:
Cities: Write a function called country_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan.
Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the default country.
*/
function describ_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    var text1 = "".concat(city, " is in ").concat(country);
    return text1;
}
//test case
console.log(describ_city('Karachi'));
console.log(describ_city('Multan'));
console.log(describ_city('Tokyo', 'Japan'));
/*
QUESTION 39:
City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
*/
function country_city(city, country) {
    var text1 = "\"".concat(city, ", ").concat(country, "\"");
    return text1;
}
//test case
console.log(country_city('Karachi', 'Pakistan'));
console.log(country_city('Toronto', 'Canada'));
console.log(country_city('Tokyo', 'Japan'));
/*
QUESTION 40:
Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.
*/
function mak_album(artistName, albumTitle, tracks) {
    if (tracks === void 0) { tracks = 0; }
    var dict = {
        Artist_Name: artistName,
        Album_title: albumTitle,
        Tracks: tracks
    };
    return dict;
}
console.log(mak_album("No Name", "Echos"));
console.log(mak_album("Cehryl", "Finding Hope"));
console.log(mak_album("Yoe Mase", "lonely", 5));
/*
QUESTION 41:
Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/
var magicianNames = ['Amanda', 'Robin', 'Ceril', 'Jake', 'Sierra'];
function show_magician(text) {
    return text;
}
console.log(show_magician(magicianNames));
/*
QUESTION 42:
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.
*/
i = 0;
function make_greats(text) {
    while (i < magicianNames.length) {
        text[i] = "The Great " + magicianNames[i];
        i++;
    }
    return text;
}
make_greats(magicianNames);
console.log(show_magician(magicianNames));
/*
QUESTION 43:
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names
and one array with the Great added to each magician’s name.
*/
i = 0;
var magicianName = ['Amanda', 'Robin', 'Ceril', 'Jake', 'Sierra'];
function make_greater(text) {
    var greatMagician = text.concat(); //create a shallow copy of the original Magician's names Array
    while (i < magicianName.length) {
        greatMagician[i] = "The Great ".concat(magicianName[i]); //use the new array greatMagicians to add in the phrase 'the Great' next to magician name
        i++;
    }
    return greatMagician;
}
console.log("Original Magicians List\n", magicianName);
console.log("Great Magicians List\n", make_greater(magicianName));
console.log("Original Magicians List\n", show_magician(magicianName));
/*
QUESTION 44:
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.
*/
function callme() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log.apply(console, __spreadArray(["Items Ordered: "], items, false));
}
//Order Number 1
var sandwichItems1 = ['Onion', 'Olives', 'Tomatoes'];
callme.apply(void 0, sandwichItems1);
var sandwichItems2 = ['Pickle']; //Order Number 2
callme.apply(void 0, sandwichItems2);
var sandwichItems3 = ['Chicken', 'Mayo']; //Order Number 3
callme.apply(void 0, sandwichItems3);
/*
QUESTION 45:
Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.
*/
function Cars(manufacturer, model) {
    var arg = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arg[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
        year: arg,
        color: arg
    };
    return car;
}
var myCar = Cars("Toyota", "Camry", 2010, "black");
console.log(myCar);
