import { useEffect, useState } from 'react'
import DataComponents from './Components/DataComponets';


function App() {
  const [data, setData] = useState({});
  const [town, setTown] = useState('');

  const key = '81c322d7d900235a4cc49c1dfef307a3'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&lang=en&appid=${key}`
  
  const searchWeather = (e) => {
    if (e.key === 'Enter') {
      searchWeatherBTN()
    }
  }

  const searchWeatherBTN = () => {
    fetch(url)
     .then(res => res.json())
     .then(data => setData(data));
  }

  useEffect(
    () => {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=kyiv&units=metric&lang=en&appid=81c322d7d900235a4cc49c1dfef307a3')
     .then(res => res.json())
     .then(data => setData(data))
    }, [])

  return (
    <div className="totalApp">
     <div className="in-field">
      <input type="text" value={town} onChange={(e) => setTown(e.target.value)} onKeyDown={searchWeather}/>
       <button onClick={searchWeatherBTN}>Search</button>
     </div>
     <div className="container">
      <div className="header">
        <div className="city">
          <p>{data.name}</p>
        </div>
        <DataComponents/>
        <div className="temp">
            {data.main ? (<h1>{data.main.temp.toFixed()}°C</h1>) : null } 
            {/* чтобы не выбивало ошибку потому что при первом рендере дата undefined и нет властивости temp */}
        </div>    
            <div className="desc">
              {data.weather && <p>{data.weather[0].main}</p>}
              {/* чтобы не выбивало ошибку потому что при первом рендере дата undefined и нет властивости temp */}
            </div>
       
        {data.name !==undefined && (
          <div className="footer"> 
          <div className="feels">
          <p>Feels like: </p>
            {data.main && (
              <p className='bold'> {data.main.feels_like.toFixed()}°C</p>
             )}
              </div> 
            <div className="humidity">
              <p>Humidity: </p>
              {data.main && (
                <p className='bold'> {data.main.humidity} </p>
              )}
            </div>
            <div className="wind">
              <p>Wind:</p>
              {data.wind && (
                <p className='bold'> {data.wind.speed}m/s </p>
              )}
            </div>
             <div className="sunrise">
             <p>Sunrise:</p>
             {data.sys && (
              <p className='bold'> {new Date(data.sys.sunrise*1000).toLocaleTimeString()}</p>
             )}
             </div>
             <div className="sunset">
             <p>Sunset:</p>
             {data.sys && (
              <p className='bold'>{new Date(data.sys.sunset*1000).toLocaleTimeString()}</p>
             )}
             </div>
          </div>
        )}
      
      </div>
     </div>
    </div>
  )
}

export default App
