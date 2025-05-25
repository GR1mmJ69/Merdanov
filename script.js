document.addEventListener('DOMContentLoaded', function() {
    // Элементы
    const sun = document.getElementById('sun');
    const planetSections = document.querySelectorAll('.planet-section');
    const scrollDown = document.querySelector('.scroll-down');
    
    // Параллакс для Солнца
    window.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        sun.style.left = `${20 + x * 10}%`;
        sun.style.top = `${50 + y * 5}%`;
    });
    
    // Анимация пульсации Солнца
    setInterval(() => {
        sun.style.animation = 'sunPulse 3s infinite';
    }, 3000);
    
    // Прокрутка вниз
    scrollDown.addEventListener('click', function() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
    
    // Анимация появления секций
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + window.innerHeight;
        
        planetSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition > sectionTop + sectionHeight * 0.3) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
    particlesJS.load('particles-js', 'particles-config.json', function() {
  console.log('Космический фон загружен!');
});
    // Изначально скрываем секции
    planetSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = `translateY(${index % 2 === 0 ? '50px' : '-50px'})`;
        section.style.transition = 'opacity 0.7s, transform 0.7s';
        
        // Устанавливаем фоновые изображения для планет
        const planetId = section.id;
        const planetImg = document.getElementById(`${planetId}-img`);
        if (planetImg) {
            planetImg.style.backgroundImage = `url(images/${planetId}.png)`;
        }
    });
    
    // Параллакс при скролле
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const stars = document.querySelector('.stars');
        
        stars.style.transform = `translateY(${scrollY * 0.3}px)`;
    });
    
    // Эффект при наведении на планету
    planetSections.forEach(section => {
        const planetImg = section.querySelector('.planet-img');
        
        section.addEventListener('mouseenter', () => {
            planetImg.style.transform = 'scale(1.1) rotate(10deg)';
        });
        
        section.addEventListener('mouseleave', () => {
            planetImg.style.transform = 'scale(1) rotate(0)';
        });
    });
});