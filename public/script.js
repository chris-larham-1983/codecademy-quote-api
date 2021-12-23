const fetchAllButton = document.getElementById('fetch-quotes');
const fetchRandomButton = document.getElementById('fetch-random');
const fetchByAuthorButton = document.getElementById('fetch-by-author');
const deleteByIdButton = document.getElementById('delete-by-id');

const quoteContainer = document.getElementById('quote-container');
const idInput = document.querySelector('#deletionId');
const authorInput = document.querySelector('#author');

const resetQuotes = () => {
  quoteContainer.innerHTML = '';
}

const renderError = response => {
  quoteContainer.innerHTML = `<p class="centered-text">Your request returned an error from the server: </p>
                              <p class="centered-text">Code: ${response.status}</p>
                              <p class="centered-text">Details: ${response.statusText}</p>`;
}

const renderQuotes = (quotes = []) => {
  resetQuotes();
  if (quotes.length > 0) {
    quotes.forEach(quote => {
      const newQuote = document.createElement('div');
      newQuote.className = 'single-quote';
      newQuote.innerHTML = `Quote id: ${quote.id}. <blockquote class="quote-text">${quote.quote}</blockquote>
                            <div class="attribution">- ${quote.person}</div>
                            <div class="context">~ ${quote.context}</div>
                            <div class="year">* ${quote.year}</div>`;
      quoteContainer.appendChild(newQuote);
    });
  } else {
    quoteContainer.innerHTML = '<p class="centered-text">Your request returned no quotes.</p>';
  }
}

const renderDeletionMessage = () => { //function that renders a deletion message when a quote has been successfully deleted
  resetQuotes(); //reset the innerHTML of the 'quoteContainer'
  idInput.value = ""; //clear the 'idInput' <input> element
  const deletedQuotation = document.createElement('div'); //create a new <div> element
  deletedQuotation.innerHTML = `
                <h3 class="congratulations">Congrats, the quote was deleted!</h3>
                <p class="centered-text">Click the 'Fetch all Quotes' button above to see the updated list of quotes.</p>
                `; //set the innerHTML of the 'deletedQuotation' element
  quoteContainer.appendChild(deletedQuotation);
}

fetchAllButton.addEventListener('click', () => {
  fetch('/api/quotes')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      renderError(response);
    }
  })
  .then(response => {
    renderQuotes(response.quotes);
  });
});

fetchRandomButton.addEventListener('click', () => {
  fetch('/api/quotes/random')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      renderError(response);
    }
  })
  .then(response => {
    renderQuotes([response.quote]);
  });
});

fetchByAuthorButton.addEventListener('click', () => {
  const author = authorInput.value.trim();
  fetch(`/api/quotes?person=${author}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      renderError(response);
    }
  })
  .then(response => {
    authorInput.value = ""; //clear the 'authorInput' <input> element
    renderQuotes(response.quotes);
  });
});

deleteByIdButton.addEventListener('click', () => {
  const id = idInput.value.trim();
  if(id) { //if an id has been entered into the 'deletionId' <input> element
    fetch(`/api/quotes/${id}`, {
      method: 'DELETE'
    })
        .then(response => {
          if(response.ok) {
            renderDeletionMessage();
          } else {
            renderError(response);
          }
        });
  }
});