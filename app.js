document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("telegram-form");
    if (!form) {
        console.error('Форма не найдена в DOM');
        return;
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        if (!submitBtn) {
            console.error('Кнопка отправки не найдена');
            return;
        }

        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        
        const botToken = "8187622465:AAGIhZQMJwnO-A2Weup8dSsvgxcjsWEO6QI";
        const chatId = "7393443572";
        const text = `Новая заявка!\nИмя: ${form.name.value}\nТелефон: ${form.phone.value}\nСообщение: ${form.message.value}`;
        
        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`);
            
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            
            alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
            form.reset();
        } catch (error) {
            console.error('Ошибка:', error);
            alert("Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.");
        } finally {
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
