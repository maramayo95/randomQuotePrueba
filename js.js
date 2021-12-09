const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");

const quoteName = document.querySelector(".name")

const soundBtn = document.querySelector(".sound")

const copyBtn = document.querySelector(".copy")

const twitterBtn = document.querySelector(".twitter")

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote.."

    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data => { 
      console.log(data)
      quoteText.innerText = data.content;
      quoteName.innerText = data.author;
      quoteBtn.innerText = "New Quote"
      quoteBtn.classList.remove("loading");
    })
}

quoteBtn.addEventListener("click",randomQuote)

soundBtn.addEventListener("click", ()=> {
 let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${quoteName.innerText}` );
 speechSynthesis.speak(utterance);

});


copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText)
    
})


twitterBtn.addEventListener("click", ()=> 
{
    let tweetUrl = `https://twitter.com/intent/twwt?url=${quoteText.innerText}`
    window.open(tweetUrl, "_blank");
})