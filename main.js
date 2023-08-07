const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  const question = faq.querySelector('.faq-question');
  const answer = faq.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    if (!faq.classList.contains('active')) {
      faqs.forEach((otherFaq) => {
        otherFaq.classList.remove('active');
      });
    }

    faq.classList.toggle('active');
  });
});

const illustrationElement = document.querySelector('.women-illustration');

window.addEventListener('resize', () => {
  if (window.innerWidth <= 767) {
    illustrationElement.src = 'images/illustration-woman-online-mobile.svg';
  } else {
    illustrationElement.src = 'images/illustration-woman-online-desktop.svg';
  }
});
