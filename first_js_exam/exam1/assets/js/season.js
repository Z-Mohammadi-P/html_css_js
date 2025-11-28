let season = "زمستان";
let seasonnumber;

switch(season){
    case "بهار" :
        seasonnumber = 1;
        break;
    case "تابستان" :
        seasonnumber = 2;
        break;
    case "پاییز" :
        seasonnumber = 3;
        break;
    case "زمستان" :
        seasonnumber = 4;
        break;
    default:
        seasonnumber=0;
}

console.log("فصل انتخابی",season);
console.log("شماره فصل",seasonnumber)