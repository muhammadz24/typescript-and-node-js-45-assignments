// TASK 1 INSTALLATION COMPLETED



// TASK 2

let personName: string = "eric";
console.log(`Hello ${personName}, would you like to learn some python today?`);



 //TASK 3

//Name cases
 let personName : string ="Muhammad z"  

// in lowercase
console.log ("lowercase:",personName.toLowerCase())

 //in uppercase
 console.log ("uppercase:",personName.toUpperCase())

 //titlecase
 console.log ("titlecase:",personName.replace(/\b\w/g,c=> c.toUpperCase()))



 //TASK 4

// famous quote
 let quote:string="A person who never made a mistake never tried anything new." ;
 let author:string= "Albert einstein"

console.log(`${author} , once said, "${quote}"`) ;





//TASK 5
 //famous quote
 let quote:string="A person who never made a mistake never tried anything new." ;
let author:string= "Albert einstein"

 console.log(`${author} , once said, "${quote}"`) ;


 // Famous person
  let famous_person = "Albert Einstein";
 let quote = "A person who never made a mistake never tried anything new.";
let message = `${famous_person} once said, "${quote}"`;

 console.log(message);




 // TASK 6
 let personName :string = "\t\n John Doe \n\t"
 console.log("Original:", personName)
 console.log("Stripped:", personName.trim());




 //TASK 7&8

 console.log(5+3) ;
console.log(10-2) ;
 console.log(4*2) ;
console.log(16/2) ;




 //TASK 9

let favoritenumber:number =4
console.log(`My favorite number is ${favoritenumber}`)





//TASK 10

 //Adding comments
author:[MUHAMMMAD BIN ZAHEER]
date :[Friday, April 19,2024]

//task10: printing my favorite number

 let favoritenumber:number =4
revealing my favourite number in comment format
console.log(`My favorite number is ${favoritenumber}`)



//TASK 11

let names : string[]=["ali","haseeb","muzammil","wajahat"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);





 //TASK 12

let names : string[]=["ali","haseeb","muzammil","wajahat"];
 let message:string[]= ["do you like to play football?"]

 console.log(names[0]+ " " +  message);
console.log(names[1]+ " " +  message);
console.log(names[2]+ " " +  message);
console.log(names[3]+ " " +  message);




//TASK 13
 let trasnportation:string []=["honda motorcycle","audi","honda city"];
trasnportation.map((items)=>console.log(`i would like to own a ${items}`));






 //TASK 14
 let guestArr : string[]=["ali","haseeb","muzammil"];
 guestArr.map((items)=> (console.log(`Dear ${items}, you are invited to the dinner`)));





 // //TASK 15

 let guestArr : string[]=["ahmed","Hasnain","hussain","ali"];
 let canNotAttend : String = "ahmed";

console.log(canNotAttend+ " " + "can not attend the dinner.")

let newGuest:string = "hamza"

 guestArr[guestArr.indexOf(canNotAttend)]=newGuest;

 console.log(guestArr)

 guestArr.map((items)=> console.log(`Dear ${items},you are invited to the dinner.`) )





 //TASK 16
let guestArr : string[]=["hamza","Hasnain","hussain","ali"];

let canNotAttend:string="ali"

let newGuest:string ="hammad"

guestArr[guestArr.indexOf(canNotAttend)]= newGuest
 console.log(guestArr)

 guestArr.map((items)=>
 console.log (`Dear ${items},I found a bigger table so I am invited more peoples.`));

//part 2
 let guestBeg:string ="muiz"
guestArr.unshift(guestBeg)
console.log(guestArr)


 //part 3

 let middleGuest:string="fatima"
 let middleindex=guestArr.length/3
guestArr.splice(middleindex,0,middleGuest)
 console.log(guestArr)

//part 4  append

 guestArr.push("zeesham")
console.log(guestArr)


 //part 5
 guestArr.map((items) => {
  console.log(`Dear ${items}, you are invited to the dinner.`);
  });
  




 //TASK 17


let guests: string[] = ["Ali", "bilal",];

 console.log("Due to limited space, only two people can be invited for dinner.");


 while (guests.length > 2) {
    const removedguest = guests.pop();
   console.log (`sorry,${removedguest},you're no longer invited to dinner.`);
}

guests.forEach((guests)=>{
 console.log(`dear,${guests},you are still invited to the dinner`)
 });


 guests.pop();
guests.pop();

console.log("FINAL GUEST LIST:", guests)





 //TASK 18
let placesToVisit: string[] = ["Tokyo", "Pakistan", "America", "China", "Japan"];

console.log("Original order:",placesToVisit);

 console.log("Alphabetical order:", [...placesToVisit].sort());

 console.log("Orginal order after sorting:", placesToVisit);

 console.log("Reverse Alphabetical order:", [...placesToVisit].sort().reverse());

 console.log("Orginal order after reverse sorting:", placesToVisit);

placesToVisit.reverse();
 console.log("reversed order:",placesToVisit)

 placesToVisit.reverse();
 console.log("back to original order:",placesToVisit)

 placesToVisit.sort();
 console.log("sorted in alphabetical order",placesToVisit)

