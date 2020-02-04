# Movie Sagas
## Duration: Weekend
This application shows a number of movies for the user to peruse on a rainy day.  It shows the image, title, and description of each movie.  It also allows the user to click on the image to select just one movie and additionally see it's title, genres, and description.  This page also has a button that allows the user to edit the title and description.

This application displays movies from a database querying the server for movie details, matching them to a genre table to display genres and allowing users to edit the information on the page.

## Screenshot 
![](public/images/Screenshot.jpg)

## Installation

1. Run git clone http://... to fork and clone from this repository.

2. Run npm install to install dependencies like Uppy and Material-ui - these are listed in the package.json file.

3. Use the database.sql file to create a postgreSQL database on your machine. If you need to point this to a different folder look in the feedback.router.js.

4. Database is called saga_movies_weekend.
CREATE TABLE instructions included for movies,genres, and junction movies_genres.

5. Run npm run server to start the server.

6. Then run npm run client to start the client. React will open up a browser when the project loads.


## Usage
Peruse the page and click on the image to see more!

## Built With
react react-redux html jsx css bootstrap react-rain-animation

## License
MIT

## Support
If you have suggestions or issues, please email me at Evantilton@gmail.com
