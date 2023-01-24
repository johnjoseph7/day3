// For the given Json iterate all loops (for,for of,for each,for in)

var obj = {
    name :"arun",
    age :30
}
var objJson = JSON.stringify(obj)
console.log(objJson);

var obj1 = JSON.parse(objJson)
console.log(obj1);

// for-in-loop
for (const key in obj1) {
   console.log(`My ${key} is ${obj[key]} `)
}

let arrInfo = ["John",30,"salem"]
let arrInfoJson = JSON.stringify(arrInfo);
console.log(arrInfoJson)

let arr = JSON.parse(arrInfoJson);
console.log(arr);

// for loop
for (let i = 0; i<=arr.length; i++) {  
        console.log(arr[i])
}

// for-of loop
for (const e of arr) {
    console.log(e)
}

// for-each loop
arr.forEach(element => {
    console.log(element)
});

// Own resume In JSON formet  

var resumeData = {
    name : "Johnson.J" ,
    Dob  : "03 JUn 1999",
    place : "attur" ,
    Education  : "BE Mechanical Engineering" ,
    Religion  : "Christian" ,
    Nationality : "India" ,
    fatherName : "Joe",
    motherName : "sagayarani" ,
    brotherName : "Arun" ,
    Gender : "male" ,
    Experience : "2 year of experience",
    Address   :  {
        streetName : "Rajaji colony",
        City  : "Attur" ,
        Pincode : 636102
    },
    Hobbies : ["Playing","collecting Info"],
    Experience : "1 year of experience in my core area"

}
var resumeJson = JSON.stringify(resumeData);
console.log(resumeJson);
