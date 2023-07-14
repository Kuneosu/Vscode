import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [photos, setPhoto] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => setPhoto(response.data));
  });
  return (
    <div className="App">
      <ul>
        {photos.map(photo => (
          <div>
            <li key={photo.id}>{photo.title}</li>
            <img src={photo.thumbnailUrl} />
          </div>
        ))}
      </ul>
    </div >
  );
}

export default App;
