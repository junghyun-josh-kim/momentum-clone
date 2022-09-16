const quotes = [
    {
        quote: "The higher the buildings, the lower the morals.",
        author: "Noel Coward",
    },
    {
        quote: "When you have faults, do not fear to abandon them.",
        author: "Confucius",
    },
    {
        quote: "Tomorrow hopes we have learned something from yesterday.",
        author: "John Wayne",
    },
    {
        quote: "Why be a man when you can be a success?",
        author: "Bertolt Brecht",
    },
    {
        quote: "There is no 'i' in team but there is in win.",
        author: "Michael Jordan",
    },
    {
        quote: "Though the sun is gone, I have a light.",
        author: "Kurt Cobain",
    },
    {
        quote: "Passion governs, and she never governs wisely.",
        author: "Benjamin Franklin",
    },
    {
        quote: "I believe that one of life's greatest risks is never daring to risk.",
        author: "Oprah Winfrey",
    },
    {
        quote: "Risk comes from not knowing what you're doing.",
        author: "Warren Buffett",
    },
    {
        quote: "Youth is easily deceived because it is quick to hope.",
        author: "Aristotle",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;