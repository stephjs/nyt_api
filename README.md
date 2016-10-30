# New York Times Archive Search

This Javascript / jQuery web application allows users to quickly and easily find New York Times articles based on a search term and optional start and end date parameters. Then application uses the New York Times Article Search API to return the top 10 article results. Check it out! https://nytapi-search.herokuapp.com/

## API Work with [**The New York Times Article Search API**](https://developer.nytimes.com/)

- All searches require a **query term**. Then the search is performed on the article body, headline and byline to find results containing the specific query term.

- Optional search by **start date**, restricting responses to results with publication dates of the date specified or later.

- Optional search by **end date**, restricting responses to results with publication dates of the date specified or earlier.
