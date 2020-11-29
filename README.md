# TOMdB Raider - The Original Movie Database
The One and Only Database for Movies, where you can see all the movies ever existed, search the ones you have imagined and get suggestions how to create them. So you can <b>see</b>, <b>search</b>, <b>sort</b> and of course <b>buy</b> them (or not ;D).

This project was created as an interview assignment and it will be described below.

PS. The amazing logo you will see it's a kind sponsorship from a friend that got inspired by the name TOMdB Raider, <a target="_blank" href="https://www.instagram.com/g.simos_tattoo/">George Simos</a>.

## How to run the project

### `yarn install` (in case you don't have node js installed you can do it following <a target="_blank" href="https://nodejs.org/en/download/package-manager/">these instrustions</a>)

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Description and User Flows of TOMdB Raider.

This project is a simple movie search and “purchase” application that a user can search the TMDB API, get results, sort and purchase a number of movies.
Here are some simplified user flows that will help you:
<ul>
  <li>Users see the most recent movies when they land on the home screen.</li>
  <li>Users can navigate through the different pages.</li>
  <li>Users search for a movie and they see a loading state while searching is in progress.</li>
  <li>Users search for a movie but don’t get any results. They see an empty state message.</li>
  <li>Users search for a movie and get results of some movies with posters and titles.</li>
  <ul>
    <li>They have the ability to add a movie in the cart.</li>
    <li>They have the ability to remove a movie from the cart by using the cart or the movie items from the list.</li>
    <li>They can also see how many movies they have added to the cart on the top of the page.</li>
    </ul>
  <li>Users can “purchase” the items in the cart by clicking a button.</li>
    <ul>
     <li>They get a successful message when the purchase succeeds. </li>
     <li>They should get an error message when something goes wrong. </li>
     <li>We should be careful not to charge them again by a user’s mistake while clicking the “purchase” button multiple times. </li>
      </ul>
  <li>Users can also sort results by highest/lowest vote_average key from the movies response but only for the results of the current page since the api returns results per page. However their sorting preferenct is saved and they will have the same even if they change page.</li>
  </ul>
 
 ## Tools and Apis
<ul>
  <li><b>Movies Data Endpoint</b></li>
  The <b>TMDB API</b>. You need to register and get a key from https://www.themoviedb.org/settings/api​. Anything else you are going to need for this exercise you can find in these two links:
<ul>
  <li>https://developers.themoviedb.org/3/search/search-movies</li>
  <li>https://developers.themoviedb.org/3/getting-started/images</li>
  </ul>
</ul>

<ul>
  <li><b>Purchase Endpoint</b></li>
We have prepared the endpoint https://api.mocklets.com/mock68075/ for you, that randomly responds with 400 or 200 status for POST requests. You will need to add two headers to your requests:
  
  ```
     'X-Mocklets-PublicKey': 'txmovies'
     'X-Mocklets-Checksum': '830c7cd4a70be6540a4898441ca02951'
  ```
  
  
  It’s not mandatory to use this endpoint, but we would like to see the headers in your requests and the side effects of the requests to your UI.
The endpoint’s payload should be a data object with a list of movie ids:

  ```
  {
    data: {
    movies: [541, 24, 35, 54]; }
  }
```

and the endpoint responds with this payload:
  ```
  {
    success: true|false
  }
  ```
</ul>
