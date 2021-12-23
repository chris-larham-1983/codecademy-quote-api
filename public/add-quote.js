const submitButton = document.getElementById('submit-quote');
const newQuoteContainer = document.getElementById('new-quote');

const quoteInput = document.querySelector('#quote');
const personInput = document.querySelector('#person');
const contextInput = document.querySelector('#context');
const yearInput = document.querySelector('#year');
const errorMessage = document.querySelector('#errorMessage');

submitButton.addEventListener('click', () => {
  const quote = quoteInput.value.trim();
  const person = personInput.value.trim();
  const context = contextInput.value.trim();
  const year = yearInput.value.trim();

  if(quote && person && context && year) { //if the trimmed input values evaluate to 'truthy'
    errorMessage.style.display = "none"; //hide the 'errorMessage' <p> element
    newQuoteContainer.style.display = "block"; //display the 'newQuoteContainer' <div> element
    quoteInput.value = ""; //clear the 'quoteInput' <input> text
    personInput.value = ""; //clear the 'personInput' <input> text
    contextInput.value = ""; //clear the 'contextInput' <input> text
    yearInput.value = ""; //clear the 'yearInput' <input> text
    fetch(`/api/quotes?quote=${quote}&person=${person}&context=${context}&year=${year}`, {
      method: 'POST',
    })
        .then(response => response.json())
        .then(({quote}) => {
          const newQuote = document.createElement('div');
          newQuote.innerHTML = `
            <h3 class="congratulations">Congrats, your quote was added!</h3>
            <div class="quote-text">${quote.quote}</div>
            <div class="attribution">- ${quote.person}</div>
            <div class="context">~ ${quote.context}</div>
            <div class="year">* ${year}</div>
            <p class="centered-text">Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
            `;
          newQuoteContainer.appendChild(newQuote);
        });
  } else {
    errorMessage.style.display = "block"; //display the 'errorMessage' <p> element
    newQuoteContainer.style.display = "none"; //hide the 'newQuoteContainer' <div> element
  }
});