import React, {useState, useRef} from 'react';
import Movie from './Movie'

export default function NewMovie() {
  const [movies, setMovies] = useState([]);
  const inputRef = useRef();
  const refRating = useRef();

  function AddMovie(event){
    if(inputRef.current.value == ""){
      alert("Du måste fylla i titel!")

    }else if(refRating.current.value == 0){
      alert("Du måste ge ett betyg!")

    }else{
      const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

      setMovies([...movies, {
        id: newId,
        title: inputRef.current.value,
        rating: refRating.current.value
      }])
      inputRef.current.value = "";
      refRating.current.value="";

  }}

  function deleteMovie(id){
    setMovies(movies.filter((item) => item.id !== id));
  }
  function sortByTitle(){
      movies.sort((a,b) => a.title.localeCompare(b.title));
      setMovies([...movies]);
  }

  function sortByGrade(){
    console.log("hej")
    movies.sort((a, b) => b.rating - a.rating);
    setMovies([...movies]);
  }
  return (
    <div>
      <label for="title">Titel på film:</label>
      <input id="title" className="form-control" placeholder="Add new movie here..." ref={inputRef}  />

      <label for="rating">Betyg:</label>

      <select type="text" id="rating" className="form-control"ref={refRating}>
        <option value="0">Välj betyg här...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button type="submit" className="btn btn-success mt-3" onClick={() => {AddMovie()}}>Lägg till film</button>


      <ul className="list-group">
        { movies.map(movie => <Movie key={movie.id} item={movie} rating={refRating} deleteMovie={deleteMovie} />) }
      </ul>
      <button type="submit" className="btn btn-success mt-3" onClick={() => {sortByTitle()}}>Rangordna efter titel</button>
      <button type="submit" className="btn btn-success mt-3" onClick={() => {sortByGrade()}}>Rangordna efter betyg</button>
    </div>
  )
}
