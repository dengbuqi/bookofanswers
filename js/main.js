const languageText = {
    en: {
        titleText: 'The Book of Answers',
        buttonText: 'Get Answer',
        answerText: `When you're uncertain, \n ask the Book of Answers...`
    },
    zh: {
        titleText: '答案之书',
        buttonText: '获取答案',
        answerText: `如果你不确定， \n 请问答案之书...`
    }
};


let currentLanguage = 'zh';


function getRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex][currentLanguage];
}

function updateText() {
    const content = document.getElementById('content');
    const button = document.getElementById('answerButton');h1Title
    const title = document.getElementById('h1Title');

    content.textContent = languageText[currentLanguage].answerText;
    button.textContent = languageText[currentLanguage].buttonText;
    title.textContent = languageText[currentLanguage].titleText;

}

function changeLanguage() {
    const languageSelector = document.getElementById('language');
    currentLanguage = languageSelector.value;
    updateText();
}

document.addEventListener('DOMContentLoaded', function () {
    updateText();
    const content = document.getElementById('content');
    const button = document.getElementById('answerButton');
    
    button.addEventListener('click', function () {
        const answer = getRandomAnswer();
        content.textContent = `🔮 : ${answer}`;
    });
});