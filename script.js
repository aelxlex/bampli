document.addEventListener('DOMContentLoaded', () => {
    
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            if(icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                const icon = mobileMenu.querySelector('i');
                if(icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    const heroSlides = document.querySelectorAll('.bg-slide');
    if (heroSlides.length > 0) {
        let heroIndex = 0;
        setInterval(() => {
            heroSlides[heroIndex].classList.remove('active');
            heroIndex = (heroIndex + 1) % heroSlides.length;
            heroSlides[heroIndex].classList.add('active');
        }, 5000);
    }

});

function scrollToSection(event, sectionId) {
    if (event) event.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else if (sectionId === 'inicio') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

let logoIndex = 0;
function changeSlide(step) {
    const slider = document.getElementById('logoSlider');
    if (!slider) return;
    
    const total = slider.children.length;
    logoIndex = (logoIndex + step + total) % total;
    
    const percentage = logoIndex * 100;
    slider.style.transform = `translateX(-${percentage}%)`;
}

const menuLinks = document.querySelectorAll('.nav-menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navList = document.getElementById('nav-list');
        if (navList) {
            navList.classList.remove('active');
        }

        const icon = document.querySelector('#mobile-menu i');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        }
    });
});