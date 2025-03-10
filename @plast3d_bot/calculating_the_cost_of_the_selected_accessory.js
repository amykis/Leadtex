// Получаем информацию о выборе аксессуара
var id = getContactVariable("id");
var accessories_and_consumables = getContactVariable("accessories_and_consumables");
var product_name = getContactVariable("product_name");
var compatibility = getContactVariable("compatibility");
var texture_size = getContactVariable("texture_size");
var count_product = getContactVariable("count_product");
var quantity_availability = getContactVariable("quantity_availability");
var quantity_early_reservation = getContactVariable("quantity_early_reservation");
var price_availability = getContactVariable("price_availability");
var price_early_reservation = getContactVariable("price_early_reservation");
var price_preorder = getContactVariable("price_preorder");
var info = getContactVariable("info");
var select_button = getContactVariable("select_button");

var full_price = 0;

// Считаем общую стоимость выбранного товара
if (select_button == "В наличии") {
    full_price = price_availability * count_product;
    setContactVariable("price", price_availability);
    setContactVariable("full_price", full_price);
} else if (select_button == "Раннее бронирование") {
    full_price = price_early_reservation * count_product;
    setContactVariable("full_price", full_price);
    setContactVariable("price", price_early_reservation);
} else if (select_button == "Предзаказ") {
    full_price = price_preorder * count_product;
    setContactVariable("full_price", full_price);
    setContactVariable("price", price_preorder);
};