placesToVisit.sort((a,b) =>b.localeCompare(a))
 console.log("sorted in reverse alphabetical order:",placesToVisit)




//TASK19
let invitations:string[]=["ali","bilal"]
let count_invitations :number= invitations.length 

console.log(`${count_invitations} people will come to dinner`)





 //TASK 20

 let country:string[]=["Pakistan","India","NewYork","Japan","China"]
 console.log("List of Country:")
console.log(country)




 //TASK 21

 let person:{name:string, fname:string, age:number } = {name:"Muhammad",fname:"Male",age:22}
 console.log(person)





 //Task 22

const days:string[] = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

 console.log(days{7})

console.log(days[6])






 //TASK 23

 let car="subaru";

 console.log("is car == `subaru` ? predict true")
 console.log(car==`subaru`)


 console.log ("is car !== `honda city? predict true")
 console.log (car != `honda city`)


 console.log("is car == `Subaru` ? predict false")
 console.log(car==`Subaru`)
 
 console.log("is car == `SUBARU` ? predict false")
 console.log(car==`SUBARU`)


 console.log("is car.length == 6? predict true")
 console.log(car.length==6)

 console.log("is car.length != 10? predict true")
 console.log(car.length!=10)


console.log("is 10>45? predict false")
 console.log(10>45)

console.log("is 3<=2? predict false")
 console.log(3<=2)

console.log("is 72>=83? predict false")
 console.log(72>=83)

 console.log("is car == `subaru`&& car.length==6?predict true")
 console.log(car == `subaru`&& car.length == 6)








 //TASK 24


 let name_1 :string="mz"
let name_2 :string="muhammad bin zaheer"
let name_3 :string="muhammad it student"

 if(name_1== name_3){
    console.log("names are equal")}
 else{
   console.log("names are not equal")
 }
 if(name_1! = name_2){
   console.log("names are equal")  // ans is equal because type is same
 }

 if(name_1! = name_3){
   console.log("names are equal")  
}



let age_1:number = 18
 let age_2:number = 22

 if (age_1==18){
  console.log("eligible for vote")
 }

 if (age_1!=22){
   console.log("eligible for vote in older category")
 }

 if (age_1<=age_2){      //less
   console.log("younger")
 }

if (age_2>=age_1){      //greater
  console.log("older")
 }


 if(age_1==18 && age_2==22){
    console.log("person is eligible for vote")
 }

 if(age_1==18 || age_2!=22){
   console.log("person is eligible not for vote") 
 }



let country: string[] = ["pakistan", "india", "japan", "china"];

 if (country.includes("pakistan")) {
    console.log("pakistan is in the country list");
 }

if (!country.includes("america")) {
    console.log("america is not included in the array");
}






 //TASK 25
let alien_color = "green"

 if(alien_color == "green")
   console.log("you earn 5 points")


 let alien_color : string = "red"
if(alien_color == "green")
   console.log("no output")





//TASK 26

 let alien_color = "green"

if(alien_color == "green"){
   console.log("player just earned 5 points for shooting for shooting the alien")}
else{
  console.log("player just earned 10 points")
 }


 let alien_color = "red"

 if(alien_color == "green"){
  console.log("player just earned 5 points for shooting for shooting the alien")}
 else{
   console.log("player just earned 10 points")
 }




 //TASK 27

let alien_color:string = "red";

 if (alien_color == "green") {
    console.log("5 points");
} else if (alien_color == "yellow") {
  console.log("10 points");
 } else {
    console.log("15 points");
 }




 //TASK 28

let age:number = 18

 if(age < 2){
    console.log("you are a baby")
 }else if (age<4){
   console.log("you are a toddler")
 }else if (age<13){
   console.log("you are a kid")
}else if (age<20){
 console.log("you are a teenager")
 }else if (age<65){
  console.log("you are a adult")
}else {
   console.log("you are a older")
 }






 //TASK 29

let favourite_fruits:string[] =["kivi","orange","apple","berry","peach"] 


if(favourite_fruits.includes("kivi")){
 console.log("kivi")
}
if(favourite_fruits.includes("apple")){
    console.log("apple")
  }
   if(favourite_fruits.includes("orange")){
     console.log("orange")
    }

  if(favourite_fruits.includes("berry")){
    console.log("you really like bananas")
  }
 if(favourite_fruits.includes("peach")){
    console.log("you really like bananas")
 }




//TASK 30

 let users:string[] = ["eric","haseeb","ali","fatima","admin"]

for(let user of users){
    if(user === "admin"){
      console.log("Hello admin, would you like to see a status report?")
  } else{
       console.log(`hello ${user},thank you for logging in again`)
    }
 }





//TASK 31

 let users:string[] = ["eric","haseeb","ali","fatima","admin"]

 if (users.length === 0){
    console.log("we need to find some users!")
 }else{
   for (let user of users){
       if (user=== "admin"){
          console.log("Hello admin, would you like to see a status report?")
   } else {
        console.log(`Hello ${user},thank you for logging in again`)
       }
  }
 }

