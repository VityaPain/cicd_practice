# Используем официальный образ Node.js
FROM node:20

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код в контейнер
COPY . .

# Собираем приложение для продакшена
RUN npm run build

# Устанавливаем сервер для раздачи статики (serve)
RUN npm install -g serve

# Команда для запуска приложения
CMD ["serve", "-s", "build"]

# Открываем порт 3000 (по умолчанию serve использует этот порт)
EXPOSE 3000
