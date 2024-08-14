import React from 'react';
import './MovieList.css';

const movies = [
  { id: 1, title: 'Inception', year: 2010, genre: 'Sci-Fi', image: 'https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_FMjpg_UX1000_.jpg' },
  { id: 2, title: 'The Dark Knight', year: 2008, genre: 'Action', image: 'https://rhapsodistreviews.wordpress.com/wp-content/uploads/2012/07/darkknight.jpg' },
  { id: 3, title: 'Interstellar', year: 2014, genre: 'Adventure', image: 'https://as.repertuary.pl/images/dbimages/film_9975_original_1.jpg' },
  { id: 4, title: 'KGF', year: 2021, genre: 'Fighting', image: 'https://m.media-amazon.com/images/M/MV5BMjY1MmM2N2ItYjc1NS00Yjc1LTkxYmQtNGJiMjYwMTlmNDE5XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg' },
  { id: 5, title: 'Welcome', year: 2018, genre: 'Comedy', image: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/welcome-et00000113-22-01-2021-06-47-27.jpg" },
  { id: 6, title: 'Bahubali', year: 2020, genre: 'Historical', image: 'https://m.media-amazon.com/images/I/81YRmoEwYtL._AC_UF1000,1000_QL80_.jpg' },
  { id: 7, title: 'Stree', year: 2017, genre: 'Entertainment', image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202211/Stree_1669362179.jpg' },
  { id: 8, title: 'SpiderMan', year: 2015, genre: 'Entertainment', image: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/spider-man-et00300238-25-01-2021-04-28-37.jpg" },
  { id: 9, title: 'Fast & Furious', year: 2011, genre: 'Adventure', image: 'https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/fast-and-furious-et00002818-12-08-2021-06-14-32.jpg' },
  { id: 10, title: 'Laila Majnu', year: 2023, genre: 'Romantic', image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/laila-majnu-et00070957-14-02-2018-12-45-46.jpg' },
  { id: 11, title: 'Kalki', year: 2024, genre: 'Adventure', image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg' },
  { id: 12, title: 'Double Ismart', year: 2024, genre: 'Action', image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/double-ismart-et00359660-1715779326.jpg' },
];

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <img src={movie.image} alt={movie.title} className="movie-image" />
          <h3>{movie.title}</h3>
          <p>{movie.year} | {movie.genre}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
