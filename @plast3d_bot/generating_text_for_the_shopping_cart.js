var total = response.data.meta.total;
setContactVariable("total", total);
var num = 0;
var text_product = "";
var text_order = "";
var order_price = 0;
var id_product = getContactVariable("id_product");
if (id_product != null){
    while (num < total) {
        var full_price = response.data.data[num].full_price;
        if (response.data.data[num].article < 1000) {
            text_product = "<b>" + response.data.data[num].name_product + "</b>" + "\n" + response.data.data[num].fulfillment + "\n" + response.data.data[num].count_product + " x " + response.data.data[num].price + " = " + full_price + " рублей";
        }
        else {
            text_product = "<b>" + response.data.data[num].name_product+ "</b>" + "\n артикул: " + response.data.data[num].article + "\n" + response.data.data[num].fulfillment + "\n" + response.data.data[num].count_product + " x " + response.data.data[num].price + " = " + full_price + " рублей";
        }

        if (num + 1 < total) {
            text_order = text_order + text_product  + "\n\n";
        } else {
            text_order = text_order + text_product;
        }
        order_price = order_price + full_price;
        num++;
    }

    setContactVariable("text_order", text_order);
    setContactVariable("order_price", order_price);
} else {
    setContactVariable("order_price", 0);
}
