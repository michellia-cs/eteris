const quizData =  [
    {
        question: "Apa yang sedang kamu butuhkan?",
        a: "Penolak nyamuk",
        b: "Mengurangi rasa gatal pada kulit",
        c: "Pengharum ruangan",
        d: "Penenang pikiran / memperbaiki kualitas tidur",
        e: "Alasan kesehatan lainnya",
        correct: "a",
    }










];

const quiz= document.getElementById('quiz')
const answerEls= cocument.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text= document.getElementById('a_text')




let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectAnswer() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    let answerEls
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) { 
    if (answer === quizData[currentQuiz].correct) {
        score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML =
        <h2 You answered ${score}/${quizData.length} questions correctly></h2>

        <button onclick="location.reload()">Reload</button>
    }
})