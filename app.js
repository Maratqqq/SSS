document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("telegram-form");
    // Этот код гарантирует, что форма будет найдена и готова к использованию 
    // только после полной загрузки страницы
    // а затем находит форму с идентификатором telegram-form
    //  Это нужно, чтобы избежать ошибок при работе с формой
    form.addEventListener("submit", async (e) => {
        e.preventDefault(); //Это обработчикотправки формы.
        
        // Показываем индикатор загрузки пользователю при нажатии кнопки отправить
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        
        const botToken = "8187622465:AAGIhZQMJwnO-A2Weup8dSsvgxcjsWEO6QI";
        const chatId = "7393443572";
        const text = `Новая заявка!\nИмя: ${form.name.value}\nТелефон: ${form.phone.value}\nСообщение: ${form.message.value}`; //Этот код собирает данные из формы и формирует сообщение для отправки в Telegram. 
        
        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`); // отпровляет данные с формы с данными из формы.
            
            if (response.ok) {
                alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время."); // Если форма успешно отправлена, пользователю показывается сообщение об успехе,
                form.reset();
            } else {
                throw new Error('Ошибка при отправке');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert("Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.");
        } finally {
            // Восстанавливаем кнопку в исходное состояние
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Обработка бургер-меню
    const burgerButton = document.getElementById('burger');
    const burgerMenu = document.getElementById('menu');
    
    if (burgerButton && burgerMenu) {
        burgerButton.addEventListener('click', function() {
            burgerMenu.classList.toggle('disp');
        });
    }
}); // Добавляем обработчик клика на кнопку когда пользователь нажимает на кнопку выполняется эта функция addEventListener

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    item.classList.toggle('active');
  });
}); //Мы находим все элементы на странице с классом faq-question этот код мы использовали для раскрытия и закрытия наших ответов в секции вопросов