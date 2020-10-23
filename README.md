# Комфортная верстка с Gulp. 

## 🔥 Особенности
***
* Модульная система сборки проекта.
*  [Nunjucks.js](https://mozilla.github.io/nunjucks/templating.html#include) для сборки HTML файлов 📕
* Препроцессор [SASS](https://sass-lang.com/documentation) и [PostCSS](https://postcss.org/) 📘 
* [Webpack](https://webpack.js.org/) для сборки JavaScript 📙
* [Babel](https://babeljs.io/) для поддержки современного JavaScript (EC6) 
* Отправка проекта на хостинг по FTP

## 🛠️ Установка
* установите [NodeJS](https://nodejs.org/en/) (если требуется) и [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)
* скачайте сборку с помощью `Git`
* установите `gulp` глобально: `yarn global add gulp-cli`
* перейдите в скачанную папку со сборкой для разработки: `cd ./gulp-starter/src`
* скачайте необходимые зависимости: `yarn`
* чтобы начать работу, введите команду `yarn run dev` (режим разработки)
* чтобы собрать проект, введите команду `yarn run build` (режим сборки)
* чтобы собрать проект и отправить на хостинг, настройте `config.json` и введите команду `yarn run build:ftp` (режим сборки на хостинг)


## ⌨️ Команды
***
__`yarn run dev`__ - запуск сервера для работы над проектом.

__`yarn run build`__ - собирает проект.

__`yarn run build --deploy`__ - собирает проект для деплоя.

__`yarn run build:ftp`__ - собирает проект и отправляет на его на хостинг.

__`yarn run build:ftp --deploy`__ - собирает проект для деплоя и отправляет на его на хостинг.

__`yarn run build:page`__ - собирает страницы.

__`yarn run build:style`__ - собирает стили.

__`yarn run build:script`__ - собирает скрипты.

__`yarn run build:image`__ - копирует картинки.

__`yarn run build:sprite`__ - собирает SVG из папки `src/image/sprite` в файл `dist/image/sprite.svg`.

__`yarn run build:video`__ - копирует видео.

__`yarn run build:font`__ - копирует шрифты.

__`yarn run build:clean`__ - очищает папку _`dist`_.
### 🚩 Флаги для команд
__`--indent={value}`__ - собрать страницы с заданным отступом. По умочанию 2 пробела. Если `--indent=0`, то страница минифицируется.
__`--port={value}`__ - порт для сервера. По умолчанию `--port=3000`.

## 📂 Структура файлов
***
```
|---config.json
|---dist
|---gulp_modules
`---src
    |---_global.js
    |---_global.scss
    |---font
    |---image
    |   |---favicon
    |   `---sprite
    |---module
    |   |---block
    |   `---include
    |---video
    `---view
        |---include
        `---page
```
* Корень проекта 
    * `config.json` - натсройка FTP, сервера и другое
    * `webpack.config.js` - настройка Webpack
    * `gulpfile.js` - настройка Gulp
    * `paths.json` - пути проекта
* `src` - папка для разработки
    * глобальные стили: `_global.scss`
    * глобальные скрипты: `_global.js`
    * страницы: `view/page`
        * инклюды для расширения и разбиения страниц на части: `view/include`
    * БЭМ блоки: `module/block`
        * инелюды для переиспользуемого кода в блоках: `module/include/`
    * шрифты: `font`
    * видео: `video`
    * изображения: `image`
    * фивиконки: `image/favicon`
    * спрайты: `image/sprite`
        * спрайты собираются в `dist/image/sprite.svg`
* `dist` - сюда компилируются файлы. При запуске `yarn run dev` отсюда запускается сервер.
* `gulp_modules` - папка с Gulp тасками

### 📕 Страницы
Страницы находятся в папке `src/view/page/{name}.html`. Сборка с помощью Nunjucks.js.
* index.html: `src/view/page/index/index.html`
### 📘 Стили
Стили для страниц находятся в папке `src/view/page/{name}.scss`. Сборка с помощью SCSS и PostCSS. 
+ index.scss: `src/view/page/index/index.scss`

### 📙 Скрипты
Скрипты для страниц находятся в папке `src/view/page/{name}.js`. Сборка с помощью Webpack. 
* index.js: `src/view/page/index/index.js`
#### Как добавить скрипты страниц?
В файле `webpack.config.js` у объекта `entry` добавить новые скрипты, которые надо сгенерировать.
```json
entry: {
"index.js": "./src/view/page/index/index.js",
"newPage.js": "./src/view/page/newPage/newPage.js"
}
```
### 🔣 Спрайты
Спрайт собирается из SVG файлов `./src/image/sprite/*.svg` в `./dist/image/sprite.svg`.
## ✉️ Контакты
***
ВКонтатке - [@rkolodich](https://vk.com/rkolodich)
Telegram - [@rkolodich](https://t.me/rkolodich)
## 📌 Полезные ссылки
***
* [Bouncejs](http://bouncejs.com/) - создание bounce эффектов для CSS
* [Clippy](https://bennettfeely.com/clippy/) - CSS маски `clip-path`
* [CSS Gradient](https://cssgradient.io/) - редактор CSS градиентов
* [FANCY-BORDER-RADIUS](https://9elements.github.io/fancy-border-radius/#30.30.37.30--.) -  загруглённые фигуры CSS
* [Squoosh](https://squoosh.app/index.html) - оптимизация растровой графики
* [SVGOMG](https://jakearchibald.github.io/svgomg/) - оптимизация векторной графики
* [Favicon.io](https://favicon.io/favicon-generator/) - создание фивиконок
