const updateButton = document.getElementById('update-quote');
const newQuoteContainer = document.getElementById('new-quote');
const idInput = document.querySelector("#id");
const quoteInput = document.querySelector("#quote");
const personInput = document.querySelector("#person");
const contextInput = document.querySelector("#context");
const yearInput = document.querySelector("#year");
const errorMessage = document.querySelector("#errorMessage");

updateButton.addEventListener('click', () => {
    const id = idInput.value.trim();
    const quote = quoteInput.value.trim();
    const person = personInput.value.trim();
    const context = contextInput.value.trim();
    const year = yearInput.value.trim();

    if(id && quote && person && context && year) { //if the trimmed input values evaluate to 'truthy'
        errorMessage.style.display = "none"; //hide the 'errorMessage' <p> element
        newQuoteContainer.style.display = "block"; //display the 'newQuoteContainer' <div> element
        idInput.value = ""; //reset the 'idInput' value
        quoteInput.value = ""; //reset the 'quoteInput' value
        personInput.value = ""; //reset the 'personInput' value
        contextInput.value = ""; //reset the 'contextInput' value
        yearInput.value = ""; //reset the 'yearInput' value
        fetch(`/api/quotes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                quote: quote,
                person: person,
                context: context,
                year: year
            })
        })
        .then(response => response.json())
            .then(({quote}) => {
                newQuoteContainer.innerHTML = ""; //clear the 'newQuoteContainer' <div> element
                const updatedQuote = document.createElement('div');
                updatedQuote.innerHTML = `
                    <h3 class="congratulations">Congrats, the quote was updated!</h3>
                    Quote id: ${quote.id}. <blockquote class="quote-text">${quote.quote}</blockquote>
                    <div class="attribution">- ${quote.person}</div>
                    <div class="context">~ ${quote.context}</div>
                    <div class="year">* ${quote.year}</div>
                    <p class="centered-text">Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
                    `;
                newQuoteContainer.appendChild(updatedQuote); //add the updated quote details to the 'newQuoteContainer' <div> element
            });
    } else {
        errorMessage.style.display = "block"; //display the 'errorMessage' <p> element
        newQuoteContainer.style.display = "none"; //hide the 'newQuoteContainer' <div> element
    }
});