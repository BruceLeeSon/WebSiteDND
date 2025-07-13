document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll('.fade');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
            else entry.target.classList.remove('visible');
        });
    }, {threshold: 0.1});
    faders.forEach(fader => observer.observe(fader));

    document.querySelector('[data-copyright-year]').textContent = new Date().getFullYear();

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    function applyTheme(theme) {
        if (theme === 'light') body.classList.add('light');
        else body.classList.remove('light');
    }

    function saveTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    function loadTheme() {
        return localStorage.getItem('theme') || 'dark';
    }

    let currentTheme = loadTheme();
    applyTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        currentTheme = (currentTheme === 'dark') ? 'light' : 'dark';
        applyTheme(currentTheme);
        saveTheme(currentTheme);
    });

    // Карточки
    const cards = document.querySelectorAll('.card');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupImage = document.getElementById('popup-image');
    const popupText = document.getElementById('popup-text');
    const popupClose = document.getElementById('popup-close');

    const cardData = [
        {
            title: 'Luxury Manicure',
            img: 'https://s0.rbk.ru/v6_top_pics/media/img/4/23/756252253873234.jpg',
            desc: 'Revitalize your hands with premium polishes, massage, and art.'
        },
        {
            title: 'Deluxe Pedicure',
            img: 'https://i.pinimg.com/originals/0c/e1/4e/0ce14e259197763cb8701a92afdc4eee.jpg',
            desc: 'Indulge your feet in our signature pedicure with golden oils.'
        },
        {
            title: 'Waxing',
            img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6fde5e35202673.5713a5df069be.png',
            desc: 'Smooth and confident with gentle waxing services in a soothing environment.'
        }
    ];

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const i = card.dataset.index;
            popupTitle.textContent = cardData[i].title;
            popupImage.src = cardData[i].img;
            popupImage.alt = cardData[i].title;
            popupText.textContent = cardData[i].desc;
            popup.classList.remove('hidden');
        });
    });

    popupClose.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    popup.addEventListener('click', e => {
        if (e.target === popup) popup.classList.add('hidden');
    });
});