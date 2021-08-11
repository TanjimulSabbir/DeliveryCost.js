function totalSales(shirtquantity, pantquantity, shoequantity) {
    shirtPrice = 100;
    pantPrice = 200;
    shoePrice = 500;
    shirts = shirtPrice * shirtquantity;
    pants = pantPrice * pantquantity;
    shoes = shoePrice * shoequantity;


    Total_Sales = shirts + pants + shoes


    return Total_Sales
}

shirtquantity = 1;
pantquantity = 1;
shoequantity = 1;

Sales = totalSales(
    shirtquantity, pantquantity, shoequantity);
console.log(Sales);