import { useState } from 'react';
import { data } from './data';
import './App.css';


function App() {

  const [hotels, setHotels] = useState(data);
  const [showMore, setShowMore] = useState(false);

  const removeHotel = (id) => {
    let newHotels = hotels.filter((hotel) => hotel.id !== id);
    setHotels(newHotels);
  }

  return (
    <div>
      <div className="container">
        <h1>NYS TOP {hotels.length} HOTELS</h1>
      </div>
      { hotels.map ((hotel => {
        const { id, hotelName, description, image, source } = hotel;
        return (
          <div key={id}>
            <div className="container">
              <h2>
                {id} - {hotelName}
              </h2>
            </div>
            <div className="container">
              <p>
                {showMore ? description : description.substring(0, 260) + "..."}
                <button onClick={() => setShowMore(!showMore)}>
                  {showMore ? "Show less" : "Show more"}git init
                </button>
              </p>
            </div>
            <div className="container">
              <img src={image} width="500px" />
            </div>
            <div className="container">
              <p className="source">{source}</p>
            </div>
            <div className="container">
              <button className="btn" onClick={() => removeHotel(id)}>
                REMOVE
              </button>
            </div>
          </div>
        );
      }))}
    </div>
  );
}

export default App;
