console.log("Hello JavaScript")

// var r=4;
// const pi=3.142;
// const z=2*pi*r;
// console.log("Area of Circle:" + z);

// document.getElementById("head1").innerHTML = "Spotify Playlists";

// const A = document.getElementById("head1");
//  A.innerHTML = "Spotify Playlists";

// var arr = ["Hi","Hello","Hey","Hii"];

// console.log(arr[2]);

// var temp = "Ejaz" ;
// var x = 9;
// console.log( temp + x + 4);
// console.log(  x + 4);
// console.log(x / 4);
// console.log(x % 4);
// console.log(9 + " " + 3);


// var temp = "Ejaz" ;
// var x = 2.25;
// console.log(Math.floor)


// var Dividend = ;
// var Divisor = ;
// var Quotient = Math.floor(Dividend/ Divisor) ;
// var Remainder = Dividend % Divisor ;
// console.log(Quotient ,Remainder)


// var temp = {
//     "help" : "Help",
//     1   : "Yo"

// }

// console.log(temp)



//music_array---
// let songs = [new Audio('mp3/1.mp3') , new Audio('mp3/1.mp3') ]
// let s1 = new Audio('mp3/1.mp3')
// s1.play()
// function play(){
    
// }

let songs = [new Audio('mp3/1.mp3') , new Audio('mp3/2.mp3') , new Audio('mp3/3.mp3') , new Audio('mp3/4.mp3') , new Audio('mp3/5.mp3') , new Audio('mp3/6.mp3') ]

// songs.push(new Audio('1.mp3'))

// console.log(song)

//loops
function stopAll(){
for (let i=0; i < songs.length; i++ ){
    songs[i].pause();
    songs[i].currentTime = 0;
}

}
// ``BackTicks

function Play(x){
    stopAll();
    songs[x-1].play();
}

let song = [];

// function stopAll(){
//     songs[0].pause();
//     songs[1].pause();
//     songs[2].pause();
//     songs[3].pause();
//     songs[4].pause();
//     songs[5].currentTime = 0;
//     songs[0].currentTime = 0;
//     songs[1].currentTime = 0;
//     songs[2].currentTime = 0;
//     songs[3].currentTime = 0;
//     songs[4].currentTime = 0;
//     songs[5].currentTime = 0
// }

//Arrays-------------

// const A = [1,2,3,4,5,6,7,8,9,10];
// const B = {
//     name : "Ejaz",
//     age : 25,
//     contact : 9986288211,
//     linkedin : "www.linkedin.com",
//     education : ["Guru Nanak Dev Engg college"],
//     skill : "JavaScript",
//     gender : "Male"
   
// }

// let myNum = myArray[0];
// let el = "Ejaz";
// myArray[4]=el;
// const array=[A,B];
// console.log(A,B)
// console.log(B.keys(0))



// let X = [1,2]
// let y = [3,4]
// let z = [5,6]

// let F = [x,y,z]

// console.log(f)

//----------------------------
// const num =[1,2,3,4,,,,5]

// console.log(num.length)

// const num =[5,4,3,2,"1","Ejaz"]

// console.log(num.sort())
//------------------

// const num =["Ejaz","Hi","Hello"]

// // console.log(num.join())
// console.log(num.join("<--->"))



//-------------Push----
// const num =["Ejaz","Hi","Hello","Custom"]
// num.push("Custom") //push add the string to last
// console.log(num)



//--------Pop---------
// const num =["Ejaz","Hi","Hello"]
// let x = num.pop()
//  num.pop() 
// console.log(num,x)


//--------------Adding 2 arrays--------

// const num =["Ejaz","Hi","Hello"]
// const a2 = ["Yo","Yeah"]
// const x = num.concat(a2);
// console.log(x)




//-----------------Spread Operator--------

// const num =["Ejaz","Hello"]
// const a2 = ["Yo",...num,"Yeah"]
// let a3 = new Array("a","b",1) //refrain
// console.log(a3)

//--------------------restrict array length------

// const arr = [];

// function addItems(x){
//     if (arr.length >9 ) return;
//     arr.push(x);
// }

// for (let i =0; i <=100; i++){
//     addItems(i);
//     console.log(i)
//     // break;
//     continue;
    
//     console.log("yepp")
// }

// console.log(arr)

//-------------------------
// function addItems(x){
//     if (arr.length >9 ) return;
//     arr.push(x);
 // break;
    // continue;
// }

// const arr = [];

// for (let i =0; i <=100; i++){
    
    
//     if (i == 84) break;

//     if (i % 2 == 0) 
//     {
//         arr.push(i)

//     }
    // else{

    //     arr.push(i)
    // }

// }

// console.log(arr)

//Armstrong-----

// function checkArmstrong(x){
//     const initialX = x;
//     let ans = 0;
//     while(x>0){
//         let rem = x % 10;
//         ans += rem * rem * rem;
//         // ans = ans + rem * rem * rem;

//         x = Math.floor(x/10)


//     }
//     if (initialX == ans) return true;
//     return false
    
//     console.log(ans)

    
// }

// console.log(checkArmstrong(371))

//create a basic banking system 2 input fields, 2 btns for credit and debit and UI also
//







