// Получаем выбор пользователя
var id = getContactVariable("id");
var accessories_and_consumables = getContactVariable("accessories_and_consumables");
var product_name = getContactVariable("product_name");
var compatibility = getContactVariable("compatibility");
var view = getContactVariable("view");
var texture_size = getContactVariable("texture_size");
var quantity_availability = getContactVariable("quantity_availability");
var quantity_early_reservation = getContactVariable("quantity_early_reservation");
var price_availability = getContactVariable("price_availability");
var price_early_reservation = getContactVariable("price_early_reservation");
var price_preorder = getContactVariable("price_preorder");
var info = getContactVariable("info");

if (quantity_availability === null || quantity_availability === undefined || quantity_availability === "") {
    setContactVariable("text_quantity_availability", null);
} else if (typeof quantity_availability === "string" && quantity_availability.trim() === "не выпускается") {
    setContactVariable("text_quantity_availability", null);
} else if (typeof quantity_availability === "number" || !isNaN(quantity_availability)) {
    setContactVariable("text_quantity_availability", "<b>В наличии:</b> " + quantity_availability +
        " шт.%0A<b>Стоимость:</b> " + price_availability + " р.%0A%0A");
    setContactVariable("button_quantity_availability", "В наличии");
} else {
    setContactVariable("text_quantity_availability", "Некорректное значение");
}

if (quantity_early_reservation === null || quantity_early_reservation === undefined || quantity_early_reservation === "") {
    setContactVariable("text_quantity_early_reservation", null);
} else if (typeof quantity_early_reservation === "string" && quantity_early_reservation.trim() === "не выпускается") {
    setContactVariable("text_quantity_early_reservation", null);
} else if (typeof quantity_early_reservation === "number" || !isNaN(quantity_early_reservation)) {
    setContactVariable("text_quantity_early_reservation", "<b>Раннее бронирование:</b> " +
        quantity_early_reservation + " шт.%0A<b>Стоимость:</b> " + price_early_reservation + "р.%0A%0A");
    setContactVariable("button_quantity_early_reservation", "Раннее бронирование")
} else {
    setContactVariable("text_quantity_early_reservation", "Некорректное значение");
}

var name_product = accessories_and_consumables + " " + product_name + " " + compatibility + " " + view + " " + texture_size;
setContactVariable("name_product", name_product);
