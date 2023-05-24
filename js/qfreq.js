
const questions = document.querySelectorAll(".question-faq")
console.log(questions)
// const answers = document.querySelectorAll(".answer-faq")
// console.log(answers)
// const parrafos = document.querySelectorAll(".answer-faq p")
// console.log(parrafos)

questions.forEach(question => {
    question.addEventListener('click', (event) => {

        questions.forEach((item) => {
            item.classList.remove("answer-faq-active")
        });

        question.nextElementSibling.classList.toggle("answer-faq-active")
    })

})


