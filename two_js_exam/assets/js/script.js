console.log("exam 1")
let array = [1,4,7,2,9,12]
let odds =[]

for(let i= array.length - 1; i >= 0; i--){
    if (array[i]%2 !== 0){
        odds.push(array[i]);
        array.splice(i,1);
    }
}
console.log("arrey = ",array);
console.log("odds = ",odds);

console.log("---------------------------")
console.log("")

console.log("exam 2")
let array2 = [5,0,2,0,8,1];
let move = 0;

for (let x=0; x<array2.length; x++){
    if (array2[x] !== 0){
        array2[move] = array2[x];
        move++;
    }
}
for (let x=move; x < array2.length; x++){
    array2[x] = 0;
}
console.log(array2)

console.log("---------------------------")
console.log("")

console.log("exam 3")
let prices = [500,1500,80,300,1200,50]
let total = 0;

for (let p=0 ; p<prices.length ; p++){
    let price = prices.pop();
    if (price < 100){
        continue;
    }
    if (price > 1000){
        price *= 0.8;
    }
    prices.unshift(price);
}
for (let price of prices){
    total += price;
}
console.log("prices = ",prices);
console.log("total = ",total);

console.log("---------------------------")
console.log("")

console.log("exam 4")
let array4 = [10,20,10,30,20,40];
let reverse = [];

while (array4.length > 0){
    let array4new = array4.pop();
    reverse.push(array4new);
}
console.log("reversed array = ", reverse);

console.log("---------------------------")
console.log("")

console.log("exam 5")
let array5 = [10,20,10,30,20,40];
let array5new = [];

for (let a = 0; a < array5.length; a++){
    let copy = false;

    for (let b = 0; b < array5new.length; b++){
        if (array5[a] === array5new[b]){
            copy = true;
            break;
        }
    }
    if (!copy){
        array5new.push(array5[a]);
    }
}
console.log("orginal array = ",array5);
console.log("new array = ",array5new);