users = []
 if(users.length === 0){
    console.log("we need to find some users!")
}




// TASK 32

let current_users : string[] = ["admin","Eric","Ali","Hamza","fatima"]
 let new_users: string[] = ["admin","fatima","Aliza","Haseeb","Noor"]

 let current_users_lower : string [] = current_users.map(user =>user.toLowerCase())

for(let new_user of new_users ){
    if(current_users_lower.includes(new_user.toLowerCase())){
       console.log(`Sorry ${new_user},that name is taken`)
   }else{
     console.log(`Yes ${new_user},is still in available list`)
   }
}






//TASK 33

 let numbers:number [] =[1,2,3,4,5,6,7,8,9]

 for (let number of numbers)

if(number === 1){
    console.log(`${number}st`) //1st
 } else if (number === 2){
    console.log(`${number}nd`) //2nd

}else if (number === 3){
    console.log(`${number}rd`) //3rd

 }else{
  console.log(`${number}th`) //4th,5th,6th,7th,8th,9th,
 }




 //TASK 34

 let favourite_pizza : string [] = ["pepperoni","chicken","veg"]

 for(let pizza of favourite_pizza){
    console.log(pizza)
 }

console.log("\n")

for(let pizza of favourite_pizza){
  console.log(`I really like ${pizza} pizza!`)
}

console.log("\nI really love pizza!")





 //TASK 35

 let animals :string[] = ["cat","lion","dog"]

 for(let animal of animals){
    console.log(animal)
 }

console.log("\n")

 for(let animal of animals){
   console.log(`A ${animal} has a tail`)
 }

console.log("\nall of these are great pets! but i love cats more")





 //TASK 36

 function makeShirt(size: string, text: string): void {
   console.log(`\nYou ordered a ${size} shirt that says "${text}"`);
 }

 makeShirt("large", "I love TypeScript");
makeShirt("medium", "I need a big shirt");






 //TASK 37

 function makeShirt(size: string = `large`, text: string=`i love typescript`): void{
   console.log(`you have order a ${size},shirt that says ${text}`)
 } 

 makeShirt();
 makeShirt(`medium`)

makeShirt(`small`,`I need a big shirt to wear`)




//TASK 38

function describe_city(city: string,country: string= `Pakistan`): void{
   console.log(`${city} is in ${country}`)
 }

describe_city(`karachi`);
 describe_city(`france`,`europe`)
 describe_city(`lahore`,`punjab`)





 //TASK 39

function cityCountry(city:string, country:string):string{
   return`${city},${country}`
 }

 let c1=cityCountry(`lahore`,`pakistan`)
let c2=cityCountry(`tokyo`,`japan`)
 let c3=cityCountry(`paris`,`france`)

 console.log(c1)
 console.log(c2) 
 console.log(c3)


 //TASK 40

 function makeAlbum(artist:string,title:string):{artist:string,title:string}{
    const dictionaries = {
       artist:artist.charAt(0).toUpperCase()+artist.slice(1)
         title:title.charAt(0).toUpperCase()+title.slice(1)
    };
    return dictionaries;
}

let album = makeAlbum ("ali","light")
 console.log(album)

 let album = makeAlbum ("bilal","red wave")
 console.log(album)

let album = makeAlbum ("hamza","seenbreeze")
 console.log(album)





 //TASK 41

 function show_magicians(magicians:string[]): void{
  for(const magician of magicians){
      console.log(magician.charAt(0).toUpperCase()+ magician.slice(1))
  }
 }

 const magician:string[]=["ali","hamza","bilal"];
 show_magicians(magician)


//TASK 42


function make_great(magicians:string[]):void{
   for (let i = 0; i<magicians.length; i++){     //i stands for index string
      magicians[i]=magicians[i] + ` the great`
        
   }
 }

 const magicians2:string[]=["ali","hamza","bilal"];
 make_great(magicians2)
 show_magicians(magicians2)



 // TASK 43

function make_great2(magicians:string[]):string[]{
    const greatMagicians:string[]=[];
     for (let i = 0;i <magicians.length; i++){
    greatMagicians.push(magicians[i] +  ` the Great`);
   }
   return greatMagicians;
 }

 const magicians3:string[]=["ali","hamza","bilal"];
 const greatMagicians2:string[] = make_great2(magicians3);
 show_magicians(magicians3);
 show_magicians(greatMagicians2);



// //TASK 44

 function sandwich(...items:string[]):void{
   console.log("Sandwich order:")

   for(let i=0; i<items.length; i++){
        console.log(`- ${items[i]}`)
   }
 }

 console.log("enjoy your sandwich muhammad") 

 sandwich('capsicum','tomato','chicken')
 sandwich('beef','cheese')
// sandwich('garlic chicken','mayo sauce')



//TASK 45

type Car = {
    manufacture:string
    model:string
    [key:string]: any;
}
 function createCar(manufacture:string,model:string,optional:Record < string,any>): Car{
    return{
        manufacture,
        model,
        ...optional
    };   
 }


const myCar:Car = createCar("toyota","corolla",{color:"silver",year:"2024"})
console.log(myCar)


