# Инструкция для нового диалога по Astralia

Работаем с проектом `/Users/kayuklfg/code/astralia`.

Это статичный кликабельный прототип web app `ASTRALIA by Angelina Pars`: RU/EN, каталог модулей, карточка продукта, checkout, промокоды, результат, PDF-заглушка, профиль, партнерка и черновик админки.

## Ссылки

- Локально: `http://127.0.0.1:4173/`
- GitHub: `https://github.com/leofftheslayer1326-create/astralia`
- GitHub Pages: `https://leofftheslayer1326-create.github.io/astralia/`

## Запуск

```bash
cd /Users/kayuklfg/code/astralia
python3 -m http.server 4173
```

## Главные файлы

- `/Users/kayuklfg/code/astralia/index.html` — структура экранов.
- `/Users/kayuklfg/code/astralia/assets/styles.css` — весь визуал.
- `/Users/kayuklfg/code/astralia/assets/app.js` — данные модулей, RU/EN, маршруты, промокоды.
- `/Users/kayuklfg/code/astralia/docs/BRANDBOOK.md` — краткие правила брендбука.
- `/Users/kayuklfg/code/astralia/assets/brandbook/` — 10 слайдов брендбука.
- `/Users/kayuklfg/code/astralia/assets/module-images/` — изображения модулей.

## Визуальное направление

Держать строго по брендбуку:

- темный космос;
- шампанское золото;
- тонкая орбитальная геометрия;
- чистые карточки;
- мягкое свечение;
- спокойная премиальная подача;
- иконки в круговых орбитальных рамках.

Палитра:

- `#07152E` Deep Space Navy;
- `#0B1020` Black Blue;
- `#D8BC84` Champagne Gold;
- `#F1E2B8` Soft Gold;
- `#5D4A86` Mystic Violet;
- `#7DA6D9` Celestial Blue.

Шрифты:

- заголовки: `Cormorant Garamond`;
- текст, кнопки, цены: `Manrope`;
- цифры в ценах и статистике должны быть ровными, tabular nums.

## Важно

- Не использовать кресты, религиозные символы, кислотные цвета, мультяшные иконки и перегруз магией.
- Основной логотип: монограмма `A` с орбитой и звездой.
- Поиск в каталоге уже убрали, остаются категории.
- Промокоды в демо: `ASTROFREE` и `STAR15`.
- Реальные оплаты, базы и админку не подключать без отдельной команды.
- Push/deploy делать только если Андрей явно попросил.

## Что доделывать дальше

1. Довести мобильную версию после каждого крупного визуального изменения.
2. Проверить все экраны: главная, каталог, карточка, checkout, результат, профиль, партнерка.
3. Если клиенту нужно отправить ссылку, обновить GitHub Pages после проверки.
4. Следующий боевой этап после согласования демо: Laravel + MySQL + YooKassa + админка + генерация PDF.
