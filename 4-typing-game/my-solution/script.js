console.log("script loarded")

const quotes = [
    "The good thing about science is that it's true whether or not you believe in it.",
    "Knowing how to think empowers you far beyond those who know only what to think.",
    "The universe is under no obligation to make sense to you.",
    "Curious that we spend more time congratulating people who have succeeded than encouraging people who have not.",
    "Science is a way of equipping yourself with the tools to interpret what happens in front of you.",
    "We are stardust brought to life, then empowered by the universe to figure itself out—and we have only just begun.",
    "There is no greater education than one that is self-driven.",
    "When scientifically investigating the natural world, the only thing worse than a blind believer is a seeing denier.",
    "Creativity is seeing what everyone else sees, but then thinking a new thought that has never been thought before and expressing it somehow.",
    "If you want to assert a truth, first make sure it's not just an opinion that you desperately want to be true."
  ];

let words = [];
let wordIndex = 0;
let startTime = Date.now();

const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
const startElement = document.getElementById('start');

document.getElementById('start').addEventListener('click', function () {
    console.log('clicjed')
    const quoteIndex = Math.floor(Math.random() * quotes.length);
	const quote = quotes[quoteIndex];

    words = quote.split(' ');
    wordIndex = 0;

    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    quoteElement.innerHTML = spanWords.join('');
    quoteElement.childNodes[0].className = 'highlight';
    messageElement.innerText = '';

    typedValueElement.value = '';
    typedValueElement.focus();

    startTime = new Date().getTime();
})

typedValueElement.addEventListener('input', () => {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length - 1) {
        console.log("completed")
        const elapsedTime = new Date().getTime() - startTime;
        const message = `Congratulations! You finished in ${elapsedTime / 1000} seconds`;
        messageElement.innerText = message;
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        typedValueElement.value = '';
        wordIndex++;
        for (const wordElement of quoteElement.childNodes) {
            wordElement.className = '';
        }
        quoteElement.childNodes[wordIndex].className = 'highlight';

    }   else if (currentWord.startsWith(typedValue)) {
        typedValueElement.className = '';
    }   else {
        typedValueElement.className = 'error'
    }
})