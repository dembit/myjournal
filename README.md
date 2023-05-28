# Мой личный дневник.

Он состоит из приветствия, авторизации(Пользователей можно создать сколько угодно.Смотрит из localStorage по уникальности name и email), а также работа с записями
(добавление, редактирование, отображение, фильтрация.)

### Для чего этот проект

- Продемонтрировать знания в создании собственного сборщика(webpack).
- Cоздание небольшого uikit (переиспользоввание компонент).
- Построение архитектуры.
- Работа с React, Localstorage и показ уровня кода.

### Реализацию можно увидеть здесь:

https://dembit.github.io/myjournal/

### Custom React Typescript App.

(Webpack, Eslint, React, Typescript, Mobx)

### Run project on http://localhost:3000

yarn start

### Eslint command

yarn lint

### Build project

yarn predeploy

### Авторизация состоит из несколько этапов.

При первоначальном входе мы проверяем авторизован пользователь или нет и в зависимости от этого устанавливаем начальные данные из localStorage или данные по дефолту. (В компоненте ModalLoginForm функция getInitListNotes())

При создании store(class observer Mobx) в файле store.js также используется функция getInitListNotes(), чтобы инициализировать данные.

Custom HOOK AddNotesToThelocalStorage для отслеживания изменений данных и добaвления текущего состояния в localstorage. Т.е он постоянно следит заизменениями из mobx state и добавляет их в localstorage

Создан HOC WithCheckAuth для проверки авторизации и отображении компонент в зависимости от состояния авторизации
