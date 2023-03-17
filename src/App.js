import './App.css';
import api from './axios/axiosConfig';
import {useState, useEffect} from 'react';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () =>{

    try {

      const response = await api.get("/api/v1/movies");

      setMovies(response.data);

      console.log(response.data);

    } 
    catch (error) {
      console.log(error);
      
    }
    
  }
  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
