const FETCH_URL = 'http://quotes.stormconsultancy.co.uk/random.json'
const FETCH_INIT = {method: 'GET'}
const TWITTER_LINK = 'https://twitter.com/intent/tweet?text='

// Get quote and author elements
const messageText = document.querySelector('.message')
const authorText = document.querySelector('.author')

// Get CTA buttons
const generateButton = document.querySelector('#generate')
const tweetButton = document.querySelector('#tweet-btn')

// Function that displays the quote on the screen
const displayQuote = ({quote, author}) => {
  messageText.innerHTML = quote
  authorText.innerHTML = `- ${author}`
  tweetButton.href = `${TWITTER_LINK + encodeURIComponent(quote)}`
}

// Fetch new quote from API
const generateNewQuote = (displayer) => {
  fetch(FETCH_URL, FETCH_INIT).then((res) => {
    res.json().then(displayer)
  })
}

generateButton.addEventListener('click', (e) => {
  generateNewQuote(displayQuote)
})

// Get first quote
generateNewQuote(displayQuote)
