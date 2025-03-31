// process - объект, создаваемый средой выполнения, в котором хранится вся информация о среде
// argv - свойство объекта process, в котором ввиде массива строк хранится информация о частях строки запуска
// первый элемент массива - путь в исполняемому файлу node.js
// второй элемент массива - путь к файлу запуска скрипта
// последующие элементы массива - аргументы (ключи) командной строки

if (!process.argv[2]) {
  console.log('Enter value, please!');
  process.exit(1);
}

if (!parseFloat(process.argv[2])) {
  console.log('Enter integer, please!');
  process.exit(1);
}

console.log(
  `Inches ${process.argv[2]} it's ${process.argv[2] * 2.54} in santimeters`,
);
