// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only prevent default if the href is not just "#"
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for header height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Đã sửa lại phần slider cho tại sao lựa chọn MISOUL
    const slider = document.querySelector('.features-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;
    const totalSlides = document.querySelectorAll('.feature-slide').length;

    function updateSlider() {
        slider.scrollTo({
            left: slider.offsetWidth * currentIndex,
            behavior: 'smooth'
        });

        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    // Product showcase gallery navigation
    const showcaseItems = document.querySelectorAll('.showcase-item');
    const navDots = document.querySelectorAll('.nav-dot');

    const gallery = document.querySelector('.showcase-gallery');
    const galleryDots = document.querySelectorAll('.nav-dot');

    galleryDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            gallery.scrollTo({
                left: index * gallery.offsetWidth,
                behavior: 'smooth'
            });

            galleryDots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            // Update active class
            navDots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to the corresponding item
            if (showcaseItems[index]) {
                showcaseItems[index].scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'start'
                });
            }
        });
    });
    
    // Monitor showcase scrolling to update active dot
    const colorDots = document.querySelectorAll('.color-dot');
const productImages = document.querySelectorAll('.colors-showcase img');

// Remove existing click behavior
colorDots.forEach(dot => {
  dot.addEventListener('mouseenter', () => {
    const index = Array.from(colorDots).indexOf(dot);

    productImages.forEach((img, i) => {
      if (i === index) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });
  });

  dot.addEventListener('mouseleave', () => {
    productImages.forEach(img => img.classList.remove('active'));
  });
});

    
    // Product color selector
    

    
   
    
    // Mobile menu toggle functionality (assuming there's a mobile menu button added later)
    const mobileMenuButton = document.querySelector('.mobile-menu-btn');
    const mainMenu = document.querySelector('.main-menu');
    
    if (mobileMenuButton && mainMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mainMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-content, .showcase-item, .plan-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    .feature-content, .showcase-item, .plan-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .feature-content.animate, .showcase-item.animate, .plan-card.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .feature-content:nth-child(odd).animate {
        animation: fadeInLeft 0.6s ease forwards;
    }
    
    .feature-content:nth-child(even).animate {
        animation: fadeInRight 0.6s ease forwards;
    }
    
    @keyframes fadeInLeft {
        0% {
            opacity: 0;
            transform: translateX(-30px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInRight {
        0% {
            opacity: 0;
            transform: translateX(30px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

document.head.appendChild(style);