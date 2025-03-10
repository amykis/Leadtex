var total = response.data.meta.total;
setContactVariable("total", total);
var num = 0;
var text_product = "";
var item_id = "";
var text_order = "";
var order_price = 0;
var now = new Date().toLocaleDateString();
var id_product = getContactVariable("id_product");
var fio = getContactVariable("fio");
var phone = getContactVariable("phone");
var username = getContactVariable("user_name");
var type_of_delivery = getContactVariable("type_of_delivery");
var address = getContactVariable("address");
var text_product_telegram = "";
var text_order_telegram = "";

while (num < total) {
    var full_price = response.data.data[num].full_price;
    text_product = id_product + ", " + fio + " " + username + ", " + phone + ", " + type_of_delivery + ", " + address + ", " + response.data.data[num].name_product + ", " + response.data.data[num].article + ", " + response.data.data[num].fulfillment + ", " + response.data.data[num].count_product + ", " + response.data.data[num].price + ", " + full_price + ", " + now;
    text_product_telegram = "<b>" + response.data.data[num].name_product + "</b>%0Aартикул: " + response.data.data[num].article + "%0A" + response.data.data[num].fulfillment + "%0A" + response.data.data[num].count_product + " x " + response.data.data[num].price + " = " + full_price + " рублей%0A%0A";
    if (num + 1 < total) {
        text_order = text_order + text_product  + "\n\n";
        text_order_telegram = text_order_telegram + text_product_telegram  + "\n\n";
    } else {
        text_order = text_order + text_product;
        text_order_telegram = text_order_telegram + text_product_telegram;
    }
    order_price = order_price + full_price;
    item_id = response.data.data[num].id;
    setContactVariable("item_id" + num, item_id);
    num++;
}

setContactVariable("text_order_google_sheets", text_order);
setContactVariable("order_price", order_price);
setContactVariable("text_order_telegram", text_order_telegram);
