function deliveryCost(delivery_Number) {

    if (delivery_Number <= 100) {
        delivery_charge = 100;
    }
    else if (delivery_Number > 100 && delivery_Number < 200 || delivery_Number == 200) {
        delivery_charge = 100 + 80;
    }

    else if (delivery_Number > 200) {
        delivery_Number = delivery_Number - 200;
        delivery_charge = 180;
        for (i = 100; delivery_Number > i; i + 0) {
            delivery_Number = delivery_Number - i;
            delivery_charge += 50;
        }
        if (delivery_Number < 100 || delivery_Number == 100) {
            delivery_charge += 50;
        }
    }



    return delivery_charge
}

delivery_Number = 600;
delivery_amount = deliveryCost(delivery_Number);
console.log(delivery_amount)