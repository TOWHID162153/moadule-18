/*
    ধরুন আপনি একটি রেস্টুরেন্টে গিয়ে দেখেন দেখলেন সেখানের,
    regularBurger = 499 Taka,
    specialBurger = 509 Taka,
    coke = 30 taka,
    কিন্তু আপনি দেখলেন একটি অফার চলছে। সেটা হল, ৫০০ টাকার বেশি দামে যে Burger গুলো আছে শুধুমাত সে Burger order করলে সাথে পাবেন একটি free coke.
    এখন if / else ব্যাবহার করে code লিখুন।
*/


const regularBurger = 499;
const specialBurger = 509;
const coke = 30;

if(specialBurger >= 500){
    console.log("--Congratulation sir-- You get a free coke & you have to pay only your burger price :",specialBurger,"taka")
}
else{
    console.log("Sir you have to pay for your burger:",regularBurger,"taka");
    console.log("And for the coke:",coke,"taka")
}

 