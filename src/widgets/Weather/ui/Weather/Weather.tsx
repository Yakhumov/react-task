import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/providers/store/store";
import { fetchweather } from "../../../../entities/Weather/model/slices/WeatherSlices";
import { RootState } from "../../../../app/providers/store/store";
import { SearchBar } from "../../../Search";
const clear_icon = new URL("../assets/clear.png", import.meta.url).href;
const humidity_icon = new URL("../assets/humidity.png", import.meta.url).href;
const wind_icon = new URL("../assets/wind.png", import.meta.url).href;
const cloud_icon = new URL("../assets/cloud.png", import.meta.url).href;
const drizzle_icon = new URL("../assets/drizzle.png", import.meta.url).href;
const rain_icon = new URL("../assets/rain.png", import.meta.url).href;
const show_icon = new URL("../assets/show.png", import.meta.url).href;

export const Weather = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.weather
  );
  const history = useSelector((state: RootState) => state.weather.savedHistory);

  const allIcons: Record<string, string> = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": clear_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": show_icon,
    "13n": show_icon,
  };

  return (
    <div className="weather">
      <SearchBar />
      {loading ? (
        <p>Загрузка...</p>
      ) : error ? (
        <p>Ошибка: {error}</p>
      ) : data ? (
        <>
          <img
            src={allIcons[data?.icon] || clear_icon}
            alt=""
            className="weather-icon"
          />
          <p className="temperature">{data.temperature}°C</p>
          <p className="location">{data.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="Влажность" />
              <div>
                <p>{data.humidity}%</p>
                <span>Влажность</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="Ветер" />
              <div>
                <p>{data.windSpeed} м/с</p>
                <span>Скорость ветра</span>
              </div>
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
