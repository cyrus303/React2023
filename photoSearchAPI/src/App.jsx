import { useState } from 'react';
import './App.css';
import ImageList from './components/ImageList';
import SearchBar from './components/searchBar';
import SearchImages from './SearchImagesAPI';

function App() {
  const [photos, setPhotos] = useState([]);

  const handleSubmit = async (searchTerm) => {
    let results = await SearchImages(searchTerm);
    setPhotos(results);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={photos} />
    </div>
  );
}

export default App;
