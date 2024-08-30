import React, { useState } from 'react';
import './MovieList.css';

const movies = [
  // Your movie data here...
  { id: 1, title: 'Inception', year: 2010, genre: 'Sci-Fi', description: 'A skilled thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.', image: 'https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_FMjpg_UX1000_.jpg' },
  { id: 2, title: 'The Dark Knight', year: 2008, genre: 'Action', description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.', image: 'https://rhapsodistreviews.wordpress.com/wp-content/uploads/2012/07/darkknight.jpg' },
  { id: 3, title: 'Interstellar', year: 2014, genre: 'Adventure', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', image: 'https://as.repertuary.pl/images/dbimages/film_9975_original_1.jpg' },
  { id: 4, title: 'KGF', year: 2021, genre: 'Fighting', description: 'In the 1970s, a fierce rebel rises against brutal oppression and becomes a symbol of hope to legions of downtrodden people.', image: 'https://m.media-amazon.com/images/M/MV5BMjY1MmM2N2ItYjc1NS00Yjc1LTkxYmQtNGJiMjYwMTlmNDE5XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg' },
  { id: 5, title: 'Welcome', year: 2018, genre: 'Comedy', description: 'A laugh riot about a bunch of underworld dons trying to marry their sister into a "respectable" family.', image: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/welcome-et00000113-22-01-2021-06-47-27.jpg" },
  { id: 6, title: 'Bahubali', year: 2020, genre: 'Historical', description: 'In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.', image: 'https://m.media-amazon.com/images/I/81YRmoEwYtL._AC_UF1000,1000_QL80_.jpg' },
  { id: 7, title: 'Stree', year: 2017, genre: 'Entertainment', description: 'In a small town in India, a female spirit calls men by their name and then kills them during a festival season.', image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202211/Stree_1669362179.jpg' },
  { id: 8, title: 'SpiderMan', year: 2015, genre: 'Entertainment', description: 'A young man with spider-like abilities fights crime as a superhero in New York City while trying to have a normal personal life.', image: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/spider-man-et00300238-25-01-2021-04-28-37.jpg" },
  { id: 9, title: 'Fast & Furious', year: 2011, genre: 'Adventure', description: 'A group of illegal street racers gets involved in the underworld of heists and double-crosses.', image: 'https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/fast-and-furious-et00002818-12-08-2021-06-14-32.jpg' },
  { id: 10, title: 'Laila Majnu', year: 2023, genre: 'Romantic', description: 'Based on the legendary romance of Laila and Majnu, this film explores the intensity of true love.', image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/laila-majnu-et00070957-14-02-2018-12-45-46.jpg' },
  { id: 11, title: 'Kalki', year: 2024, genre: 'Adventure', description: 'A story of the final avatar of Lord Vishnu who descends to earth to battle against evil forces.', image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg' },
  { id: 12, title: 'Fast & Furious 4', year: 2015, genre: 'Racing', description: 'Dominic, an ex-convict fugitive, comes across agent Brian when a crime case brings them back to LA. However, they must set aside their differences and confront their common enemy, a heroin smuggler.', image: 'https://rukminim2.flixcart.com/image/850/1000/k3dc7m80/movie/j/g/6/2018-blu-ray-universal-pictures-excel-home-videos-english-fast-original-imafmggkrasyv4tn.jpeg?q=20&crop=false'},
  { id: 13, title: '3-idiots', year: 2010, genre: 'Drama', description: '3 Idiots is an award winning Bollywood comedy movie, directed by Rajkumar Hirani, starring Aamir Khan and Kareena Kapoor in the lead roles.', image: 'https://m.media-amazon.com/images/S/pv-target-images/0e767d7b964d2469c89d242d6bc4d6619e2eec1c4829a6c8d97055a108e78a5b.jpg'},
  { id: 14, title: 'i shankar', year: 2023, genre: 'Action', description: 'Shankar, an assassin, is on the run after murdering a politician. When a twist of fate gives him the memories of a slain police officer, he must help the authorities find a murderer.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6g6griCqj-XZXCNcpma0kEKm27bsU3DZGbfvXM1ftgPpTdPMoONZELjjxiXxYLLs778&usqp=CAU'},
  { id: 15, title: 'kantara', year: 2024, genre: 'Historical', description: 'When greed paves the way for betrayal, scheming and murder, a young tribal reluctantly dons the traditions of his ancestors to seek justice.', image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/Kantara_x.jpeg?VersionId=Yi_Z_fk36ATahRPgMq4jfKy.RmnDAZZW'},
];

const MovieList = () => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleImageClick = (movieId) => {
    setSelectedMovieId(movieId === selectedMovieId ? null : movieId);
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <img
            src={movie.image}
            alt={movie.title}
            className="movie-image"
            onClick={() => handleImageClick(movie.id)}
          />
          <h3>{movie.title}</h3>
          <p>{movie.year} | {movie.genre}</p>
          
          {selectedMovieId === movie.id && (
            <div className="movie-description">
              <p>{movie.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
