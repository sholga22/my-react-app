// Преобразование данных в JSON
const jsonData = JSON.stringify(data);

// Отправка запроса POST
fetch('/api/items', { // Замените '/api/items' на вашу точку API
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: jsonData
})
    .then(response => {
        if (response.ok) {
            // Обработка успешного ответа (например, отображение сообщения об успехе)
            console.log('Данные успешно отправлены');
            // Можно обновить форму или перенаправить пользователя
        } else {
            // Обработка ошибки (например, отображение сообщения об ошибке)
            console.error('Ошибка при отправке данных:', response.status);
        }
    })
    .catch(error => {
        // Обработка исключений
        console.error('Произошла ошибка:', error);
    });
});