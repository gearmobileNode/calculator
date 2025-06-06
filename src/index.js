// process - объект, создаваемый средой выполнения, в котором хранится вся информация о среде
// argv - свойство объекта process, в котором ввиде массива строк хранится информация о частях строки запуска
// первый элемент массива - путь в исполняемому файлу node.js
// второй элемент массива - путь к файлу запуска скрипта
// последующие элементы массива - аргументы (ключи) командной строки

// <major> "." <minor> "." <patch>

// npm i chalk@~5.2.0 - если указанной версии не будет найдено, установится более новая версия пакета по номеру patch'а
// например, 5.2.1 или 5.2.2, но не 5.3.0 или 5.3.1
// другими словами, символ ~ выполняет обновление по патчу (patch)

// npm i chalk@^5.2.0 - если указанной версии не будет найдено, установится более новая версия пакета по номеру minor'а
// например, 5.3.0 или 5.3.1, но не 6.0.0 или 6.0.1
// другими словами, символ ^ выполняет обновление по минору (minor)

// npm i chalk@<5.2.0 - установка любой актуальной версии меньше 5.2.0
// npm i chalk@<=5.2.0 - установка любой актуальной версии меньше или равно 5.2.0

// npm i chalk@>5.2.0 - установка любой актуальной версии больше 5.2.0
// npm i chalk@>=5.2.0 - установка любой актуальной версии больше или равно 5.2.0

// npm i chalk@">=5.2.0 <6.0.0" - установить актуальную версию, которая меньше или равна 5.2.0 и меньше 6.0.0

// npm i chalk@"5.2.0 - 5.6.0" - установить актуальную версию в диапазоне от 5.2.0 до 5.6.0

import chalk from 'chalk';
import { config } from 'dotenv';

// Запускаем процесс считывания переменных окружения
config();

if (!process.argv[2]) {
  console.log(process.env.COLORIZE);
  if (process.env.COLORIZE && process.env.COLORIZE === 'no') {
    console.log('Enter value, please!');
  } else {
    console.log(chalk.red('Enter value, please!'));
  }
  process.exit(1);
}

if (!parseFloat(process.argv[2])) {
  if (process.env.COLORIZE && process.env.COLORIZE === 'no') {
    console.log('Enter integer, please!');
  } else {
    console.log(chalk.magenta('Enter integer, please!'));
  }
  process.exit(1);
}

if (process.env.COLORIZE && process.env.COLORIZE === 'no') {
  console.log(
    `Inches ${process.argv[2]} it's ${chalk.yellow('>>>')} ${process.argv[2] * 2.54} in santimeters`,
  );
} else {
  console.log(
    chalk.green(
      `Inches ${process.argv[2]} it's ${chalk.yellow('>>>')} ${process.argv[2] * 2.54} in santimeters`,
    ),
  );
}
