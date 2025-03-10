// Скрипт обрабатывает ячейку "M1" при попадании в него текста
// Текст распределяет по столбцам, разделителея является знак запятой ","
// Тригер настроен на обрабатывание текста при его попадпнии, не зависимо от времени суток
// Реагирует на функцию "onChangeTrigger"

function onChangeTrigger(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Заказы");
  if (!sheet) return;

  const cell = sheet.getRange("M1");
  const text = cell.getValue();

  if (text) {
    Logger.log("Обнаружено изменение в M1, запускаем обработку...");
    parseTextToColumns(sheet);
  }
}

function parseTextToColumns(sheet) {
  const text = sheet.getRange("M1").getValue();

  Logger.log("Текст из M1: " + text);

  if (!text) {
    Logger.log("Текст в M1 пустой.");
    return;
  }

  const paragraphs = text.split("\n\n");
  Logger.log("Найдено абзацев: " + paragraphs.length);

  // Находим первую пустую строку в столбце A (колонка 1)
  const lastRow = sheet.getLastRow();
  let startRow = lastRow + 1;
  const startColumn = 1; // Столбец A

  paragraphs.forEach(paragraph => {
    const lines = paragraph.split("\n");
    Logger.log("Абзац: " + paragraph);
    Logger.log("Строк в абзаце: " + lines.length);

    const values = lines.map(line => line.split(",").map(item => item.trim()));
    Logger.log("Значения: " + JSON.stringify(values));

    values.forEach((row, index) => {
      sheet.getRange(startRow + index, startColumn, 1, row.length).setValues([row]);
    });

    startRow += values.length;
  });

  sheet.getRange("M1").clearContent();
  Logger.log("Очищена ячейка M1.");
}
