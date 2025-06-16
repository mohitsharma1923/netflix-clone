
  
  document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq__container__question");

    questions.forEach((question) => {
      question.addEventListener("click", function () {
        const answer = this.nextElementSibling;


        this.classList.toggle("faq__container__question--active");

        if (answer.style.display === "block") {
          answer.style.display = "none";
        } else {
          answer.style.display = "block";
        }
      });
    });
  });

  function scrollLeft() {
  const container = document.querySelector('.main__container__sub__videos');
  container.scrollBy({
    left: -300, // Scroll 300px to the left
    behavior: 'smooth',
  });
}

function scrollRight() {
  const container = document.querySelector('.main__container__sub__videos');
  container.scrollBy({
    left: 300, // Scroll 300px to the right
    behavior: 'smooth',
  });
}


