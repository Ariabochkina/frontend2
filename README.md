# Frontend2 (Business Panel) for Balance

Веб-интерфейс для бизнес-пользователя в проекте **Balance**: редактор рецептов и матрицы влияния ингредиентов на вкусовые характеристики.

Этот репозиторий — клиентская часть к backend-проекту `balance`, где бизнес:
- управляет рецептами;
- задает базовые ингредиенты;
- настраивает коэффициенты влияния ингредиентов на вкусы.

Связанные репозитории проекта `Balance`:
- backend: [Shfdis/balance](https://github.com/Shfdis/balance)
- frontend (опрос для клиента): [Ariabochkina/frontend1](https://github.com/Ariabochkina/frontend1)
- frontend (бизнес-панель, этот репозиторий): `frontend2`

---

## Что делает приложение

Приложение реализует flow из двух рабочих экранов:

1. **Вход (`/login`)**
   - ввод пароля;
   - проверка доступа через `GET /recipes?password=...`;
   - переход в редактор рецептов.

2. **Редактор рецептов (`/home`)**
   - добавление и удаление рецептов;
   - редактирование названия рецепта;
   - управление списком вкусов;
   - управление списком ингредиентов и их базовых значений;
   - отправка обновленного набора рецептов на backend (`POST /recipes?password=...`).

3. **Редактор коэффициентов (`/coef`)**
   - настройка соответствия `ингредиент -> список вкусов + коэффициенты влияния`;
   - добавление/удаление коэффициентных связей;
   - сохранение изменений через backend API.

---

## Моя зона ответственности в этом проекте

- разработка структуры бизнес-панели на React;
- декомпозиция на переиспользуемые компоненты (`Recipe`, `Taste`, `Ingredients`, `RecipeCoefs`, `Coeficients`, `TasteCoefs`);
- реализация CRUD-сценариев на уровне UI для рецептов, вкусов, ингредиентов и коэффициентов;
- интеграция с API backend-сервиса (`GET/POST /recipes`);
- маршрутизация по этапам работы менеджера (`login -> home -> coef`);
- базовая визуальная тема интерфейса (кнопки, поля, layout, состояния hover).

---

## Технологии

- React (Create React App)
- React Router
- JavaScript (class components)
- Fetch API
- CSS

---

## Структура проекта

```text
src/
├── App.js                    # маршруты /login, /home, /coef
├── Pages/
│   ├── loginPage.js          # экран входа
│   ├── Home.js               # экран редактирования рецептов
│   └── Coef.js               # экран редактирования коэффициентов
├── Components/
│   ├── Recipe.js
│   ├── Taste.js
│   ├── Ingredients.js
│   ├── RecipeCoefs.js
│   ├── Coeficients.js
│   └── TasteCoefs.js
└── index.css                 # базовые стили панели
```

---

## Формат данных (на уровне frontend)

Ожидаемая модель рецепта:

```json
{
  "id": 0,
  "name": "Latte",
  "tastes": [
    { "id": 0, "name": "sweetness" }
  ],
  "default_ingredients": [
    { "id": 0, "name": "milk", "value": 200 }
  ],
  "change_coefficients": [
    {
      "id": 0,
      "name": "milk",
      "tastes": [
        { "id": 0, "name": "sweetness", "value": 0.05 }
      ]
    }
  ]
}
```

---

## Локальный запуск

### 1) Установить зависимости

```bash
npm install
```

### 2) Запустить frontend

```bash
npm start
```

По умолчанию приложение откроется на `http://localhost:3000`.

### 3) Запустить backend

Frontend ожидает API по адресу:

```text
http://127.0.0.1:5000
```

Если backend доступен по другому адресу, обновите `APIUrl` в `src/App.js`.