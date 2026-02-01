const hamburgerBtn = document.getElementById('hamburger-btn');
const navbarMenu = document.getElementById('navbar-menu');

hamburgerBtn.addEventListener('click', () => {
    // Переключаем активное состояние кнопки
    hamburgerBtn.classList.toggle('active');
    
    // Если меню сейчас скрыто (есть класс hidden)
    if (navbarMenu.classList.contains('hidden')) {
        // Сначала убираем скрытие
        navbarMenu.classList.remove('hidden');
        // Затем добавляем активное состояние (запустится анимация появления)
        setTimeout(() => {
            navbarMenu.classList.add('active');
        }, 10);
    } else {
        // Если меню открыто - убираем активное состояние (запустится анимация закрытия)
        navbarMenu.classList.remove('active');
        // Ждём окончания анимации, затем скрываем
        setTimeout(() => {
            navbarMenu.classList.add('hidden');
        }, 500); // 500ms = длительность transition в CSS
    }
});


const navProfile = document.getElementById('profile');
const profileSide = document.querySelector('.profile-side');

navProfile.addEventListener('click', () => {
    if (profileSide.classList.contains('hidden')) {
        profileSide.classList.remove('hidden');
        setTimeout(() => {
            profileSide.classList.add('active');
        }, 10);
    } else {
        profileSide.classList.remove('active');
        setTimeout(() => {
            profileSide.classList.add('hidden');
        }, 500);
    }
});