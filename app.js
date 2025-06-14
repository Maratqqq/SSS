document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("telegram-form");
    
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        // Показываем индикатор загрузки
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        
        const botToken = "8187622465:AAGIhZQMJwnO-A2Weup8dSsvgxcjsWEO6QI";
        const chatId = "7393443572";
        
        // Явно получаем значения полей по их ID
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        const text = `Новая заявка!\nИмя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`;
        
        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`);
            
            if (response.ok) {
                alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
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

    // Обработка бургер-меню
    const burgerButton = document.getElementById('burger');
    const burgerMenu = document.getElementById('menu');
    
    if (burgerButton && burgerMenu) {
        burgerButton.addEventListener('click', function() {
            burgerMenu.classList.toggle('disp');
        });
    }

    // Обработка FAQ
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });
});
