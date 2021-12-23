# Express.js Quote API

## Table of Contents:

* [General Information](#general-information)
* [Project Screenshots](#project-screenshots)
* [Technologies](#technologies)
* [Using the App](#using-the-app)

***

## General Information

This is my solution to the **Codecademy** challenge project entitled *Quote API*, wherein I had to design 
a small web app using **Express.js** that allows users to **c**reate, **r**ead, **u**pdate, and **d**elete 
(CRUD) quotes about computers, coding, and technology.

The project had to satisfy the following requirements:

- the server should listen on port 4001
- the api should have a GET **/api/quotes/random** route that sends back a random quote
- the api should have a GET **/api/quotes** route - if the request has no query params, this 
  route should return all available quotes; if there is a query string with a *person* 
  attribute, this route should return all the quotes attributed to the specified person; if 
  there are no quotes for the requested person, an empty array should be returned 
- the spi should have a POST **/api/quotes** route for adding new quotes to the data; if the 
  request query string contains the correct parameters, this route handler adds the new quote 
  object to the data array and sends back an appropriate 'success' response; if the query 
  string does not contain the requisite parameters, a 400 'bad request' response is returned
- optionally: 
- [x] include a **PUT** route for updating quotes 
- [x] include a **DELETE** route for deleting quotes 
- [x] include the year of each quote 

***

## Project Screenshots

- Project Homepage

![Project Homepage][project_homepage]

[project_homepage]: images/home-page.PNG

- Random Quote

![Random Quote][random_quote]

[random_quote]: images/random-quote.PNG

- All Quotes

![All Quotes][all_quotes]

[all_quotes]: images/all-quotes.PNG

- Fetch by Author (request)

![Fetch by Author Request][fetch_by_author_request]

[fetch_by_author_request]: images/fetch-by-author-request.PNG

- Fetch by Author (response)

![Fetch by Author Response][fetch_by_author_response]

[fetch_by_author_response]: images/fetch-by-author-response.PNG

- Delete by Id (request)

![Delete by Id Request][delete_by_id_request]

[delete_by_id_request]: images/delete-by-id-request.PNG

- Delete by Id (response)

![Delete by Id Response][delete_by_id_response]

[delete_by_id_response]: images/delete-by-id-response.PNG

- Add a Quote (request)

![Add a Quote Request][add_a_quote_request]

[add_a_quote_request]: images/new-quote-request.PNG

- Add a Quote (response)

![Add a Quote Response][add_a_quote_response]

[add_a_quote_response]: images/new-quote-response.PNG

- New Quote Added

![New Quote Added][new_quote_added]

[new_quote_added]: images/new-quote-added.PNG

- Update a Quote (request)

![Update a Quote Request][update_a_quote_request]

[update_a_quote_request]: images/update-quote-request.PNG

- Update a Quote (response)

![Update a Quote Response][update_a_quote_response]

[update_a_quote_response]: images/update-quote-response.PNG

- Quote Updated

![Quote Updated][quote_updated]

[quote_updated]: images/quote-updated.PNG

***

## Technologies
  
I wrote this **Express.js web app** using the following technologies:

- *HTML*
- *CSS*
- *JavaScript*
- *Express.js*
- *Node JS*
  
***

## Using the App

This app can be used by cloning the project onto your computer, navigating to the project root via 
the command line, and running **node server.js**.
