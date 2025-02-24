import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/providers/store/store";
import { fetchweather } from "../../../../entities/Weather/model/slices/WeatherSlices";
import { RootState } from "../../../../app/providers/store/store";
import { SearchBar } from "../../../Search";
import wind_icon from "../../../../assets/wind.png";
import humidity_icon from "../../../../assets/humidity.png";  

export const Weather = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.weather);  
  const history = useSelector((state: RootState) => state.weather.savedHistory);

 

  return (
    <div className="weather">
      <SearchBar />
      {loading ? (
        <p>Загрузка...</p>
      ) : error ? (
        <p>Ошибка: {error}</p>  
      ) : data ? (
        <>
          <img src={data.icon} alt="" className="weather-icon" />  
          <p className="temperature">{data.temperature}°C</p>
          <p className="location">{data.location}</p> 
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="" />  
              <p>{data.humidity}%</p>
              <span>Влажность</span>
            </div>
            <div className="col">
              <img src={wind_icon} alt="" />
              <p>{data.windSpeed} м/с</p>
              <span>Скорость ветра</span>  
            </div>
          </div>
        </>
      ) : (
        <p>Данных нет</p>
      )} 
      <h1 className="history-title">История поиска</h1>  
      <ul className="history-list">
        {history.length > 0 ? (
          history.map((city: string) => (
            <li
              className="history-item"
              key={city}
              onClick={() => dispatch(fetchweather(city))}
            >
              {city}
            </li>
          ))
        ) : (
          <p>История поиска пуста</p>
        )}
      </ul>
    </div>
  );
};
