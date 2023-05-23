// JS DEL FAQ
const questions = document.querySelectorAll(".question-faq")
console.log(questions)
// const answers = document.querySelectorAll(".answer-faq")
// console.log(answers)
// const parrafos = document.querySelectorAll(".answer-faq p")
// console.log(parrafos)

questions.forEach( question => {
question.addEventListener('click', (event) => {

    questions.forEach( (item) => {
        item.classList.remove("answer-faq-active")
        });

    question.nextElementSibling.classList.toggle("answer-faq-active")
    })
    
    })


// JS DEL INDEX 

    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }
 