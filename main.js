// TASK 1 INSTALLATION COMPLETED
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// TASK 2
var personName = "eric";
console.log("Hello ".concat(personName, ", would you like to learn some python today?"));
//TASK 3
//Name cases
var personName = "Muhammad z";
// in lowercase
console.log("lowercase:", personName.toLowerCase());
//in uppercase
console.log("uppercase:", personName.toUpperCase());
//titlecase
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
//TASK 4
// famous quote
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert einstein";
console.log("".concat(author, " , once said, \"").concat(quote, "\""));
//TASK 5
//famous quote
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert einstein";
console.log("".concat(author, " , once said, \"").concat(quote, "\""));
// Famous person
var famous_person = "Albert Einstein";
var quote = "A person who never made a mistake never tried anything new.";
var message = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);
// TASK 6
var personName = "\t\n John Doe \n\t";
console.log("Original:", personName);
console.log("Stripped:", personName.trim());
//TASK 7&8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//TASK 9
var favoritenumber = 4;
console.log("My favorite number is ".concat(favoritenumber));
//TASK 10
//Adding comments
author: [MUHAMMMAD, BIN, ZAHEER];
date: [Friday, April, 19, 2024];
//task10: printing my favorite number
var favoritenumber = 4;
revealing;
my;
favourite;
number in comment;
format;
console.log("My favorite number is ".concat(favoritenumber));
//TASK 11
var names = ["ali", "haseeb", "muzammil", "wajahat"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//TASK 12
var names = ["ali", "haseeb", "muzammil", "wajahat"];
var message = ["do you like to play football?"];
console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);
console.log(names[3] + " " + message);
//TASK 13
var trasnportation = ["honda motorcycle", "audi", "honda city"];
trasnportation.map(function (items) { return console.log("i would like to own a ".concat(items)); });
//TASK 14
var guestArr = ["ali", "haseeb", "muzammil"];
guestArr.map(function (items) { return (console.log("Dear ".concat(items, ", you are invited to the dinner"))); });
// //TASK 15
var guestArr = ["ahmed", "Hasnain", "hussain", "ali"];
var canNotAttend = "ahmed";
console.log(canNotAttend + " " + "can not attend the dinner.");
var newGuest = "hamza";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (items) { return console.log("Dear ".concat(items, ",you are invited to the dinner.")); });
//TASK 16
var guestArr = ["hamza", "Hasnain", "hussain", "ali"];
var canNotAttend = "ali";
var newGuest = "hammad";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ",I found a bigger table so I am invited more peoples."));
});
//part 2
var guestBeg = "muiz";
guestArr.unshift(guestBeg);
console.log(guestArr);
//part 3
var middleGuest = "fatima";
var middleindex = guestArr.length / 3;
guestArr.splice(middleindex, 0, middleGuest);
console.log(guestArr);
//part 4  append
guestArr.push("zeesham");
console.log(guestArr);
//part 5
guestArr.map(function (items) {
    console.log("Dear ".concat(items, ", you are invited to the dinner."));
});
//TASK 17
var guests = ["Ali", "bilal",];
console.log("Due to limited space, only two people can be invited for dinner.");
while (guests.length > 2) {
    var removedguest = guests.pop();
    console.log("sorry,".concat(removedguest, ",you're no longer invited to dinner."));
}
guests.forEach(function (guests) {
    console.log("dear,".concat(guests, ",you are still invited to the dinner"));
});
guests.pop();
guests.pop();
console.log("FINAL GUEST LIST:", guests);
//TASK 18
var placesToVisit = ["Tokyo", "Pakistan", "America", "China", "Japan"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
console.log("Orginal order after sorting:", placesToVisit);
console.log("Reverse Alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Orginal order after reverse sorting:", placesToVisit);
placesToVisit.reverse();
console.log("reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("back to original order:", placesToVisit);
placesToVisit.sort();
console.log("sorted in alphabetical order", placesToVisit);
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order:", placesToVisit);
//TASK19
var invitations = ["ali", "bilal"];
var count_invitations = invitations.length;
console.log("".concat(count_invitations, " people will come to dinner"));
//TASK 20
var country = ["Pakistan", "India", "NewYork", "Japan", "China"];
console.log("List of Country:");
console.log(country);
//TASK 21
var person = { name: "Muhammad", fname: "Male", age: 22 };
console.log(person);
//Task 22
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
console.log(days, { 7:  });
console.log(days[6]);
//TASK 23
var car = "subaru";
console.log("is car == `subaru` ? predict true");
console.log(car == "subaru");
console.log("is car !== `honda city? predict true");
console.log(car != "honda city");
console.log("is car == `Subaru` ? predict false");
console.log(car == "Subaru");
console.log("is car == `SUBARU` ? predict false");
console.log(car == "SUBARU");
console.log("is car.length == 6? predict true");
console.log(car.length == 6);
console.log("is car.length != 10? predict true");
console.log(car.length != 10);
console.log("is 10>45? predict false");
console.log(10 > 45);
console.log("is 3<=2? predict false");
console.log(3 <= 2);
console.log("is 72>=83? predict false");
console.log(72 >= 83);
console.log("is car == `subaru`&& car.length==6?predict true");
console.log(car == "subaru" && car.length == 6);
//TASK 24
var name_1 = "mz";
var name_2 = "muhammad bin zaheer";
var name_3 = "muhammad it student";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 = name_2) {
    console.log("names are equal"); // ans is equal because type is same
}
if (name_1 = name_3) {
    console.log("names are equal");
}
var age_1 = 18;
var age_2 = 22;
if (age_1 == 18) {
    console.log("eligible for vote");
}
if (age_1 != 22) {
    console.log("eligible for vote in older category");
}
if (age_1 <= age_2) { //less
    console.log("younger");
}
if (age_2 >= age_1) { //greater
    console.log("older");
}
if (age_1 == 18 && age_2 == 22) {
    console.log("person is eligible for vote");
}
if (age_1 == 18 || age_2 != 22) {
    console.log("person is eligible not for vote");
}
var country = ["pakistan", "india", "japan", "china"];
if (country.includes("pakistan")) {
    console.log("pakistan is in the country list");
}
if (!country.includes("america")) {
    console.log("america is not included in the array");
}
//TASK 25
var alien_color = "green";
if (alien_color == "green")
    console.log("you earn 5 points");
var alien_color = "red";
if (alien_color == "green")
    console.log("no output");
//TASK 26
var alien_color = "green";
if (alien_color == "green") {
    console.log("player just earned 5 points for shooting for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
var alien_color = "red";
if (alien_color == "green") {
    console.log("player just earned 5 points for shooting for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
//TASK 27
var alien_color = "red";
if (alien_color == "green") {
    console.log("5 points");
}
else if (alien_color == "yellow") {
    console.log("10 points");
}
else {
    console.log("15 points");
}
//TASK 28
var age = 18;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are a older");
}
//TASK 29
var favourite_fruits = ["kivi", "orange", "apple", "berry", "peach"];
if (favourite_fruits.includes("kivi")) {
    console.log("kivi");
}
if (favourite_fruits.includes("apple")) {
    console.log("apple");
}
if (favourite_fruits.includes("orange")) {
    console.log("orange");
}
if (favourite_fruits.includes("berry")) {
    console.log("you really like bananas");
}
if (favourite_fruits.includes("peach")) {
    console.log("you really like bananas");
}
//TASK 30
var users = ["eric", "haseeb", "ali", "fatima", "admin"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("hello ".concat(user, ",thank you for logging in again"));
    }
}
//TASK 31
var users = ["eric", "haseeb", "ali", "fatima", "admin"];
if (users.length === 0) {
    console.log("we need to find some users!");
}
else {
    for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
        var user = users_2[_a];
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ",thank you for logging in again"));
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("we need to find some users!");
}
// TASK 32
var current_users = ["admin", "Eric", "Ali", "Hamza", "fatima"];
var new_users = ["admin", "fatima", "Aliza", "Haseeb", "Noor"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_user = new_users_1[_b];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry ".concat(new_user, ",that name is taken"));
    }
    else {
        console.log("Yes ".concat(new_user, ",is still in available list"));
    }
}
//TASK 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
    var number = numbers_1[_c];
    if (number === 1) {
        console.log("".concat(number, "st")); //1st
    }
    else if (number === 2) {
        console.log("".concat(number, "nd")); //2nd
    }
    else if (number === 3) {
        console.log("".concat(number, "rd")); //3rd
    }
    else {
        console.log("".concat(number, "th")); //4th,5th,6th,7th,8th,9th,
    }
}
//TASK 34
var favourite_pizza = ["pepperoni", "chicken", "veg"];
for (var _d = 0, favourite_pizza_1 = favourite_pizza; _d < favourite_pizza_1.length; _d++) {
    var pizza = favourite_pizza_1[_d];
    console.log(pizza);
}
console.log("\n");
for (var _e = 0, favourite_pizza_2 = favourite_pizza; _e < favourite_pizza_2.length; _e++) {
    var pizza = favourite_pizza_2[_e];
    console.log("I really like ".concat(pizza, " pizza!"));
}
console.log("\nI really love pizza!");
//TASK 35
var animals = ["cat", "lion", "dog"];
for (var _f = 0, animals_1 = animals; _f < animals_1.length; _f++) {
    var animal = animals_1[_f];
    console.log(animal);
}
console.log("\n");
for (var _g = 0, animals_2 = animals; _g < animals_2.length; _g++) {
    var animal = animals_2[_g];
    console.log("A ".concat(animal, " has a tail"));
}
console.log("\nall of these are great pets! but i love cats more");
//TASK 36
function makeShirt(size, text) {
    console.log("\nYou ordered a ".concat(size, " shirt that says \"").concat(text, "\""));
}
makeShirt("large", "I love TypeScript");
makeShirt("medium", "I need a big shirt");
//TASK 37
function makeShirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "i love typescript"; }
    console.log("you have order a ".concat(size, ",shirt that says ").concat(text));
}
makeShirt();
makeShirt("medium");
makeShirt("small", "I need a big shirt to wear");
//TASK 38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("karachi");
describe_city("france", "europe");
describe_city("lahore", "punjab");
//TASK 39
function cityCountry(city, country) {
    return "".concat(city, ",").concat(country);
}
var c1 = cityCountry("lahore", "pakistan");
var c2 = cityCountry("tokyo", "japan");
var c3 = cityCountry("paris", "france");
console.log(c1);
console.log(c2);
console.log(c3);
//TASK 40
function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("ali", "light");
console.log(album);
var album = makeAlbum("bilal", "red wave");
console.log(album);
var album = makeAlbum("hamza", "seenbreeze");
console.log(album);
//TASK 41
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["ali", "hamza", "bilal"];
show_magicians(magician);
//TASK 42
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) { //i stands for index string
        magicians[i] = magicians[i] + " the great";
    }
}
var magicians2 = ["ali", "hamza", "bilal"];
make_great(magicians2);
show_magicians(magicians2);
// TASK 43
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the Great");
    }
    return greatMagicians;
}
var magicians3 = ["ali", "hamza", "bilal"];
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
// //TASK 44
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
console.log("enjoy your sandwich muhammad");
sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'cheese');
function createCar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var myCar = createCar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(myCar);
