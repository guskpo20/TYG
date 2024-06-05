// https://www.linkedin.com/in/gustavo-keymetlian/
document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
  
    function showSlide(index) {
      carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function showNextSlide() {
      currentIndex++;
      if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
      }
      showSlide(currentIndex);
    }
  
    function showPrevSlide() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
      }
      showSlide(currentIndex);
    }
  
    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);
});

/* var form = document.getElementById('contact');
var submit = form.querySelector('[name="submit"]');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // evitar envío múltiple
    if (submit.value !== 'Send')
        return;

    var valid = true;
    var inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(function(input) {
        input.classList.remove('invalid');
        if (!input.value) {
            input.classList.add('invalid');
            valid = false;
        }
    });

    if (!valid) {
        form.style.left = '-3em';
        setTimeout(function() {
            form.style.left = '3em';
            setTimeout(function() {
                form.style.left = '0';
            }, 100);
        }, 50);
    } else {
        submit.value = 'Enviando...';
        submit.style.boxShadow = '0 0 200em 200em rgba(225, 225, 225, 0.6)';
        submit.style.backgroundColor = '#ccc';

        var labels = form.querySelectorAll('label');
        labels.forEach(function(label) {
            label.style.left = '100%';
            label.style.opacity = '0';
        });

        setTimeout(function() {
            submit.value = 'Gracias :)';
            submit.style.boxShadow = 'none';

            setTimeout(function() {
                // paso 3: resetear
                inputs.forEach(function(input) {
                    input.value = '';
                });
                labels.forEach(function(label) {
                    label.style.left = '0';
                    label.style.opacity = '1';
                });
                submit.value = 'Enviar';
                submit.style.backgroundColor = '';
            }, 2000);
        }, 500);
    }
}); */
