// ধরুন আপনি একটি সুপারশপ থেকে 5000 টাকার শপিং করেছেন।  যার কারণে আপনি ১০% ছাড় পাবেন। এখন আপনাকে কত টাকা দিতে হবে সেটা javascript এর মাধ্যমে দেখান।

// --## use if / else and show the out put  ##--
// 1
// let costIncurred = 5000; // show the output if you spend 5k
// 2
let costIncurred = 4999; // show the output if you spend 2K

if(costIncurred>=5000){
    let discount = costIncurred*10 / 100;
    let payAmount = costIncurred - discount;
    console.log("Congratulations, you got 10% discount. Pleas pay :",payAmount,"Taka")
}
else{
    console.log(costIncurred)
}




// --## use "Ternary" not if/else and show the output ##--
// 1
// let costIncurred = 5000; // show the output if you spend 5k
// 2
// let costIncurred = 2000; // show the output if you spend 2K

// let discount = costIncurred*10 / 100;
// let payAmount = costIncurred - discount;

//  costIncurred >= 5000 ? console.log("Congratulations, you got 10% discount. Pleas pay :",payAmount,"Taka") : console.log(costIncurred)





// --## this time also use "Ternary" but add a variable which is value will must bullen type; ##--
//  costIncurred >= 5000 ? console.log("Congratulations, you got 10% discount. Pleas pay :",payAmount,"Taka") : console.log(costIncurred)

// 1
// let costIncurred = 5000; // show the output if you spend 5k
// 2
// let costIncurred = 2000; // show the output if you spend 2K

