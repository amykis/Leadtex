// Получаем выбор пользователя
var accessories_and_consumables = getContactVariable("accessories_and_consumables");
var product_name = getContactVariable("product_name");
var compatibility = getContactVariable("compatibility");
var view = getContactVariable("view");
var texture_size = getContactVariable("texture_size");

//  Получаем информацию из таблицы в JSON формате и записываем в переменную json_data
var json_data = response.data;
// Получаем количество строк с брендами
var len_values = json_data.values.length;
setContactVariable("len_values", len_values);

// Инициализация переменных для последующего сравнения
var id = "";
var quantity_availability = "";
var quantity_early_reservation = "";
var price_availability = "";
var price_early_reservation = "";
var price_preorder = "";

// Инициализация начальной строки с данными исключая шапку
var rows = 2;
// Инициализация количества кнопок
var count_button = 0;

// Формирование кнопок в зависимости от наличия товара
while (rows < len_values) {
    // Получение данных из каждой новой строчки
    var new_id = json_data.values[rows][0];
    var new_accessories_and_consumables = json_data.values[rows][1];
    var new_product_name = json_data.values[rows][2];
    var new_compatibility = json_data.values[rows][3];
    var new_view = json_data.values[rows][4];
    var new_texture_size = json_data.values[rows][5];
    var new_quantity_availability = json_data.values[rows][6];
    var new_quantity_early_reservation = json_data.values[rows][7];
    var new_price_availability = json_data.values[rows][8];
    var new_price_early_reservation = json_data.values[rows][9];
    var new_price_preorder = json_data.values[rows][10];

    // Инициализация флага, проверка наличия данных по количеству
    var flag = "";
    if (new_quantity_availability === null || new_quantity_availability === undefined || new_quantity_availability === "") {
        flag = flag + '0';
    }
    if (new_quantity_early_reservation === null || new_quantity_early_reservation === undefined || new_quantity_early_reservation === "") {
        flag = flag + '0';
    }
    // Формируем кнопки с наименованием
    if (flag != '00' && accessories_and_consumables == new_accessories_and_consumables && product_name == new_product_name && compatibility == new_compatibility && view == new_view && texture_size == new_texture_size) {
        setContactVariable("id", new_id);
        setContactVariable("quantity_availability", new_quantity_availability);
        setContactVariable("quantity_early_reservation", new_quantity_early_reservation);
        setContactVariable("price_availability", new_price_availability);
        setContactVariable("price_early_reservation", new_price_early_reservation);
        setContactVariable("price_preorder", new_price_preorder);
    }
    rows++;
}
