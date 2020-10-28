
# [Гамбургерно меню](http://sanedi.ru/hamburgers/)
## 📕 HTML код
Чтобы ипользовать 'гамбургер', выберете тему `{name}`.
```html
<button type="button" class="hamburger hamburger_theme_{name}">
 <div class="hamburger__box">
  <div class="hamburger__inner"></div>
 </div>
</button>
```
## JavaScript код
Для работы 'гамбургеров' скопируйте этот код в JS файл.
```JavaScript
const hamburgers = document.querySelectorAll(".hamburger");
if(hamburgers.length>0){
 hamburgers.forEach(hamburger => {
  hamburger.addEventListener("click", ()=>{
   hamburger.classList.toggle("hamburger_active");
  })
 });
}
```
## 🎚️ Настройка
Перейдите в файл `hamburger.scss` и измените параметры. 
```scss
$h-padding-x: 2em;
$h-padding-y: 2em;
$h-width: 7em;
$h-height: 6em;
$h-color  : #fff;
$h-line-border-radius: 0em;
$h-line-height: 1em;
$h-duration: .32s;
$h-hover-opacity: 0.7;
$h-hover-duration: .2s;
```
⚠️ Если меняете размеры 'гамбургера', то указывайте размеры в одинаковых единицах измерения.
## 🔰 Темы SCSS
Чтобы убрать при ненужные стили меню, закоментируйте или уберите элемент списка из файла `hamburger.scss`.
```scss
$hamburger-themes: (
 boring,
 collapse,
 emphatic,
 spin,
 spring,
 squeeze,
 elastic,
 slider-r, slider-l, stand-r, stand-l,
 spin-r, spin-l,
 arrow-r, arrow-l, arrow-t, arrow-b,
 arrow-alt-r, arrow-alt-l, arrow-alt-t, arrow-alt-b,
 arrow-spin-r, arrow-spin-l, arrow-spin-t, arrow-spin-b,
 plus-boring,
 plus-vanish,
 minus-boring,
 minus-vanish,
);
```