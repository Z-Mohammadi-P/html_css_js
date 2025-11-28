let total_price = 100;
let shipping_cost = 0;
if (total_price < 100) {
    shipping_cost += (20000);
} 
else if (total_price >= 100 && total_price <= 200){
    shipping_cost += (10000);
}
else {
    shipping_cost += (0);;
}

console.log(shipping_cost);